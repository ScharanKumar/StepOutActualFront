import { Component } from "react";
import Train from "../Train"
import "./index.css"

class Admin extends Component{
    state={showSubmitError: false,errorMsg: '',train_name:"",source:"",destination:"",seat_capacity:"",arrival_time_at_source:"",arrival_time_at_destination:"",key:"",list:[],there1:false}
    name=(event)=>{
        this.setState({train_name:event.target.value})
    }
    source=(event)=>{
        this.setState({source:event.target.value})
    }
    destination=(event)=>{
        this.setState({destination:event.target.value})
    }
    seat=(event)=>{
        this.setState({seat_capacity:parseInt(event.target.value)})
    }
    sourceArrival=(event)=>{
        this.setState({arrival_time_at_source:event.target.value})
    }
    destinationArrival=(event)=>{
        this.setState({arrival_time_at_destination:event.target.value})
    }
    key=(event)=>{
        this.setState({key:event.target.value})
    }
    reg = () => {
        const { history } = this.props
        history.replace("/api/signup")
    }
    add=async()=>{
        const {train_name,source,destination,arrival_time_at_source,arrival_time_at_destination,seat_capacity,key}=this.state
        if (train_name!=="" && source!=="" && destination!=="" && arrival_time_at_source!=="" && arrival_time_at_destination!=="" && seat_capacity!=="" && key!==""){
            const data = {
                train_name,
                source,
                destination,
                arrival_time_at_source,
                arrival_time_at_destination,
                seat_capacity,
                key
            }

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            };

            const res1 = await fetch("https://stepoutback.onrender.com/api/trains/create", options)

            console.log(res1)
            const resdata1 = await res1.json()
            console.log(resdata1)
            this.after()
            this.setState({train_name:"",source:"", destination:"", arrival_time_at_source:"",arrival_time_at_destination:"",key:"",seat_capacity:""})
            
        }
        else{
             this.setState({showSubmitError:true,errorMsg:"Enter all inputs"})
        }
        // console.log(typeof(seat_capacity))
        // console.log(this.state)
        
    }

    componentDidMount(){
        this.after()
    }

    after=async()=>{
        const option={
            method:"GET"
        }
        const response=await fetch('https://stepoutback.onrender.com/trains/get',option)
        console.log(response)
        const data=await response.json()
        console.log(data)
        this.setState({list:data,there1:true})
    }

    render(){
        const {showSubmitError,errorMsg,list,there1,train_name,source,destination,arrival_time_at_source,arrival_time_at_destination,key,seat_capacity}=this.state
        return(
            <div className="adminCon1">
                <div className="adminCon2">
                <div className="adminCon3">
                    <label className="labelEle" for="train">Train Name</label>
                    <input className="inputEle" onChange={this.name} type="text" placeholder="Enter train name" id="train" value={train_name}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="source">Source</label>
                    <input className="inputEle" onChange={this.source} type="text" placeholder="Enter the source name" id="source" value={source}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="destination">Destination</label>
                    <input className="inputEle" onChange={this.destination} type="text" placeholder="Enter the destination name" id="destination" value={destination}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="seats">Seat Capacity</label>
                    <input className="inputEle" onChange={this.seat} type="text" placeholder="Enter total seats" id="seats" value={seat_capacity}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="sourceArr">Arrival time at source</label>
                    <input className="inputEle" onChange={this.sourceArrival} type="text" placeholder="Enter the arrival time at source" id="sourceArr" value={arrival_time_at_source}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="destinationArr">Arrival time at destination</label>
                    <input className="inputEle" onChange={this.destinationArrival} type="text" placeholder="Enter the arrival time at destination" id="destinationArr" value={arrival_time_at_destination}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="key">Key</label>
                    <input className="inputEle" onChange={this.key} type="password" placeholder="Enter the key" id="destinationArr" value={key}/>
                </div>
                <button className="button1" type="button" onClick={this.add}>Add train</button>
                {showSubmitError && <p className="error-message">*{errorMsg}</p>}

                </div>
                <button onClick={this.reg} className='buttonL1' type='button' >Register page</button>
                {there1 && <div className="adminCon4">
                    <h1>Trains Avaliable</h1>
                    <ul >
                        {list.map(every=>(
                            <Train key={every.train_id} details={every} />
                        ))}
                        </ul>
                        </div>}
                        
                
            </div>
        )
    }
}

export default Admin