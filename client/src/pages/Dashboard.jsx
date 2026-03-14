import TrafficMap from "../components/TrafficMap"
import AQICard from "../components/AQICard"
import BusTracker from "../components/BusTracker"
import EmergencyServices from "../components/EmergencyServices"
import CityAnnouncements from "../components/CityAnnouncements"
import { useNavigate } from "react-router-dom"

function Dashboard(){

const navigate = useNavigate()

return(

<div className="dashboard">

<h1>Smart City Dashboard</h1>

<div className="cards">

<div className="card" onClick={()=>navigate("/traffic")}>
<TrafficMap/>
</div>

<div className="card" onClick={()=>navigate("/aqi")}>
<AQICard/>
</div>

<div className="card" onClick={()=>navigate("/transport")}>
<BusTracker/>
</div>

<div className="card" onClick={()=>navigate("/emergency")}>
<EmergencyServices/>
</div>

<div className="card" onClick={()=>navigate("/announcements")}>
<CityAnnouncements/>
</div>

</div>

</div>

)

}

export default Dashboard