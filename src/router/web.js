//Tất cả những route trong website
import express from "express";
import indexController from "../controller/indexController";
import mapController from "../controller/mapController";
import menuController from "../controller/menuController";
import newsController from "../controller/newsController";
import socialsController from "../controller/socialsController";
import aboutUsController from "../controller/aboutUsController";
import bookingController from "../controller/bookingController";
import loginController from "../controller/loginController";
import signUpController from "../controller/signUpController";

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
  router.get("/", indexController.getIndexPage);
  router.get("/map", mapController.getMapPage);
  router.get("/menu", menuController.getMenuPage);
  router.get("/news", newsController.getNewsPage);
  router.get("/socials", socialsController.getSocialsPage);
  router.get("/aboutUS", aboutUsController.getAboutPage);
  router.get("/booking", bookingController.getBookingPage);
  router.get("/login", loginController.getLoginPage);
  router.get("/signUp", signUpController.getSignUpPage);

  router.post("/login", urlencodedParser, post_login.method_post_login);
  router.post("/signUp", urlencodedParser, post_register.method_post_register);

  router.post("/", urlencodedParser, post_SendMail.send_mail);

  return app.use("/", router);
};

export default initWebRouter;
