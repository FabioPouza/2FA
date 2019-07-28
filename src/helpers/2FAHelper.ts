import speakeasy from 'speakeasy';
import  QRCode from "qrcode";

export class Helper2FA {

    constructor(){ }
    
    /**
     * genQRCode
     */
    public async genQRCode() {
        const secret = speakeasy.generateSecret({length: 20});
    
        return await QRCode.toDataURL(secret.otpauth_url);
    }
}
