import { Component } from "react";
import "./index.css"

class Train extends Component{
    render(){
        const {details}=this.props
        const {train_name, seat_capacity,arrival_time_at_source, arrival_time_at_destination,source, destination}=details
        return(
            <li className="trainCon1">
                <div className="trainCon2">
                    <div className="trainCon3">
                    <div>
                    <p className="para1">Train name</p>
                    <span className="span1">{train_name}</span>
                    </div>
                    <div>
                    <p className="para1">Source</p>
                    <span className="span1">{source}</span>
                    </div>
                    <div>
                    <p className="para1">Destination</p>
                    <span className="span1">{destination}</span>
                    </div>
                    </div>
                    <hr/>
                    <div className="trainCon3">
                        <div>
                    <p className="para1">Seat Capacity</p>
                    <span className="span1">{seat_capacity}</span>
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
                </div>
            </li>
        )
    }
}

export default Train