// Import React functionality
import React from "react";

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

// Images
import Carousel1 from '../Assets/images/items/carousel1.jpg';
import Carousel2 from '../Assets/images/items/carousel2.png';
import Carousel3 from '../Assets/images/items/carousel3.jpg';

import Banner from '../Assets/images/banner.png';
import IceCream1 from '../Assets/images/items/IceCream1.png';
import IceCream2 from '../Assets/images/items/IceCream2.png';
import IceCream3 from '../Assets/images/items/IceCream3.png';

import Banner2 from '../Assets/images/banner2.png';

function Landing() {

    // Function to change the content of the item depending on what has been selected
    const ChangeSelected = (ID) => {
        return () => {
            // --If-else statement to change the information displayed in the output
            if (ID === "NewItem1") {
                // ----Indicate which item is selected
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("NewItem2").style.border = "none";
                document.getElementById("NewItem3").style.border = "none";

                document.getElementById("btnNewItem1").style.display = "block";
                document.getElementById("btnNewItem2").style.display = "none";
                document.getElementById("btnNewItem3").style.display = "none";
            } else if (ID === "NewItem2") {
                // ----Indicate which item is selected
                document.getElementById("NewItem1").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("NewItem3").style.border = "none";

                document.getElementById("btnNewItem1").style.display = "none";
                document.getElementById("btnNewItem2").style.display = "block";
                document.getElementById("btnNewItem3").style.display = "none";
            } else if (ID === "NewItem3") {
                // ----Indicate which item is selected
                document.getElementById("NewItem1").style.border = "none";
                document.getElementById("NewItem2").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                document.getElementById("btnNewItem1").style.display = "none";
                document.getElementById("btnNewItem2").style.display = "none";
                document.getElementById("btnNewItem3").style.display = "block";
            }

            // --If-else statement to change the information displayed in the output
            if (ID === "DiscItem1") {
                // ----Indicate which item is selected
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById("btnDiscItem1").style.display = "block";
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "none";
            } else if (ID === "DiscItem2") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById("btnDiscItem1").style.display = "none";
                document.getElementById("btnDiscItem2").style.display = "block";
                document.getElementById("btnDiscItem3").style.display = "none";
            } else if (ID === "DiscItem3") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                document.getElementById("btnDiscItem1").style.display = "none";
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "block";
            }

        }
    }

    return (
        // Div that holds all elements
        <div style={{ height: 'auto' }}>

            {/* Image Slider */}
            <Row className="beige_bg" style={{ paddingBottom: "25px" }}>
                {/* --Makes space left of the slider */}
                <Col className="col-2"></Col>

                {/* --Slider */}
                <Col className="col-8">

                    <div id="HeroSlider">
                        {/* ----Carousel */}
                        <Carousel className="carousel-dark">
                            {/* ------Carousel Items */}
                            <Carousel.Item interval={10000}>
                                <img className="d-block w-100 CarouselImg" src={Carousel1} alt="Image1" />

                                <Carousel.Caption>
                                    <h3 className="brown Lobster CarouselHeading">Neapolitan</h3>
                                    <p className="brown Abel CarouselText">Strawberry, Chocolate and Vanilla - an unbeatable combo!</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img className="d-block w-100 CarouselImg" src={Carousel2} alt="Image2" />

                                <Carousel.Caption>
                                    <h3 className="brown Lobster CarouselHeading">Strawberry Cup</h3>
                                    <p className="brown Abel CarouselText">A cup of flavorful strawberry ice cream, with a free strawberry cone!</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img className="d-block w-100 CarouselImg" src={Carousel3} alt="Image3" />

                                <Carousel.Caption>
                                    <h3 className="brown Lobster CarouselHeading">Party Package</h3>
                                    <p className="brown Abel CarouselText">Bulk ordering for upcoming events!</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                </Col>

                {/* --Makes space right of the slider */}
                <Col className="col-2"></Col>
            </Row>

            {/* Business Description */}
            <Row className="beige_bg">
                <Col className="col-3"></Col>
                <Col className="col-6">
                    <h2 className="brown Rye">Wintry West</h2>
                    <p className="brown Abel" style={{ fontSize: "larger" }}>Wintry West is a western-styled ice cream eCommerce site, where you can get all your rootin’ tootin’ ice cream needs satisfied.</p>
                </Col>
                <Col className="col-3"></Col>
            </Row>

            {/* New Items Header */}
            <Row className="beige_bg">
                <img src={Banner} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* New Items */}
            <Row>
                <Col className="text-end">
                    <img src={IceCream1} alt="Item1" className="IceCreamImg" onClick={ChangeSelected("NewItem1")} id="NewItem1"></img>
                    <button type="button" id="btnNewItem1" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA BISCUIT EXPRESS</h5>
                        <h6>with CHOCOLATE SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={IceCream2} alt="Item2" className="IceCreamImg" onClick={ChangeSelected("NewItem2")} id="NewItem2"></img>
                    <button type="button" id="btnNewItem2" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>COCONUT STRACCIATELLA</h5>
                        <h6>with BITTERSWEET CHOCOLATE STRANDS</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={IceCream3} alt="Item3" className="IceCreamImg" onClick={ChangeSelected("NewItem3")} id="NewItem3"></img>
                    <button type="button" id="btnNewItem3" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA TUMBLER PACKAGE</h5>
                        <h6>with CHOCOLATE BALLS AND SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
            </Row>

            <br></br>

            {/* Discounts Header */}
            <Row className="beige_bg">
                <img src={Banner2} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* Discounts */}
            <Row>
                <Col className="text-end">
                    <img src={IceCream1} alt="Item1" className="IceCreamImg" onClick={ChangeSelected("DiscItem1")} id="DiscItem1"></img>
                    <button type="button" id="btnDiscItem1" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA BISCUIT EXPRESS</h5>
                        <h6>with CHOCOLATE SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={IceCream2} alt="Item2" className="IceCreamImg" onClick={ChangeSelected("DiscItem2")} id="DiscItem2"></img>
                    <button type="button" id="btnDiscItem2" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>COCONUT STRACCIATELLA</h5>
                        <h6>with BITTERSWEET CHOCOLATE STRANDS</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={IceCream3} alt="Item3" className="IceCreamImg" onClick={ChangeSelected("DiscItem3")} id="DiscItem3"></img>
                    <button type="button" id="btnDiscItem3" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA TUMBLER PACKAGE</h5>
                        <h6>with CHOCOLATE BALLS AND SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
            </Row>

            <br></br>

            {/* Hidden element that displays once an item is clicked. Contains information regarding clicked item */}
            <Row style={{ display: 'none' }} id="SelectedItemDisc">

                <Col style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <h2 id="SelectedDiscItemHeading">COCONUT STRACCIATELLA</h2>
                    <h4 id="SelectedDiscItemSubheading">with BITTERSWEET CHOCOLATE STRANDS</h4>
                    <p id="SelectedDiscDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>

                <Col></Col>
            </Row>

            <br></br>
            <br></br>
        </div>

    )
}

export default Landing;