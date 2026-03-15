import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:""
  });

  const [show,setShow] = useState(false);

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleLogin = async(e)=>{

    e.preventDefault();

    try{

      const res = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      });

      const data = await res.json();

      if(res.ok){

        localStorage.setItem("token",data.token);
        localStorage.setItem("username",data.user.name);

        navigate("/dashboard");

      }else{
        alert(data.message);
      }

    }catch(err){
      alert("Server error");
    }

  }

  return (

    <div className="auth-container">

      <form className="card" style={{width:"380px"}} onSubmit={handleLogin}>

        <h2 className="form-title">Login</h2>

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
          Login
        </button>

        <p className="link-text">
          Don't have an account? <Link to="/register"><span>Sign Up</span></Link>
        </p>

      </form>

    </div>

  );
}