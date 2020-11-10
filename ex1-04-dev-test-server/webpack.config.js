module.exports = {
  devServer: {
    port: 8081,
    before: (app, server, client) => {
      app.get("/api/keywords", (req, res) => {
        res.json([
          { keyword: "대한민국" },
          { keyword: "미국" },
          { keyword: "중국" },
        ]);
      });
    },
  },
};
