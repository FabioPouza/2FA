import { User } from './requestModel/User';
import { Helper2FA } from '../helpers/2FAHelper';
import speakeasy from "speakeasy";

export class UserService{
    constructor(){ }

    async userLogin(user: User){
        try {

            const helper2FA = new Helper2FA();
            const loginUser = await helper2FA.getUsers(user);
            const verified = await speakeasy.totp.verify({
                secret: loginUser.token,
                encoding: 'base32',
                token: user.token
            });


            console.log(verified);
            
        } catch (error) {
            throw error;
        }
    }

    async createTwoFactor(user: User){
        try {
            const helper2FA = new Helper2FA();
            const qrCode = await helper2FA.genQRCode(user);
            const htmlTag = `<img src="${qrCode}" height="200" width="200">`

            return htmlTag;
        } catch (error) {
            throw error;
        }
    }
}