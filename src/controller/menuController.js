let getMenuPage = (req, res) => {
  return res.render("menu.ejs");
};

module.exports = {
  getMenuPage,
};
