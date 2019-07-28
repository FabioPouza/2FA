import { User } from './requestModel/User';
import { Helper2FA } from '../helpers/2FAHelper';

export class UserService{
    constructor(){ }

    userLogin(user: User){
        try {
            console.log(user);
        } catch (error) {
            throw error;
        }
    }

    async createTwoFactor(){
        try {
            const helper2FA = new Helper2FA();
            const qrCode = await helper2FA.genQRCode();
            const htmlTag = `<img src="${qrCode}" height="42" width="42">`

            return htmlTag;
        } catch (error) {
            throw error;
        }
    }
}