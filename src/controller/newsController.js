let getNewsPage = (req, res) => {
  return res.render("news.ejs");
};

module.exports = {
  getNewsPage,
};
