import { Component } from "react";
import "./index.css"

// import { v4 as uuidv4 } from 'uuid'

class Register extends Component {
    state = {
        username: "", password: "", email:"", showSubmitError: false,
        errorMsg: ''
    }

    user = (event) => {
        this.setState({ username: event.target.value })
    }

    login=()=>{
        const { history } = this.props
        history.replace("/api/login")
    }

    admin = () => {
        const { history } = this.props
        history.replace("/admin/page")
    }

    pass = (event) => {
        this.setState({ password: event.target.value })
    }

    email = (event) => {
        this.setState({ email: event.target.value })
    }

    onSubmitFailure = errorMsg => {
        this.setState({ showSubmitError: true, errorMsg })
    }

    register = async () => {
        const { username, password, email } = this.state
        // const id=uuidv4()
        if (username !== "" && password !== "" && email!=="") {
            const data = {
                username,
                password, email
            }

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            };

            const res1 = await fetch("https://stepoutback.onrender.com/api/signup", options)

            console.log(res1)
            const resdata1 = await res1.text()
            console.log(resdata1)

            if (resdata1 !== "Username already exists") {
                const { history } = this.props
                history.replace("/api/login")
            } else {
                this.onSubmitFailure(resdata1)
            }
        }
        else {
            this.setState({ showSubmitError: true, errorMsg: "Enter Username, Password and Email" })
        }

    }

    render() {
        const { username, password, showSubmitError, errorMsg, email } = this.state
        return (
            <div className="conRegister1">
                <div className="conInsideReg1">
                    {/* <h1 className="headR1">Jackpot</h1> */}
                    <img src='https://mybuddyinfo.jswpaints.in/Images/icon-register.png' alt='RegisterImage' className='img2R' />
                    <div className="containerR">


                        <button className="buttonR3"></button>

                        <button className="buttonR2"></button>

                    </div>

                </div>
                <div className="conInsideReg2">
                    <h1 className="headR2">Welcome !</h1>
                    <h2 className="headR3">Register here.</h2>
                    <div className="conInside">
                        <h1>Username</h1>
                        <input value={username} onChange={this.user} className="inputR1" type="text" placeholder="Enter username" />
                        <div>
                            <h1>Password</h1>
                            <input value={password} onChange={this.pass} className="inputR1" type="password" placeholder="Enter password" />
                        </div>
                        <div>
                            <h1>Email</h1>
                            <input value={email} onChange={this.email} className="inputR1" type="text" placeholder="Enter email" />
                        </div>
                        <button onClick={this.register} className="buttonR">Register</button>
                        <button onClick={this.login} className="buttonL1">Login page</button>
                        <button onClick={this.admin} className='buttonL1' type='button' >Admin page</button>
                        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Register