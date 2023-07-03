let getIndexPage = (req, res) => {
  return res.render("home.ejs");
};

module.exports = {
  getIndexPage,
};
