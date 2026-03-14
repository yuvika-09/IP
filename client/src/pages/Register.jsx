import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleRegister = async ()=>{

try{

await API.post("/auth/register",{
name,
email,
password
})

alert("Registered Successfully")

navigate("/")

}
catch(err){

alert("Registration failed")

}

}

return(

<div className="form-container">

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleRegister}>
Register
</button>

</div>

)

}

export default Register