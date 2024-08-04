import { Component } from "react";
import "./index.css"
import Cookies from "js-cookie"

class Trainroute extends Component{
    state={no_of_seats:""}
    seats=(event)=>{
       this.setState({no_of_seats:event.target.value})
    }
    book=async()=>{
        const {details,add}=this.props
        const {train_id}=details
        const user_id=Cookies.get("user_id")
        const jwtToken=Cookies.get("jwt_token")
        console.log(user_id)
        const {no_of_seats}=this.state
        const data={
            no_of_seats,
            user_id
        }
        if (no_of_seats!=="" ){
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:`bearer ${jwtToken}`

                },
                body: JSON.stringify(data),
            };

            const res1 = await fetch(`https://stepoutback.onrender.com/api/trains/${train_id}/book`, options)

            console.log(res1)
            const resdata1 = await res1.json()
            console.log(resdata1)
            if (Object.keys(resdata1).length<=1){
                
                alert(resdata1.ok)
                this.setState({no_of_seats:""})
                add()
            }else{
                 alert(resdata1.message+" "+ resdata1.seat_numbers)
                 this.setState({no_of_seats:""})
                 add()
            }
            
            
        }
        else{
             alert("Enter seats")
             add()
        }      
    }
    render(){
        const {details}=this.props
        const {train_name, available_seats}=details
        const {no_of_seats}=this.state
        return(
            <li className="trainCon1">
                <div className="trainCon2">
                    <div className="trainCon3">
                    <div>
                    <p className="para1">Train name</p>
                    <span className="span1">{train_name}</span>
                    </div>
                    {/* <div>
                    <p className="para1">Source</p>
                    <span className="span1">{source}</span>
                    </div>
                    <div>
                    <p className="para1">Destination</p>
                    <span className="span1">{destination}</span>
                    </div> */}
                    </div>
                    <hr/>
                    <div className="trainCon3">
                        <div>
                    <p className="para1">Available seats</p>
                    <span className="span1">{available_seats}</span>
                    </div>
                    
                         
                    
                    </div>
                    
                        <div className="trainCon6">
                    <input className="inputEle1" placeholder="Enter no of seats you want to book" onChange={this.seats} value={no_of_seats} type="text"/>
                    <button onClick={this.book} className="button1">Book seats</button>
                    </div>
                    
                </div>
            </li>
        )
    }
}

export default Trainroute