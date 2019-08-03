// @ts-ignore
import speakeasy from 'speakeasy';
// @ts-ignore
import  QRCode from "qrcode";
import { User } from '../user/requestModel/User';

export class Helper2FA {

    constructor(){ }
    
    public static users: Array<User> = [];
    
    /**
     * genQRCode
     */
    public async genQRCode(user: User) {
        const secret = speakeasy.generateSecret({length: 20});

        user.token = secret.base32;

        Helper2FA.users.push(user);

        // @ts-ignore
        return await QRCode.toDataURL(secret.otpauth_url);
    }

    public async getUsers(user: User): Promise<User>{
        
        const loginUser = await Helper2FA.users.filter(item => {
            
            if(user.email === item.email) return item; 
        });

        return loginUser[0];
    }
}
