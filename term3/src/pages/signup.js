// Import UseState and Effect
import { useState } from 'react';

// Axios import
import Axios from "axios";

// Import react
import React from "react";

// Import CSS
import '../App.css';

// Bootstrap
import { Row, Col, Button } from "react-bootstrap";

function SignUp() {

    // Get the email and password the user input
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [error, setError] = useState("");

    // Change the variables every time the user changes an input
    const DataChange = () => {
        let Email = document.getElementById("inpEmail").value;
        let Password = document.getElementById("inpPass").value;

        setEmail(Email);
        setPass(Password);
    }

    const DataChangeSignIn = () => {
        let Username = document.getElementById("inpSIUsername").value;
        let Email = document.getElementById("inpSIEmail").value;
        let Password = document.getElementById("inpSIPassword").value;

        setUsername(Username)
        setEmail(Email);
        setPass(Password);
    }

    // Login function
    const LoginSubmit = async (e) => {
        // --stops the page from refreshing on submit
        e.preventDefault();

        try {
            var data = { email: email, password: pass }

            const URL = "http://localhost:5000/api/loginUser";
            const { data: res } = await Axios.post(URL, data);

            // --Save the email to localStorage (for changing the navbar)
            sessionStorage.setItem("Email", email);
            // --Save token to localStorage
            sessionStorage.setItem("token", res.data);
            // --Return to the home page
            window.location = "/";

        } catch (error) {
            // --return the error
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    // Sign Up Function
    const SignUpSubmit = async (e) => {
        // --stops the page from refreshing on submit
        e.preventDefault();

        try {
            const URLAdd = "http://localhost:5000/api/addUser/";

            let payload = {
                username: username,
                email: email,
                password: pass
            }

            Axios.post(URLAdd, payload)

            var data = { email: email, password: pass }

            const URL = "http://localhost:5000/api/loginUser";
            const { data: res } = await Axios.post(URL, data);

            // --Save the email to localStorage (for changing the navbar)
            sessionStorage.setItem("Email", email);
            // --Save token to localStorage
            sessionStorage.setItem("token", res.data);
            // --Return to the home page
            window.location = "/";

        } catch (error) {
            // --return the error
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (

        <div className="login_bg Container Abel" style={{ height: '620px' }}>
            {/* Sign Up Form */}
            <Row style={{ display: 'block', zIndex: '9', position: 'relative' }} id="SignUpRow">
                <Col></Col>
                <Col style={{ backgroundColor: '#f8f7f2', height: '350px' }}>
                    <form onSubmit={SignUpSubmit}>
                        <h3>Sign Up</h3>

                        <div className="ConfirmDiv">
                            <label className="inline">Username</label>
                            <br></br>
                            <input type="text" className="BillingInput" id='inpSIUsername' onChange={DataChangeSignIn} required></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Email</label>
                            <br></br>
                            <input type="email" className="BillingInput" id='inpSIEmail' onChange={DataChangeSignIn} required></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Password</label>
                            <br></br>
                            <input type="password" className="BillingInput" id='inpSIPassword' onChange={DataChangeSignIn} required></input>
                        </div>

                        <Button type='submit' style={{ fontSize: '20px' }}>Sign In</Button>
                    </form>
                    <br></br>
                    <br></br>

                    <div>
                        <h5>Already have an account?</h5>
                        <button type="button" id="btnLogin" onClick={() => {
                            document.getElementById("LoginRow").style.display = 'block';
                            document.getElementById("SignUpRow").style.display = 'none';
                        }}>Log In</button>
                    </div>

                </Col>
                <Col></Col>
            </Row>

            {/* Login Form */}
            <Row style={{ display: 'none', zIndex: '9', position: 'relative' }} id="LoginRow">
                <Col></Col>
                <Col style={{ backgroundColor: '#f8f7f2', height: '350px' }}>
                    {/* --Login form submit */}
                    <form onSubmit={LoginSubmit}>
                        <h3>Log In</h3>

                        <div className="ConfirmDiv">
                            <label className="inline">Email</label>
                            <br></br>
                            <input type="input" className="BillingInput" placeholder="Email" id="inpEmail" onChange={DataChange} required></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Password</label>
                            <br></br>
                            <input type="input" className="BillingInput" placeholder="Password" id="inpPass" onChange={DataChange} required></input>
                        </div>

                        {error && <div>{error}</div>}
                        <button type='submit' style={{borderRadius: '15px', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: 'large', backgroundColor: '#f8f7f2', border: '3px solid black'}}>Sign In</button>

                    </form>

                    {/* --Change back to Sign Up */}
                    <br></br>
                    <h5>Don't have an account?</h5>
                    <button type="button" id="btnLogin" onClick={() => {
                        document.getElementById("LoginRow").style.display = 'none';
                        document.getElementById("SignUpRow").style.display = 'block';
                    }}>Sign Up</button>

                </Col>
                <Col></Col>
            </Row>

        </div>

    )
}

export default SignUp;