// Import React functionality
import React from "react";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Axios import
import Axios from 'axios';

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

// Import Bootstrap functionality
import { Card, Container, Row, Col } from "react-bootstrap";

function SingleItem() {
    const [productData, setProductData] = useState();

    function AddToCart(id) {

        let TotalPrice = document.getElementById("sedQty").value * productData.price;

        let payload = {
            client: localStorage.getItem("Email"),
            orders: productData.name,
            totalprice: TotalPrice
        }

        console.log(payload);

        Axios.post('http://localhost:5000/api/order_add/', payload)

    }

    Axios.get('http://localhost:5000/api/product_get_single/' + localStorage.getItem("SingleItem"))
        .then(res => {
            setProductData(res.data);
            console.log(productData);
        })
        .catch(err => console.log(err))

    return (
        <div className="beige_bg" style={{ height: 'auto' }}>

            <Row>
                <Col></Col>
                <Col><h3 id="ProductName" className="Lobster">{productData.name}</h3></Col>
                <Col></Col>
            </Row>

            <br></br>

            <Row>
                <Col className="col-1"></Col>

                <Col className="col-5">
                    <img src={'http://localhost:5000/images/' + productData.image} className="SingleImg"></img>
                </Col>

                <Col className="col-5 Abel text-start" style={{ fontSize: "Largest" }}>
                    <div><p id="SinglePrice">R{productData.price}</p></div>

                    <div><p id="SingleDesc">{productData.description}</p></div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Flavour</label>
                        <select id="SelectFlavours" className="inline">
                            <option value={'None'}>None</option>
                            <option value={'Chocolate'}>Chocolate</option>
                            <option value={'Vanilla'}>Vanilla</option>
                            <option value={'Caramel'}>Caramel</option>
                        </select>
                    </div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Bowl Size</label>
                        <select id="SelectSize" className="inline">
                            <option value={'Small'}>Small</option>
                            <option value={'Medium'}>Medium</option>
                            <option value={'Large'}>Large</option>
                        </select>
                    </div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Restrictions</label>
                        <br></br>

                        <label className="CheckLabel">No Restrictions</label>
                        <input id="NoRes" type="checkbox"></input>
                        <label className="CheckLabel">Gluten Free</label>
                        <input id="GlutFree" type="checkbox"></input>

                        <br></br>

                        <label className="CheckLabel">Lactose Intolerant</label>
                        <input id="LacInt" type="checkbox"></input>
                        <label className="CheckLabel">Vegan</label>
                        <input id="Vegan" type="checkbox"></input>
                    </div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Quantity</label>
                        <input id="sedQty" type="number"></input>
                    </div>

                    <br></br>

                    <div>
                        <button onClick={AddToCart(productData.id)}>Add To Cart</button>
                    </div>
                </Col>

                <Col className="col-1"></Col>
            </Row>

        </div>
    )
}

export default SingleItem;