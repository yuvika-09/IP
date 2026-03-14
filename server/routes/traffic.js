const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{

const traffic = [

{ road:"Highway 1", status:"Heavy Traffic" },
{ road:"Main Street", status:"Clear" },
{ road:"City Center", status:"Moderate" }

]

res.json(traffic)

})

module.exports = router