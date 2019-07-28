import urls  from "../helpers/constants/urls";
import UserController from "../user/userController";

export = (app) => {
    app.route(urls.AUTH)
        .post(UserController.userLogin)
}
