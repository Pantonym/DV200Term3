import React from "react";
import '../App.css';

// Images
import Logo from '../Assets/images/Logo.svg';
import Header from '../Assets/images/Header.svg';

// Import Bootstrap functionality
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarAdmin() {

    return (

        <div className="nav_bg Container Abel">
            <Row>
                <Col>
                    <img style={{ marginBottom: '-60px' }} src={Logo} alt="Logo" />
                </Col>

                <Col>
                    <img src={Header} alt="Header" />
                </Col>

                <Col>
                    <img style={{ marginBottom: '-60px', transform: 'scaleX(-1)' }} src={Logo} alt="Logo" />
                </Col>
            </Row>

            <br></br>

            <Row>
                <Col style={{fontSize: '22px'}}>
                    <a className="nav_link" href="/">Landing</a>
                    <a className="nav_link" href="/products">Products</a>
                    <a className="nav_link" href="/administrator">Administrator</a>

                    <a className="nav_link" style={{marginRight: '0px'}} href="/signup">Account</a>
                </Col>
            </Row>
        </div>

    )
}

export default NavbarAdmin;