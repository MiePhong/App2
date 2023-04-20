import config from "../config/connnectDB";
import sql from "mssql/msnodesqlv8";
import jwt from "jsonwebtoken";
require("dotenv").config();

sql.connect(config, (err) => {
  if (err) console.log(err);
});

let method_post_login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT * FROM Users WHERE Email='${email}' AND UserPassword='${password}'`;
  sql.query(query, (err, result) => {
    if (err) console.log(err);

    if (result.recordsets[0].length > 0) {
      //Create JWT
      const accessToken = jwt.sign(
        { email, password },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      console.log(accessToken);
      res.cookie("token", accessToken, { httpOnly: true, secure: true });
      res.render("index.ejs");
    } else {
      res.send(`
  <script>
    alert('Vui lòng kiểm tra lại thông tin đăng nhập')
    window.location.href = "/login"; // Chuyển về trang chính
  </script>
`);
    }
  });
};

module.exports = {
  method_post_login,
};
