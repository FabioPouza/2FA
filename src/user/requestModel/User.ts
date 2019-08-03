import { GeneratedSecret } from "speakeasy";

export class User{
    constructor(user: User){
        this.email = user.email;
        this.password = user.password;
        this.token = user.token;
    }

    public email: string;
    public password: string;
    public token: string;
}