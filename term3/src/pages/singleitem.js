// Import React functionality
import React from "react";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

// Import Bootstrap functionality
import { Card, Container, Row, Col } from "react-bootstrap";

function SingleItem() {

    return (
        <div className="beige_bg" style={{ height: 'auto' }}>

            <Row>
                <Col></Col>
                <Col><h3 id="ProductName" className="Lobster">Product Name</h3></Col>
                <Col></Col>
            </Row>

            <br></br>

            <Row>
                <Col className="col-1"></Col>

                <Col className="col-5">
                    <img src={IceCream1} className="SingleImg"></img>
                </Col>

                <Col className="col-5 Abel" style={{ fontSize: "Largest" }}>
                    <div><p id="SinglePrice">R80</p></div>

                    <div><p id="SingleDesc">1 Unit of this item, Call to action Lorem Ipsum Solor Dolor Sit Amet</p></div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Flavour</label>
                        <select id="SelectFlavours" className="inline">
                            <option value={'Chocolate'}>Chocolate</option>
                        </select>
                    </div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Bowl Size</label>
                        <select id="SelectSize" className="inline">
                            <option value={'Medium'}>Medium</option>
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
                        <button type="submit">Add To Cart</button>
                    </div>
                </Col>

                <Col className="col-1"></Col>
            </Row>

        </div>
    )
}

export default SingleItem;