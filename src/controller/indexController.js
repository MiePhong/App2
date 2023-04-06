let getIndexPage = (req, res) => {
  return res.render("index.ejs");
};

module.exports = {
  getIndexPage,
};
