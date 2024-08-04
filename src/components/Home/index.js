import { Component } from "react";
import Header from "../Header";
import "./index.css"
import Trainroute from "../Trainroute"

import Cookies from "js-cookie"

class Home extends Component{
    state={showSubmitError: false,errorMsg: '',source:"",destination:"",list:[],there:false,nothing:true}
    source=(event)=>{
        this.setState({source:event.target.value})
    }
    destination=(event)=>{
        this.setState({destination:event.target.value})
    }
    x=()=>{
        return(
        <div><p>There is nothing to show at the moment</p></div>)
    }
    
    add=async()=>{
        const user_id=Cookies.get("user_id")
        console.log(user_id)
        const {source,destination}=this.state
        if (source!=="" && destination!=="" ){
            const options = {
                method: "GET"
            };

            const res1 = await fetch(`https://stepoutback.onrender.com/api/trains/availability?source=${source}&destination=${destination}`, options)

            console.log(res1)
            const resdata1 = await res1.json()
            console.log(resdata1)
            if (resdata1.length!==0){
                this.setState({there:true, list:resdata1,nothing:false})
            }else{
                 this.setState({nothing:true})
            }
            
            
        }
        else{
             this.setState({showSubmitError:true,errorMsg:"Enter all inputs"})
        }        
    }
    render(){
        const {source,destination, showSubmitError, errorMsg,list, there, nothing}=this.state
        return(
            <div className="homeCon1">
                <Header home="true" booking="false"/>
                <div className="adminCon2">
                <div className="adminCon3">
                    <label className="labelEle" for="source">Source</label>
                    <input className="inputEle" onChange={this.source} type="text" placeholder="Enter the source name" id="source" value={source}/>
                </div>
                <div className="adminCon3">
                    <label className="labelEle" for="destination">Destination</label>
                    <input className="inputEle" onChange={this.destination} type="text" placeholder="Enter the destination name" id="destination" value={destination}/>
                </div>
                <button className="button1" type="button" onClick={this.add}>Get trains</button>
                {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                </div>
                {there && <div className="adminCon4">
                    <h1>Trains Avaliable in this route</h1>
                    <ul >
                        {list.map(every=>(
                            <Trainroute add={this.add} key={every.train_id} details={every} />
                        ))}
                        </ul>
                        </div>}

                {nothing && this.x()}        
            </div>
        )
    }
}

export default Home