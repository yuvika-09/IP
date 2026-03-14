const express = require("express")
const router = express.Router()

const User = require("../models/User")

// REGISTER
router.post("/register", async (req, res) => {

  const { name, email, password } = req.body

  try{

    const user = new User({
      name,
      email,
      password
    })

    await user.save()

    res.json({ message: "User Registered Successfully" })

  }
  catch(err){

    res.status(500).json({ message: "Error registering user" })

  }

})


// LOGIN
router.post("/login", async (req, res) => {

  const { email, password } = req.body

  console.log("Login attempt:", email, password)

  const user = await User.findOne({ email })

  console.log("User found:", user)

  if (!user) {
    return res.status(400).json({ message: "User not found" })
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Invalid password" })
  }

  res.json({ message: "Login successful", user })
})

module.exports = router