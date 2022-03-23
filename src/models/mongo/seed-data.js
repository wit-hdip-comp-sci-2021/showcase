export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    },
    admin: {
      firstName: "Admin",
      lastName: "Admin",
      email: "admin@email.ie",
      password: "password"
    }
  },
  portfolios: {
    _model: "Portfolio",
    budget: {
      title: "Budget",
      portfolioCategory: "Extensions",
      userid: "->users.bart"
    }
  },
  projects: {
    _model : "Project",
    project_1 : {
      projectTitle: "Cartoor Farmhouse",
      latitude: "53.3378",
      longitude: "-9.18",
      styleDescription: "Modern",
      projectDescription: "An old farmhouse in Moycullen area",
      areaSqM: 40,
      priceEu: 70000,
      image1: "https://res.cloudinary.com/whodunya/image/upload/v1646082553/showcase/310-1-3D_View_1_ersrii.jpg",
      image2: "https://res.cloudinary.com/whodunya/image/upload/v1646082553/showcase/310-1-3D_View_1_ersrii.jpg",
      image3: "https://res.cloudinary.com/whodunya/image/upload/v1646082553/showcase/310-1-3D_View_1_ersrii.jpg",
      portfolioid: "->portfolios.budget",
    },
  }
};