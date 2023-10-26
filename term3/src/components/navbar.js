import React from "react";
import '../App.css';

// Images
import Logo from '../Assets/images/Logo.svg';
import Header from '../Assets/images/Header.svg';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    // Admin Sign In:
    // xdvxdvdxv@gmail.com
    // WaterBoy

    // If the user is an admin, show the admin page instead of checkout in the navbar
    if (sessionStorage.getItem('Email') === "xdvxdvdxv@gmail.com") {
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
                    <Col style={{ fontSize: '22px' }}>
                        <a className="nav_link" href="/">Landing</a>
                        <a className="nav_link" href="/products">Products</a>

                        <a className="nav_link" href="/administrator">Administrator</a>

                        <a className="nav_link" style={{ marginRight: '0px' }} onClick={() => { if (window.confirm('Are you sure you want to log out?')) { sessionStorage.clear() } }} href="/signup">Sign Out</a>
                    </Col>
                </Row>
            </div>

        )
        // If the user is not signed in:
    } else if (sessionStorage.getItem('Email') === null) {
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
                    <Col style={{ fontSize: '22px' }}>
                        <a className="nav_link" href="/">Landing</a>
                        <a className="nav_link" href="/products">Products</a>

                        <a className="nav_link" href="/checkout">Checkout</a>

                        <a className="nav_link" style={{ marginRight: '0px' }} href="/signup">Account</a>
                    </Col>
                </Row>
            </div>

        )
    } else {
         // If the user is a normal user, show the checkout page instead of admin in the navbar
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
                    <Col style={{ fontSize: '22px' }}>
                        <a className="nav_link" href="/">Landing</a>
                        <a className="nav_link" href="/products">Products</a>

                        <a className="nav_link" href="/checkout">Checkout</a>

                        <a className="nav_link" style={{ marginRight: '0px' }} onClick={() => { if (window.confirm('Are you sure you want to log out?')) { sessionStorage.clear() } }} href="/signup">Sign Out</a>
                    </Col>
                </Row>
            </div>

        )
        // If the user is not signed in, show the account page to sign in with
    }
}

export default Navbar;