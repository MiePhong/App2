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

  return app.use("/", router);
};

export default initWebRouter;
