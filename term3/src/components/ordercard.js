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

const OrderCard = (props) => {

    const DeleteFunc = (e) => {
        let URL = 'http://localhost:5000/api/placedorder_delete/' + e;

        Axios.delete(URL)
            .then(res => {
                alert('Item Deleted');

                window.location.reload(false);
            })
            .catch(err => console.log(err))

        console.log(URL);

    }

    return (
        <Row>
            <Col></Col>
            <Col>
                <div style={{ width: '20rem', height: 'auto', display: 'inline-block', marginBottom: '30px'}}>
                    <div id={"Update_Done" + props.id} style={{ display: "block" }}>
                        <h3>User: {props.clientName}</h3>
                        <h5>Address: {props.clientAddress}</h5> <br></br>
                        <h5>Order: <br></br>{props.orderName}</h5> <br></br>
                    </div>

                    {/* Delete and Update */}
                    <Button variant="danger" style={{ marginRight: '20px', visibility: 'visible' }} id={"btnDelete_" + props.id} onClick={() => DeleteFunc(props.id)}>DELETE</Button>
                </div >
            </Col>
            <Col></Col>
        </Row>
    )
}

export default OrderCard;