import {Switch,Route} from "react-router-dom"
// import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Admin from "./components/Admin"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./components/Home"
import BookingDetails from "./components/BookingDetails"
// import ProtectedRoute from "./components/ProtectedRoute"
// import Archieved from "./components/Archieved"
// import Bin from "./components/Bin"


const App=()=>{
  return(
  
       <Switch>
        {/* <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/archieve" component={Archieved}/>
        <ProtectedRoute exact path="/bin" component={Bin}/> */}
        <Route exact path="/api/signup" component={Register}/>
        <Route exact path="/api/login" component={Login}/>
        <Route exact path="/admin/page" component={Admin}/>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/booking/details" component={BookingDetails}/>

       </Switch>
  
  )
}

export default App;
