import React from "react";
import '../App.css';

// Bootstrap
import { Row, Col } from "react-bootstrap";

function SignUp() {
    return (

        <div className="login_bg Container Abel">
            <Row>
                <Col></Col>
                <Col><button type="button" id="btnSignUp" onClick={() => {
                    if (document.getElementById("SignUpRow").style.display === 'none') {
                        document.getElementById("SignUpRow").style.display = 'block';
                    } else if (document.getElementById("SignUpRow").style.display === 'block') {
                        document.getElementById("SignUpRow").style.display = 'none'
                    }
                }} >Sign Up</button></Col>
                <Col></Col>
            </Row>

            <Row style={{ display: 'none', zIndex: '9', position: 'relative' }} id="SignUpRow">
                <Col></Col>
                <Col style={{ backgroundColor: '#f8f7f2', height: '350px' }}>
                    <div>
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
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>

    )
}

export default SignUp;