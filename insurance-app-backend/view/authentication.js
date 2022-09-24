const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
class JWTPayload{
    static secretkey = "strongPassword";
    constructor(user){
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.userName = user.credential.userName
        this.isActive = user.isActive
        this.role     = user.role
    }

   static async comparePassword(password,recordPassword)
    {
        let passwordMatch = await bcrypt.compare(password,recordPassword);
        return passwordMatch;
    }

    createToken()
    {
        return jwt.sign(JSON.stringify(this),JWTPayload.secretkey)
    }

    static verifyCookie(token)
    {
        return jwt.verify(token,JWTPayload.secretkey)
    }

    static isValidUser(req,resp)
    {
        const myToken = req.cookies["myToken"];
        if (!myToken) {
            return false
        }
        return JWTPayload.verifyCookie(myToken)
    }
    
}

module.exports = JWTPayload;

