import { db } from "../models/db.js";
import { ProjectSpec } from "../models/joi-schemas.js";

export const portfolioController = {
  index: {
    handler: async function (request, h) {
      const portfolio = await db.portfolioStore.getPortfolioById(request.params.id);
      const viewData = {
        title: "Portfolio",
        portfolio: portfolio,
      };
      return h.view("portfolio-view", viewData);
    },
  },

  addProject: {
    validate: {
      payload: ProjectSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const portfolio = await db.portfolioStore.getPortfolioById(request.params.id);
        const viewData = {
          title: "Portfolio",
          portfolio: portfolio,
          errors: error.details
        };
        return h.view("portfolio-view", viewData).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const portfolio = await db.portfolioStore.getPortfolioById(request.params.id);
      const newProject = {
        projectTitle: request.payload.projectTitle,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        styleDescription: request.payload.styleDescription,
        projectDescription: request.payload.projectDescription,
        areaSqM: Number(request.payload.areaSqM),
        priceEu: Number(request.payload.priceEu),
        image1: "https://res.cloudinary.com/whodunya/image/upload/v1646082553/showcase/310-1-3D_View_1_ersrii.jpg",
        image2: "https://res.cloudinary.com/whodunya/image/upload/v1646082553/showcase/310-1-3D_View_1_ersrii.jpg",
        image3: "https://res.cloudinary.com/whodunya/image/upload/v1646082553/showcase/310-1-3D_View_1_ersrii.jpg",
      };
      await db.projectStore.addProject(portfolio._id, newProject);
      return h.redirect(`/portfolio/${portfolio._id}`);
    },
  },

  deleteProject: {
    handler: async function(request, h) {
      const portfolio = await db.portfolioStore.getPortfolioById(request.params.id);
      await db.projectStore.deleteProject(request.params.projectid);
      return h.redirect(`/portfolio/${portfolio._id}`);
    },
  },
};