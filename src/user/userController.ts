import { User } from './requestModel/User';
import { UserService } from './userService';
import { Request, Response} from "express";

class UserController {
    constructor(){

    }
    userLogin(req: Request, res: Response){
        try {
            const user = new User(req.body);

            const userService = new UserService();

            userService.userLogin(user);

            res.status(200).json({auth: true, token: 'MOCK'});

        } catch (error) {
            res.status(403).json({err: 'Invalid Login'});
        }
    }

        async createTwoFactor(req: Request, res: Response){
        try {
            const user = new User(req.body);
            const userService = new UserService();
            const qrcodeImage = await userService.createTwoFactor(user);

            res.send(qrcodeImage);
        } catch (error) {
            res.status(403).json({err: 'TESTE'});
        }
    }
}

export default new UserController();