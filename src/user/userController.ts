import { User } from './requestModel/User';
import { UserService } from './userService';
import { Request, Response } from "express";

class UserController {
    constructor(){

    }
    userLogin(req: Request, res: Response){
        try {
            const user = Object.assign(new User, req.body);
            console.log(user.email);
            
            // const userService = new UserService();

            // userService.userLogin(user);

            res.status(200).json({auth: true, token: 'MOCK'});

        } catch (error) {
            res.status(403).json({err: 'Invalid Login'});
        }
    }

    createTwoFactor(req, res){
        try {
            const userService = new UserService();
            const qrcodeImage = userService.createTwoFactor();

            res.status(200).html(qrcodeImage);
        } catch (error) {
            res.status(403).json({err: 'TESTE'});
        }
    }
}

export default new UserController();