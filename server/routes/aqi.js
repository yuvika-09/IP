const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{

const aqiData = {

aqi:120,
pm25:45,
pm10:70

}

res.json(aqiData)

})

module.exports = router