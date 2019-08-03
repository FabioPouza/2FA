import urls  from "../helpers/constants/urls";
import UserController from "../user/userController";
import { Application } from "express";

export = (app: Application) => {
    app.route(urls.AUTH)
        .post(UserController.userLogin);
    app.route(urls.TOKEN)
        .get(UserController.createTwoFactor);
}
