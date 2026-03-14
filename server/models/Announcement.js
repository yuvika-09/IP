const mongoose = require("mongoose")

const announcementSchema = new mongoose.Schema({

  message: String

})

module.exports = mongoose.model("Announcement", announcementSchema)