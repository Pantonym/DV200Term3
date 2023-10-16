// Import React functionality
import React from "react";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

// Import UseState and Effect
import { useState, useEffect } from 'react';

// Import Axios
import Axios from "axios";

import Cart from "../components/cart";

function Checkout() {

    // --Store all products
    const [orders, setOrders] = useState();
    // --Re-Render
    const [reRenderProducts, setReRenderProducts] = useState(false);

    // Use effect for read all
    useEffect(() => {

        Axios.get('http://localhost:5000/api/order_get_all/')
            .then(res => {
                let orderData = res.data;

                let renderProducts = orderData.map((item) =>
                    <Cart key={item._id} id={item._id} client={item.client} orders={item.orders} totalprice={item.totalprice} />)

                setOrders(renderProducts);
                setReRenderProducts(false);
            })
            .catch(err => console.log(err))

    }, [reRenderProducts])

    const OrderSubmit = (e) => {
        let NAME = document.getElementById('inpName').value;
        let ADDRESS = document.getElementById('inpAddress').value;
        let ORDER = '1x ' + localStorage.getItem('OrderName');

        let payload = {
            clientName: NAME,
            clientAddress: ADDRESS,
            orderName: ORDER
        }

        Axios.post('http://localhost:5000/api/placedorder_add/', payload);

        document.getElementById("ConfirmOrder").style.display = 'none';
        alert('Order Confirmed');
    }

    return (
        <div className="beige_bg" style={{ height: 'auto' }}>
            <Row>
                <h2 className="Lobster">Checkout</h2>
                <br></br>
            </Row>

            {/* Hidden confirmation form */}
            <div className="Abel" id="ConfirmOrder" style={{ display: 'none', position: 'absolute', marginLeft: '38%', marginTop: '-5%', zIndex: '1' }}>
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
                    <input type="input" className="BillingInput" id="inpName" required="true"></input>
                </div>

                <div className="ConfirmDiv">
                    <label className="inline">Recipient Address</label>
                    <br></br>
                    <input type="input" className="BillingInput" id="inpAddress" required="true"></input>
                </div>

                <br></br>

                <div>
                    <button type="submit" id="btnConfirm" className="ConfirmDiv" onClick={OrderSubmit}>Place Order</button>
                    <br></br>
                    <button type="submit" id="btnCancel" onClick={() => { document.getElementById("ConfirmOrder").style.display = 'none' }}>Cancel</button>
                </div>
            </div>

            {/* Items */}
            {orders}

            <br></br>

            {/* Confirm Order Button */}
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