import React from "react";
import '../App.css';

// Import CSS
import '../css/main.css';

// Axios import
import Axios from 'axios';

// Import Bootstrap functionality
import { Row, Col, Card, Button } from "react-bootstrap";

// Import UseState and Effect
import { useState, useEffect } from 'react';

const Cart = (props) => {

    // Remove Item
    const RemoveItem = (e) => {
        let URL = 'http://localhost:5000/api/order_delete/' + e;

        Axios.delete(URL)
            .then(res => {
                alert('Item Deleted');

                window.location.reload(false);
            })
            .catch(err => console.log(err))

        console.log(URL);
    }

    // Build the output
    if (props.client === sessionStorage.getItem("Email")) {
        var sString = props.orders;
        var arrOrder = [];

        for (let k = 0; k < sString.length; k++) {

            let subBefore = sString.split(',')[0];

            arrOrder.push(subBefore);

            sString = sString.replace(subBefore + ', ', '');

        }

        if (arrOrder[5] === 'NoRes') {
            var RESTRICTIONS = 'No Restrictions';
        }

        localStorage.setItem('OrderName', arrOrder[0]);

        return (

            <div>
                <Card style={{ width: '20rem', height: 'auto', display: 'inline-block', marginBottom: '30px', marginRight: '25px' }}>
                    <Card.Body style={{ width: '20rem' }}>
                        <Card.Text>
                            <div>
                                <h3>{arrOrder[0]}</h3>
                                <h5> Price: R{arrOrder[1]}</h5> <br></br>
                                <p>Sauce: {arrOrder[2]} <br></br> Cup: {arrOrder[3]} {arrOrder[4]} <br></br> Restrictions: {RESTRICTIONS} </p>

                                <Button variant="danger" style={{ color: 'white', fontSize: '16px' }} onClick={() => RemoveItem(props.id)}>Remove</Button>
                            </div>

                        </Card.Text>

                    </Card.Body>
                </Card>

                <Row className="beige_bg">
                    <Col></Col>
                    <Col>
                        <label className="inline CheckoutTotal">Total: R</label>
                        <p className="inline CheckoutTotal" id="OrderPrice">{arrOrder[1]}</p>
                    </Col>
                    <Col></Col>
                </Row>
            </div>

        )

    } else {
        return (
            <div style={{ display: 'none' }}></div>
        )
    }

}

export default Cart;