const nodemailer = require("nodemailer");
require("dotenv").config();

let send_mail = async (req, res) => {
  const email = req.body.sendMail;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 25, // have tried 465
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail(
    {
      from: process.env.EMAIL, // sender address
      to: email, // list of receivers
      subject: "Thankyou ✔", // Subject line
      text: "Hello", // plain text body
      html: "<b>Chúng tôi đã nhận được mail của bạn , chúng tôi rất vui mừng khi được phục vụ bạn</b>", // html body
    },
    (err) => {
      if (err) {
        res.send(`
        <script>
            alert('Vui lòng kiểm tra lại Email')
            window.location.href = "/"; // Chuyển về trang chính
        </script>`);
      } else {
        res.send(`
        <script>
          alert('Thankyou! Chúng tôi sẽ phản hồi lại cho bạn sớm nhất.')
          window.location.href = "/"; // Chuyển về trang chính
        </script>`);
      }
    }
  );
};

module.exports = {
  send_mail,
};
