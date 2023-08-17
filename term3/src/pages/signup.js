// Import UseState and Effect
import { useState, useEffect } from 'react';

// Axios import
import Axios from "axios";

// Import react
import React from "react";

// Import CSS
import '../App.css';

// Bootstrap
import { Row, Col } from "react-bootstrap";

function SignUp() {

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const DataChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const LoginSubmit = async (e) => {
        // stops the page from refreshing on submit
        e.preventDefault();

        try {
            const URL = "http://localhost:5000/auth";
            const { data: res } = await Axios.post(URL, data);

            // Save token to localStorage
            localStorage.setItem("token", res.data);
            window.location = "/landing"

            console.log(localStorage.getItem("token"));
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (

        <div className="login_bg Container Abel" style={{ height: '620px' }}>
            <Row style={{ display: 'block', zIndex: '9', position: 'relative' }} id="SignUpRow">
                <Col></Col>
                <Col style={{ backgroundColor: '#f8f7f2', height: '350px' }}>
                    <div>
                        <h3>Sign Up</h3>

                        <div className="ConfirmDiv">
                            <label className="inline">Name</label>
                            <br></br>
                            <input type="input" className="BillingInput"></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Surname</label>
                            <br></br>
                            <input type="input" className="BillingInput"></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Email</label>
                            <br></br>
                            <input type="input" className="BillingInput"></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Password</label>
                            <br></br>
                            <input type="input" className="BillingInput"></input>
                        </div>

                        <h5>Already have an account?</h5>
                        <button type="button" id="btnLogin" onClick={() => {
                            document.getElementById("LoginRow").style.display = 'block';
                            document.getElementById("SignUpRow").style.display = 'none';
                        }}>Log In</button>

                    </div>
                </Col>
                <Col></Col>
            </Row>

            <Row style={{ display: 'none', zIndex: '9', position: 'relative' }} id="LoginRow">
                <Col></Col>
                <Col style={{ backgroundColor: '#f8f7f2', height: '350px' }}>

                    <form onSubmit={LoginSubmit}>
                        <h3>Log In</h3>

                        <div className="ConfirmDiv">
                            <label className="inline">Email</label>
                            <br></br>
                            <input type="input" className="BillingInput" placeholder="Email" onChange={DataChange} required></input>
                        </div>

                        <div className="ConfirmDiv">
                            <label className="inline">Password</label>
                            <br></br>
                            <input type="input" className="BillingInput" placeholder="Password" onChange={DataChange} required></input>
                        </div>

                        {error && <div>{error}</div>}
                        <button type='submit'>Sign In</button>

                    </form>

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