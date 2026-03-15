import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard(){

const [username,setUsername] = useState("");

useEffect(()=>{
  const name = localStorage.getItem("username");
  if(name) setUsername(name);
},[]);

return(

<div className="container">

<div className="navbar">
<div className="logo">Smart City Dashboard</div>
<div>Welcome {username}</div>
</div>

<h2 className="page-title">City Monitoring System</h2>
<p className="subtitle">Real-time city insights</p>

<div className="dashboard-grid">

<Link to="/aqi">
<div className="dashboard-card large">
<h3>🌫 Air Quality</h3>
<p>Monitor pollution levels</p>
</div>
</Link>

<Link to="/traffic">
<div className="dashboard-card large">
<h3>🚦 Traffic</h3>
<p>Check congestion status</p>
</div>
</Link>

<Link to="/transport">
<div className="dashboard-card large">
<h3>🚌 Transport</h3>
<p>Public transport tracking</p>
</div>
</Link>

<Link to="/announcements">
<div className="dashboard-card large">
<h3>📢 Announcements</h3>
<p>Latest city updates</p>
</div>
</Link>

<Link to="/emergency">
<div className="dashboard-card large">
<h3>🚑 Emergency</h3>
<p>Emergency contact services</p>
</div>
</Link>

</div>

</div>

)

}