// Move sign up and login to top right corner

import React from "react";
import '../App.css';

// Bootstrap
import { Row, Col } from "react-bootstrap";

function SignUp() {
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
                    <div>
                        <h3>Log In</h3>

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

                        <h5>Don't have an account?</h5>
                        <button type="button" id="btnLogin" onClick={() => {
                            document.getElementById("LoginRow").style.display = 'none';
                            document.getElementById("SignUpRow").style.display = 'block';
                        }}>Sign Up</button>

                    </div>
                </Col>
                <Col></Col>
            </Row>

        </div>

    )
}

export default SignUp;