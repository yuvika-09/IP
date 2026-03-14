const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{

const buses = [

{ bus:"Bus 12", destination:"City Center", eta:"3 min" },
{ bus:"Bus 7", destination:"Railway Station", eta:"5 min" }

]

res.json(buses)

})

module.exports = router