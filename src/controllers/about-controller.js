export const aboutController = {
    index: {
      handler: function (request, h) {
        const viewData = {
          title: "About Showcase",
        };
        return h.view("about-view", viewData);
      },
    },
  };