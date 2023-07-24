import React from "react";
import '../App.css';

// Images
import email from '../Assets/images/email.png';
import facebook from '../Assets/images/facebook.png';
import instagram from '../Assets/images/instagram.png';
import location from '../Assets/images/location.png';
import Header from '../Assets/images/Header.svg';

// Bootstrap
import { Row, Col } from "react-bootstrap";

function Footer() {
    return (

        <div className="footer_bg Container Abel">
            <Row>
                <Col><img src={email} alt="email" width={'30px'}></img> <img src={facebook} alt="location" width={'30px'}></img></Col>
                <Col><p>FLAVOURS</p></Col>
                <Col><p>THE SCOOP</p></Col>

                <Col><img src={Header} alt="Header" width={'200px'} style={{ marginTop: '-12px' }}></img> </Col>

                <Col><p>PURCHASE</p></Col>
                <Col><p>CONTACT</p></Col>
                <Col><img src={instagram} alt="facebook" width={'30px'} style={{ marginTop: '-5px' }}></img> <img src={location} alt="instagram" width={'30px'} style={{ marginTop: '-5px' }}></img></Col>
            </Row>
        </div>

    )
}

export default Footer;