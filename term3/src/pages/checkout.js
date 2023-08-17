// Import React functionality
import React from "react";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

function Checkout() {

    return (
        <div className="beige_bg" style={{ height: 'auto' }}>
            <Row>
                <h2 className="Lobster">Checkout</h2>
                <br></br>
            </Row>

            {/* Hidden confirmation form */}
            <div className="Abel" id="ConfirmOrder" style={{ display: 'none', position: 'absolute', marginLeft: '36%', zIndex: '1' }}>
                <div><h2>Billing Information</h2></div>

                <br></br>

                <div className="ConfirmDiv">
                    <label className="inline">Card Number</label>
                    <br></br>
                    <input type="input" className="BillingInput"></input>
                </div>

                <div className="ConfirmDiv">
                    <label className="inline">CVV Number</label>
                    <br></br>
                    <input type="input" className="BillingInput"></input>
                </div>

                <div className="ConfirmDiv">
                    <label className="inline">Recipient Name</label>
                    <br></br>
                    <input type="input" className="BillingInput"></input>
                </div>

                <div className="ConfirmDiv">
                    <label className="inline">Recipient Address</label>
                    <br></br>
                    <input type="input" className="BillingInput"></input>
                </div>

                <br></br>

                <div>
                    <button type="submit" id="btnConfirm" className="ConfirmDiv ">Place Order</button>
                    <br></br>
                    <button type="submit" id="btnCancel" onClick={() => { document.getElementById("ConfirmOrder").style.display = 'none' }}>Cancel</button>
                </div>
            </div>

            {/* Items */}
            <Row>
                <Col className="col-1"></Col>
                <Col className="col-3 text-end">
                    <img src={IceCream1} className="OrderItem"></img>
                </Col>

                <Col className="col-5 text-start Abel ItemFont">
                    <div>
                        <p className="inline" id="OrderName">Ice Cream Bowl</p>
                    </div>

                    <div>
                        <label className="inline">Quantity: </label>
                        <p className="inline" id="OrderAmnt">1</p>
                    </div>

                    <div>
                        <label className="inline">Flavour: </label>
                        <p className="inline" id="OrderFlvr">Caramel Fudge</p>
                    </div>

                    <div>
                        <label className="inline">Price: </label>
                        <p className="inline" id="OrderPrice">R80</p>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <label className="inline">Sub Total: </label>
                        <p className="inline" id="OrderPrice">R80</p>
                    </div>
                </Col>

                <Col className="col-3"></Col>
            </Row>

            <br></br>

            <Row>
                <Col className="col-1"></Col>
                <Col className="col-3 text-end">
                    <img src={IceCream1} className="OrderItem"></img>
                </Col>

                <Col className="col-5 text-start Abel ItemFont">
                    <div>
                        <p className="inline" id="OrderName">Ice Cream Bowl</p>
                    </div>

                    <div>
                        <label className="inline">Quantity: </label>
                        <p className="inline" id="OrderAmnt">2</p>
                    </div>

                    <div>
                        <label className="inline">Flavour: </label>
                        <p className="inline" id="OrderFlvr">Rum and Raisin</p>
                    </div>

                    <div>
                        <label className="inline">Price: </label>
                        <p className="inline" id="OrderPrice">R80</p>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <label className="inline">Sub Total: </label>
                        <p className="inline" id="OrderPrice">R160</p>
                    </div>
                </Col>

                <Col className="col-3"></Col>
            </Row>

            <br></br>

            {/* Total and button */}
            <Row className="beige_bg">
                <Col></Col>
                <Col>
                    <label className="inline CheckoutTotal">Total: </label>
                    <p className="inline CheckoutTotal" id="OrderPrice">R240</p>
                </Col>
                <Col></Col>
            </Row>

            <br></br>

            <Row className="beige_bg">
                <Col></Col>
                <Col>
                    <button type="submit" id="CheckoutConfirm" onClick={() => { document.getElementById("ConfirmOrder").style.display = 'block' }}>Confirm Order</button>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Checkout;