import React from "react";
import '../App.css';

// Bootstrap
import { Row, Col } from "react-bootstrap";

function LogIn() {
    return (

        <div className="login_bg Container Abel">
            <Row>
                <Col></Col>
                <Col><button type="button" id="btnLogin" onClick={() => {
                    if (document.getElementById("LoginRow").style.display === 'none') {
                        document.getElementById("LoginRow").style.display = 'block';
                    } else if (document.getElementById("LoginRow").style.display === 'block') {
                        document.getElementById("LoginRow").style.display = 'none'
                    }
                }} >Log In</button></Col>
                <Col></Col>
            </Row>

            <Row style={{ display: 'none', zIndex: '9', position: 'relative' }} id="LoginRow">
                <Col></Col>
                <Col style={{ backgroundColor: '#f8f7f2', height: '350px' }}>
                    <div>
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

export default LogIn;