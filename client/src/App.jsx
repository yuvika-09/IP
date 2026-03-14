import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import TrafficDetails from "./pages/TrafficDetails"
import AQIDetails from "./pages/AQIDetails"
import TransportDetails from "./pages/TransportDetails"
import EmergencyDetails from "./pages/EmergencyDetails"
import AnnouncementsDetails from "./pages/AnnouncementsDetails"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/traffic" element={<TrafficDetails/>}/>
<Route path="/aqi" element={<AQIDetails/>}/>
<Route path="/transport" element={<TransportDetails/>}/>
<Route path="/emergency" element={<EmergencyDetails/>}/>
<Route path="/announcements" element={<AnnouncementsDetails/>}/>

</Routes>

</BrowserRouter>

)

}

export default App