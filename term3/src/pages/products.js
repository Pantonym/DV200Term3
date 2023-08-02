// Import React functionality
import React from "react";

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

// Images
import Banner2 from '../Assets/images/banner2.png';
import BannerCream1 from '../Assets/images/items/BannerCream1.png';
import BannerCream2 from '../Assets/images/items/BannerCream2.png';
import BannerCream3 from '../Assets/images/items/BannerCream3.png';
import BannerCream4 from '../Assets/images/items/IceCream3.png';

import BannerCream5 from '../Assets/images/items/BannerCream1.png';
import BannerCream6 from '../Assets/images/items/BannerCream2.png';

import Banner3 from '../Assets/images/banner3.png';
import TypeCream1 from '../Assets/images/items/BannerCream1.png';
import TypeCream2 from '../Assets/images/items/BannerCream2.png';
import TypeCream3 from '../Assets/images/items/BannerCream3.png';
import TypeCream4 from '../Assets/images/items/IceCream3.png';

import TypeCream5 from '../Assets/images/items/BannerCream1.png';
import TypeCream6 from '../Assets/images/items/BannerCream2.png';

function Products() {

    // Function to change the content of the item depending on what has been selected
    const ChangeSelected = (ID) => {
        return () => {
            // --If-else statement to change the information displayed in the output
            if (ID === "DiscItem1") {
                // ----Indicate which item is selected
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById("DiscItem4").style.border = "none";
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById("DiscItem6").style.border = "none";

                // ----Show Button, hide rest
                document.getElementById("btnDiscItem1").style.display = "block";
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "none";

                document.getElementById("btnDiscItem4").style.display = "none";
                document.getElementById("btnDiscItem5").style.display = "none";
                document.getElementById("btnDiscItem6").style.display = "none";
            } else if (ID === "DiscItem2") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById("DiscItem4").style.border = "none";
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById("DiscItem6").style.border = "none";

                // ----Show Button
                document.getElementById("btnDiscItem1").style.display = "none";
                document.getElementById("btnDiscItem2").style.display = "block";
                document.getElementById("btnDiscItem3").style.display = "none";

                document.getElementById("btnDiscItem4").style.display = "none";
                document.getElementById("btnDiscItem5").style.display = "none";
                document.getElementById("btnDiscItem6").style.display = "none";
            } else if (ID === "DiscItem3") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                document.getElementById("DiscItem4").style.border = "none";
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById("DiscItem6").style.border = "none";

                // ----Show Button
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "block";

                document.getElementById("btnDiscItem4").style.display = "none";
                document.getElementById("btnDiscItem5").style.display = "none";
                document.getElementById("btnDiscItem6").style.display = "none";
            } else if (ID === "DiscItem4") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById("DiscItem6").style.border = "none";

                // ----Show Button, hide rest
                document.getElementById("btnDiscItem1").style.display = "none";
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "none";

                document.getElementById("btnDiscItem4").style.display = "block";
                document.getElementById("btnDiscItem5").style.display = "none";
                document.getElementById("btnDiscItem6").style.display = "none";
            } else if (ID === "DiscItem5") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById("DiscItem4").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem6").style.border = "none";

                // ----Show Button
                document.getElementById("btnDiscItem1").style.display = "none";
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "none";

                document.getElementById("btnDiscItem4").style.display = "none";
                document.getElementById("btnDiscItem5").style.display = "block";
                document.getElementById("btnDiscItem6").style.display = "none";
            } else if (ID === "DiscItem6") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";

                document.getElementById("DiscItem4").style.border = "none";
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                // ----Show Button
                document.getElementById("btnDiscItem1").style.display = "none";
                document.getElementById("btnDiscItem2").style.display = "none";
                document.getElementById("btnDiscItem3").style.display = "none";

                document.getElementById("btnDiscItem4").style.display = "none";
                document.getElementById("btnDiscItem5").style.display = "none";
                document.getElementById("btnDiscItem6").style.display = "block";
            }

            // --If-else statement to change the information displayed in the output
            if (ID === "TypeItem1") {
                // ----Indicate which item is selected
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("TypeItem2").style.border = "none";
                document.getElementById("TypeItem3").style.border = "none";

                document.getElementById("TypeItem4").style.border = "none";
                document.getElementById("TypeItem5").style.border = "none";
                document.getElementById("TypeItem6").style.border = "none";

                // ----Show Button, hide rest
                document.getElementById("btnTypeItem1").style.display = "block";
                document.getElementById("btnTypeItem2").style.display = "none";
                document.getElementById("btnTypeItem3").style.display = "none";

                document.getElementById("btnTypeItem4").style.display = "none";
                document.getElementById("btnTypeItem5").style.display = "none";
                document.getElementById("btnTypeItem6").style.display = "none";
            } else if (ID === "TypeItem2") {
                // ----Indicate which item is selected
                document.getElementById("TypeItem1").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("TypeItem3").style.border = "none";

                document.getElementById("TypeItem4").style.border = "none";
                document.getElementById("TypeItem5").style.border = "none";
                document.getElementById("TypeItem6").style.border = "none";

                // ----Show Button
                document.getElementById("btnTypeItem1").style.display = "none";
                document.getElementById("btnTypeItem2").style.display = "block";
                document.getElementById("btnTypeItem3").style.display = "none";

                document.getElementById("btnTypeItem4").style.display = "none";
                document.getElementById("btnTypeItem5").style.display = "none";
                document.getElementById("btnTypeItem6").style.display = "none";
            } else if (ID === "TypeItem3") {
                // ----Indicate which item is selected
                document.getElementById("TypeItem1").style.border = "none";
                document.getElementById("TypeItem2").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                document.getElementById("TypeItem4").style.border = "none";
                document.getElementById("TypeItem5").style.border = "none";
                document.getElementById("TypeItem6").style.border = "none";

                // ----Show Button
                document.getElementById("btnTypeItem2").style.display = "none";
                document.getElementById("btnTypeItem3").style.display = "block";

                document.getElementById("btnTypeItem4").style.display = "none";
                document.getElementById("btnTypeItem5").style.display = "none";
                document.getElementById("btnTypeItem6").style.display = "none";
            } else if (ID === "TypeItem4") {
                // ----Indicate which item is selected
                document.getElementById("TypeItem1").style.border = "none";
                document.getElementById("TypeItem2").style.border = "none";
                document.getElementById("TypeItem3").style.border = "none";

                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("TypeItem5").style.border = "none";
                document.getElementById("TypeItem6").style.border = "none";

                // ----Show Button, hide rest
                document.getElementById("btnTypeItem1").style.display = "none";
                document.getElementById("btnTypeItem2").style.display = "none";
                document.getElementById("btnTypeItem3").style.display = "none";

                document.getElementById("btnTypeItem4").style.display = "block";
                document.getElementById("btnTypeItem5").style.display = "none";
                document.getElementById("btnTypeItem6").style.display = "none";
            } else if (ID === "TypeItem5") {
                // ----Indicate which item is selected
                document.getElementById("TypeItem1").style.border = "none";
                document.getElementById("TypeItem2").style.border = "none";
                document.getElementById("TypeItem3").style.border = "none";

                document.getElementById("TypeItem4").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("TypeItem6").style.border = "none";

                // ----Show Button
                document.getElementById("btnTypeItem1").style.display = "none";
                document.getElementById("btnTypeItem2").style.display = "none";
                document.getElementById("btnTypeItem3").style.display = "none";

                document.getElementById("btnTypeItem4").style.display = "none";
                document.getElementById("btnTypeItem5").style.display = "block";
                document.getElementById("btnTypeItem6").style.display = "none";
            } else if (ID === "TypeItem6") {
                // ----Indicate which item is selected
                document.getElementById("TypeItem1").style.border = "none";
                document.getElementById("TypeItem2").style.border = "none";
                document.getElementById("TypeItem3").style.border = "none";

                document.getElementById("TypeItem4").style.border = "none";
                document.getElementById("TypeItem5").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                // ----Show Button
                document.getElementById("btnTypeItem1").style.display = "none";
                document.getElementById("btnTypeItem2").style.display = "none";
                document.getElementById("btnTypeItem3").style.display = "none";

                document.getElementById("btnTypeItem4").style.display = "none";
                document.getElementById("btnTypeItem5").style.display = "none";
                document.getElementById("btnTypeItem6").style.display = "block";
            }

        }
    }

    return (
        <div style={{ height: 'auto' }}>
            {/* Discounts Header */}
            <Row className="beige_bg">
                <img src={Banner2} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* Discounts Line 1 */}
            <Row>
                <Col className="text-end">
                    <img src={BannerCream1} alt="Item1" className="IceCreamImg" onClick={ChangeSelected("DiscItem1")} id="DiscItem1"></img>
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
                    <img src={BannerCream2} alt="Item2" className="IceCreamImg" onClick={ChangeSelected("DiscItem2")} id="DiscItem2"></img>
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
                    <img src={BannerCream3} alt="Item3" className="IceCreamImg" onClick={ChangeSelected("DiscItem3")} id="DiscItem3"></img>
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

            <br></br>

            {/* Discounts Line 2 */}
            <Row>
                <Col className="text-end">
                    <img src={BannerCream4} alt="Item4" className="IceCreamImg" onClick={ChangeSelected("DiscItem4")} id="DiscItem4"></img>
                    <button type="button" id="btnDiscItem4" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA BISCUIT EXPRESS</h5>
                        <h6>with CHOCOLATE SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={BannerCream5} alt="Item5" className="IceCreamImg" onClick={ChangeSelected("DiscItem5")} id="DiscItem5"></img>
                    <button type="button" id="btnDiscItem5" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>COCONUT STRACCIATELLA</h5>
                        <h6>with BITTERSWEET CHOCOLATE STRANDS</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={BannerCream6} alt="Item6" className="IceCreamImg" onClick={ChangeSelected("DiscItem6")} id="DiscItem6"></img>
                    <button type="button" id="btnDiscItem6" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
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

            {/* Type Header */}
            <Row className="beige_bg">
                <img src={Banner3} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* Type Line 1 */}
            <Row>
                <Col className="text-end">
                    <img src={TypeCream1} alt="Item1" className="IceCreamImg" onClick={ChangeSelected("TypeItem1")} id="TypeItem1"></img>
                    <button type="button" id="btnTypeItem1" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA BISCUIT EXPRESS</h5>
                        <h6>with CHOCOLATE SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={TypeCream2} alt="Item2" className="IceCreamImg" onClick={ChangeSelected("TypeItem2")} id="TypeItem2"></img>
                    <button type="button" id="btnTypeItem2" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>COCONUT STRACCIATELLA</h5>
                        <h6>with BITTERSWEET CHOCOLATE STRANDS</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={TypeCream3} alt="Item3" className="IceCreamImg" onClick={ChangeSelected("TypeItem3")} id="TypeItem3"></img>
                    <button type="button" id="btnTypeItem3" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
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

            <br></br>

            {/* Type Line 2 */}
            <Row>
                <Col className="text-end">
                    <img src={TypeCream4} alt="Item4" className="IceCreamImg" onClick={ChangeSelected("TypeItem4")} id="TypeItem4"></img>
                    <button type="button" id="btnTypeItem4" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>VANILLA BISCUIT EXPRESS</h5>
                        <h6>with CHOCOLATE SAUCE</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={TypeCream5} alt="Item5" className="IceCreamImg" onClick={ChangeSelected("TypeItem5")} id="TypeItem5"></img>
                    <button type="button" id="btnTypeItem5" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
                </Col>

                <Col className="text-start">
                    <div className="ItemDescSmall Abel">
                        <h5>COCONUT STRACCIATELLA</h5>
                        <h6>with BITTERSWEET CHOCOLATE STRANDS</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>

                <Col className="text-end">
                    <img src={TypeCream6} alt="Item6" className="IceCreamImg" onClick={ChangeSelected("TypeItem6")} id="TypeItem6"></img>
                    <button type="button" id="btnTypeItem6" className="btnItem Abel" style={{ display: 'none' }}>Add to Cart</button>
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

        </div>
    )
}

export default Products;