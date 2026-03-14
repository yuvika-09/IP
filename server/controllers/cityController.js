const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{

const {name,email,password} = req.body;

const user = await User.create({
name,
email,
password
});

const token = jwt.sign(
{id:user._id},
"smartcitysecret",
{expiresIn:"7d"}
);

res.json({
user,
token
});

};


exports.login = async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(user && user.password === password){

const token = jwt.sign(
{id:user._id},
"smartcitysecret",
{expiresIn:"7d"}
);

res.json({
user,
token
});

}else{
res.status(401).json({message:"Invalid credentials"});
}

};