import config from "../config/connnectDB";
import sql from "mssql/msnodesqlv8";

sql.connect(config, (err) => {
  if (err) console.log(err);
});

let method_post_register = (req, res) => {
  const roleID = 2;
  const email = req.body.email2;
  const password = req.body.password2;
  const re_pass = req.body.re_pass;

  if (password != re_pass) {
    return res.send(`<script>
    alert('Password không khớp !!! Thử lại')
    window.location.href = "/signUp"; // Chuyển về trang chính
  </script>`);
  } else {
    // Kiểm tra xem email đã được sử dụng chưa
    const query = `SELECT * FROM users WHERE Email='${email}' `;
    sql.query(query, (err, result) => {
      if (err) console.log(err);

      if (result.recordsets[0].length > 0) {
        return res.send(`
                  <script>
                    alert('Email đã được sử dụng ,hãy chọn Email khác')
                    window.location.href = "/signUp"; // Chuyển về trang chính
                  </script>`);
      } else {
        // Thêm người dùng mới vào cơ sở dữ liệu
        const insertQuery = `INSERT INTO Users (RoleID,Email,UserPassword) VALUES ('${roleID}', '${email}','${password}')`;
        sql.query(insertQuery, (err, result) => {
          if (err) console.log(err);
          return res.send(`
          <script>
            alert(' Đăng kí thành công ! ')
            window.location.href = "/login"; // Chuyển về trang chính
          </script>`);
        });
      }
    });
  }
};

module.exports = {
  method_post_register,
};
