import { Component } from "react";
import Cookies from "js-cookie"
import Trainroute1 from "../Trainroute1";
import Header from "../Header";
import "./index.css"

class BookingDetails extends Component{
    state={list:[],there:false}
    after=async()=>{
       const user_id=Cookies.get("user_id")
       const jwtToken=Cookies.get("jwt_token")
       const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:`bearer ${jwtToken}`

        },
    };

    const res1 = await fetch(`https://stepoutback.onrender.com/booking_details/get/${user_id}`, options)

    console.log(res1)
    const resdata1 = await res1.json()
    console.log(resdata1)
    if (resdata1.length!==0){
        this.setState({list:resdata1,there:true})
    }
    }
    componentDidMount(){
        this.after()
    }
    render(){
        const {there,list}=this.state
        return(
            <div className="bookingCon1">
                <Header home="false" booking="true"/>
                {there && <div className="adminCon4">
                    <h1>Booked seats</h1>
                    <ul >
                        {list.map(every=>(
                            <Trainroute1 key={every.booking_id} details={every} />
                        ))}
                        </ul>
                        </div>}
            </div>
        )
    }
}

export default BookingDetails