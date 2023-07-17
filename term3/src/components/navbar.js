import React from "react";
import '../App.css';

// Images
import Logo from '../Assets/images/Logo.svg';
import Header from '../Assets/images/Header.svg';
import Burger from '../Assets/images/Burger.svg';
import BurgerBig from '../Assets/images/BurgerBig.svg';

// Import Bootstrap functionality
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    return (

        <div className="nav_bg Container Abel" style={{ position: 'fixed', top: 0 }}>
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

            <Row>
                <Col className="nav flex-column" style={{fontSize: '22px', textAlign: 'center'}}>
                    <a className="nav-link" href="/">Landing</a>
                    <a className="nav-link" href="/products">Products</a>
                    <a className="nav-link" href="/checkout">Checkout</a>
                    <a className="nav-link" href="/administrator">Administrator</a>
                </Col>
            </Row>
        </div>

    )
}

export default Navbar;