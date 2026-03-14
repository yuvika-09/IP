const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const trafficRoutes = require("./routes/traffic")
const aqiRoutes = require("./routes/aqi")
const transportRoutes = require("./routes/transport")
const announcementRoutes = require("./routes/announcements")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/smartcity")

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected")
})

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/traffic", trafficRoutes)
app.use("/api/aqi", aqiRoutes)
app.use("/api/transport", transportRoutes)
app.use("/api/announcements", announcementRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})