//Tất cả những route trong website
import express from "express";

import loginController from "../controller/loginController";
import signUpController from "../controller/signUpController";
import homeController from "../controller/homeController";
//import middleware
import urlencodedParser from "../middleware/body_parser";
//import controller post_login
import post_login from "../controller/post_login";
//import controller post_register
import post_register from "../controller/post_register";
//import controller post_sendMail
import post_SendMail from "../controller/post_SendMail";

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/", homeController.getIndexPage);
  router.get("/home", homeController.getIndexPage);
  router.get("/login", loginController.getLoginPage);
  router.get("/signUp", signUpController.getSignUpPage);

  router.post("/login", urlencodedParser, post_login.method_post_login);
  router.post("/signUp", urlencodedParser, post_register.method_post_register);

  router.post("/", urlencodedParser, post_SendMail.send_mail);

  return app.use("/", router);
};

export default initWebRouter;
