const jwt = require("jsonwebtoken")
const User = require("../Model/usermodel")

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const data = jwt.verify(token, "Mykey123");
        const user = await User.findOne({_id:data._id});
        if(!user){
            throw new Error()
        }
        req.user = user;
        req.token = token;
        next();
        
    } catch (error) {
        res.status(401).send({error: "Not auth....."})
    }
} 

module.exports = {
    auth
}