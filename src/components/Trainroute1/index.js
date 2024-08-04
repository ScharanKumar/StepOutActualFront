import { Component } from "react";
import "./index.css"
// import Cookies from "js-cookie"

class Trainroute extends Component{
    
    render(){
        const {details}=this.props
        const {train_name,no_of_seats,seat_numbers,arrival_time_at_source,arrival_time_at_destination}=details
        
        return(
            <li className="trainCon1">
                <div className="trainCon2">
                    <div className="trainCon3">
                    <div>
                    <p className="para1">Train name</p>
                    <span className="span1">{train_name}</span>
                    </div>
                    <div>
                    <p className="para1">Arrival time at source</p>
                    <span className="span1">{arrival_time_at_source}</span>
                    </div>
                    <div>
                    <p className="para1">Arrival time at destination</p>
                    <span className="span1">{arrival_time_at_destination}</span>
                    </div>
                    </div>
                    <hr/>
                    <div className="trainCon3">
                    <div>
                    <p className="para1">No of seats</p>
                    <span className="span1">{no_of_seats}</span>
                    </div>
                        <div>
                    <p className="para1">Seat numbers</p>
                    <span className="span1">{seat_numbers}</span>
                    </div>
                    
                    
                         
                    
                    </div>
                
                    
                </div>
            </li>
        )
    }
}

export default Trainroute