const express = require("express")
const router = express.Router()

const Announcement = require("../models/Announcement")

// GET announcements
router.get("/", async (req,res)=>{

const announcements = await Announcement.find()

const messages = announcements.map(a => a.message)

res.json(messages)

})

// ADD announcement
router.post("/", async (req,res)=>{

const { message } = req.body

const newAnnouncement = new Announcement({
message
})

await newAnnouncement.save()

res.json({message:"Announcement added"})

})

module.exports = router