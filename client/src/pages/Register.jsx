import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const [show,setShow] = useState(false);

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleRegister = async(e)=>{
    e.preventDefault();

    try{

      const res = await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      });

      const data = await res.json();

      if(res.ok){
        alert("Registration Successful");
        navigate("/");   // redirect to login
      }else{
        alert(data.message);
      }

    }catch(err){
      alert("Server Error");
    }
  }

  return (

    <div className="auth-container">

      <form className="card" style={{width:"380px"}} onSubmit={handleRegister}>

        <h2 className="form-title">Create Account</h2>

        <div className="form-group">
          <label>Name</label>
          <input
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          required
          />
        </div>

        <div className="form-group input-wrapper">
          <label>Password</label>
          <input
          name="password"
          type={show ? "text":"password"}
          value={user.password}
          onChange={handleChange}
          required
          />

          <span
          className="password-toggle"
          onClick={()=>setShow(!show)}>
          {show ? "Hide":"Show"}
          </span>
        </div>

        <button className="btn-primary" style={{width:"100%",marginTop:"15px"}}>
          Register
        </button>

      </form>

    </div>
  );
}