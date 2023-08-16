// Import React functionality
import React from "react";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

// Import UseState and Effect
import { useState, useEffect } from 'react';

// Import Axios
import Axios from 'axios';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

function Administrator() {

    // Base Item
    const [productName, setProductName] = useState();
    const [productTagLine, setProductTagLine] = useState();
    const [productDesc, setProductDesc] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productStock, setProductStock] = useState();
    // Item Variations
    // --Sauce
    const [variationSauceChocolate, setVariationSauceChocolate] = useState();
    const [variationSauceVanilla, setVariationSauceVanilla] = useState();
    const [variationSauceCaramel, setVariationSauceCaramel] = useState();
    // --Cones
    // ----Yoghurt
    const [variationConeYoghurtSmall, setVariationConeYoghurtSmall] = useState();
    const [variationConeYoghurtMedium, setVariationConeYoghurtMedium] = useState();
    const [variationConeYoghurtLarge, setVariationConeYoghurtLarge] = useState();
    // ----Waffle
    const [variationConeWaffleSmall, setVariationConeWaffleSmall] = useState();
    const [variationConeWaffleMedium, setVariationConeWaffleMedium] = useState();
    const [variationConeWaffleLarge, setVariationConeWaffleLarge] = useState();
    // ----Bucket
    const [variationConeBucketSmall, setVariationConeBucketSmall] = useState();
    const [variationConeBucketMedium, setVariationConeBucketMedium] = useState();
    const [variationConeBucketLarge, setVariationConeBucketLarge] = useState();

    // Get statements for all:
    // --Base Item
    const getName = (e) => {
        let val = e.target.value;
        setProductName(val);
    }
    const getTagLine = (e) => {
        let val = e.target.value;
        setProductTagLine(val);
    }
    const getDesc = (e) => {
        let val = e.target.value;
        setProductDesc(val);
    }
    const getPrice = (e) => {
        let val = +e.target.value;
        setProductPrice(val);
    }
    const getStock = (e) => {
        let val = +e.target.value;
        setProductStock(val);
    }
    // --Item Variations
    // ----Sauces
    const getSauceChoco = (e) => {
        let val = +e.target.value;
        setVariationSauceChocolate(val);
    }
    const getSauceVani = (e) => {
        let val = +e.target.value;
        setVariationSauceVanilla(val);
    }
    const getSauceCara = (e) => {
        let val = +e.target.value;
        setVariationSauceCaramel(val);
    }
    // ----Cones
    // ------Yoghurt
    const getConeYogSmall = (e) => {
        let val = +e.target.value;
        setVariationConeYoghurtSmall(val);
    }
    const getConeYogMed = (e) => {
        let val = +e.target.value;
        setVariationConeYoghurtMedium(val);
    }
    const getConeYogLarge = (e) => {
        let val = +e.target.value;
        setVariationConeYoghurtLarge(val);
    }
    // ------Waffle
    const getConeWafSmall = (e) => {
        let val = +e.target.value;
        setVariationConeWaffleSmall(val);
    }
    const getConeWafMed = (e) => {
        let val = +e.target.value;
        setVariationConeWaffleMedium(val);
    }
    const getConeWafLarge = (e) => {
        let val = +e.target.value;
        setVariationConeWaffleLarge(val);
    }
    // ------Bucket
    const getConeBuckSmall = (e) => {
        let val = +e.target.value;
        setVariationConeBucketSmall(val);
    }
    const getConeBuckMed = (e) => {
        let val = +e.target.value;
        setVariationConeBucketMedium(val);
    }
    const getConeBuckLarge = (e) => {
        let val = +e.target.value;
        setVariationConeBucketLarge(val);
    }

    // Functions
    const AddProduct = (e) => {
        // Standardize the number types in case the user did not include one
        // --Sauces
        if (variationSauceChocolate === undefined) {
            setVariationSauceChocolate(0);
        }
        if (variationSauceVanilla === undefined) {
            setVariationSauceVanilla(0);
        }
        if (variationSauceCaramel === undefined) {
            setVariationSauceCaramel(0);
        }
        // --Yoghurt
        if (variationConeYoghurtSmall === undefined) {
            setVariationConeYoghurtSmall(0);
        }
        if (variationConeYoghurtMedium === undefined) {
            setVariationConeYoghurtMedium(0);
        }
        if (variationConeYoghurtLarge === undefined) {
            setVariationConeYoghurtLarge(0);
        }
        // --Waffles
        if (variationConeWaffleSmall === undefined) {
            setVariationConeWaffleSmall(0);
        }
        if (variationConeWaffleMedium === undefined) {
            setVariationConeWaffleMedium(0);
        }
        if (variationConeWaffleLarge === undefined) {
            setVariationConeWaffleLarge(0);
        }
        // --Buckets
        if (variationConeBucketSmall === undefined) {
            setVariationConeBucketSmall(0);
        }
        if (variationConeBucketMedium === undefined) {
            setVariationConeBucketMedium(0);
        }
        if (variationConeBucketLarge === undefined) {
            setVariationConeBucketLarge(0);
        }

        // The total stock will be equivalent to the total amount of cones of all cone types.
        let STOCK = (variationConeYoghurtLarge + variationConeYoghurtMedium + variationConeYoghurtSmall) + (variationConeWaffleLarge + variationConeWaffleMedium + variationConeWaffleSmall) + (variationConeBucketLarge + variationConeBucketMedium + variationConeBucketSmall);

        let payload = {
            name: productName,
            tagline: productTagLine,
            description: productDesc,
            price: productPrice,
            stock: STOCK,
            variations: {
                sauce: {
                    chocolate: variationSauceChocolate,
                    vanilla: variationSauceVanilla,
                    caramel: variationSauceCaramel
                },
                cone: {
                    yoghurt: {
                        small: variationConeYoghurtSmall,
                        medium: variationConeYoghurtMedium,
                        large: variationConeYoghurtLarge
                    },
                    waffle: {
                        small: variationConeWaffleSmall,
                        medium: variationConeWaffleMedium,
                        large: variationConeWaffleLarge
                    },
                    bucket: {
                        small: variationConeBucketSmall,
                        medium: variationConeBucketMedium,
                        large: variationConeBucketLarge
                    }
                }
            }
        }

        // If the user left out an item
        if (productName === undefined || productTagLine === undefined || productDesc === undefined || productPrice === undefined) {
            let hMessage = document.getElementById("hMessage");
            hMessage.style.display = 'block';
            hMessage.innerHTML = "Please Fill All Fields For The Base Product";
        } else {
            Axios.post('http://localhost:5000/api/product_add', payload);
            console.log(payload);

            let hMessage = document.getElementById("hMessage");
            hMessage.style.display = 'block';
            hMessage.innerHTML = "Product Successfully Added"

            document.getElementById("AddItemForm").style.display = 'none';
            document.getElementById("btnAddItem").style.display = 'block';
        }
    }

    return (
        <div style={{ height: 'auto' }}>

            <Row className="beige_bg">
                <Col></Col>
                <Col className="Lobster">
                    <button id="btnAdmin_left" style={{ backgroundColor: '#3d1617', color: '#f8f7f2' }} onClick={() => {
                        document.getElementById("OrderManagementDiv").style.display = 'block';
                        document.getElementById("InventoryManagementDiv").style.display = 'none';
                        // --Button style change
                        document.getElementById("btnAdmin_left").style.backgroundColor = '#3d1617';
                        document.getElementById("btnAdmin_left").style.color = '#f8f7f2';

                        document.getElementById("btnAdmin_right").style.backgroundColor = '#f8f7f2';
                        document.getElementById("btnAdmin_right").style.color = '#3d1617';
                    }} >
                        Order <br></br> Processing
                    </button>

                    <button id="btnAdmin_right" style={{ backgroundColor: '#f8f7f2', color: '#3d1617' }} onClick={() => {
                        document.getElementById("OrderManagementDiv").style.display = 'none';
                        document.getElementById("InventoryManagementDiv").style.display = 'block';
                        // --Button style change
                        document.getElementById("btnAdmin_left").style.backgroundColor = '#f8f7f2';
                        document.getElementById("btnAdmin_left").style.color = '#3d1617';

                        document.getElementById("btnAdmin_right").style.backgroundColor = '#3d1617';
                        document.getElementById("btnAdmin_right").style.color = '#f8f7f2';
                    }}>
                        Inventory <br></br> Management
                    </button>

                    <br></br>
                    <br></br>
                </Col>
                <Col></Col>
            </Row>

            {/* Order Management */}
            <div id="OrderManagementDiv" style={{ display: 'block' }} className="Abel">
                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <br></br>
                        <img src={IceCream1} className="OrderItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <div>
                            <br></br>
                            <label className="inline">User:</label>
                            <p className="inline" id="UserName">John Doe</p>
                        </div>

                        <div>
                            <label className="inline">Address:</label>
                            <p className="inline" id="UserAddress">21 Green Street, Pretoria</p>
                        </div>

                        <div>
                            <label>Order:</label>
                        </div>
                        <div>
                            <p id="OrderItem">1x Chocolate Raising Combo</p>
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

                    <Col className="col-5 text-start">
                        <div>
                            <label className="inline">User:</label>
                            <p className="inline" id="UserName">John Doe</p>
                        </div>

                        <div>
                            <label className="inline">Address:</label>
                            <p className="inline" id="UserAddress">21 Green Street, Pretoria</p>
                        </div>

                        <div>
                            <label>Order:</label>
                        </div>
                        <div>
                            <p id="OrderItem">1x Chocolate Raising Combo</p>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>
                <br></br>
            </div>

            {/* Inventory Management */}
            <div id="InventoryManagementDiv" style={{ display: 'none' }} className="Abel">
                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <br></br>
                        <img src={IceCream1} className="InvItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <br></br>
                        <div>
                            <label className="inline">Name: </label>
                            <p className="inline" id="InvName">Vanilla Ice Cream</p>
                        </div>

                        <div>
                            <label className="inline">Description: </label>
                            <p className="inline" id="InvDesc">Lorum Ipsum Solor Dit Amet</p>
                        </div>

                        <div>
                            <label className="inline">Price: </label>
                            <p className="inline" id="InvPrice">R80</p>
                        </div>

                        <div>
                            <label className="inline">Stock: </label>
                            <p className="inline" id="InvPrice"></p>
                            <label className="inline"> Units</label>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>

                <br></br>

                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <img src={IceCream1} className="InvItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <div>
                            <label className="inline">Name: </label>
                            <p className="inline" id="InvName">Vanilla Ice Cream</p>
                        </div>

                        <div>
                            <label className="inline">Description: </label>
                            <p className="inline" id="InvDesc">Lorum Ipsum Solor Dit Amet</p>
                        </div>

                        <div>
                            <label className="inline">Price: </label>
                            <p className="inline" id="InvPrice">R80</p>
                        </div>

                        <div>
                            <label className="inline">Stock: </label>
                            <p className="inline" id="InvPrice"></p>
                            <label className="inline"> Units</label>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>

                <br></br>
                <br></br>

                <Row>
                    <Col align="center">
                        <button style={{ display: 'block' }} type="button" id="btnAddItem" onClick={() => {
                            document.getElementById("AddItemForm").style.display = 'block';
                            document.getElementById("btnAddItem").style.display = 'none';
                        }}>New Item</button>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col>
                        <div style={{ display: 'none' }} id="AddItemForm">
                            {/* Base Item */}
                            <h3>Add Product</h3>
                            <label htmlFor="fName">Name:</label> <br></br>
                            <input type="text" id="fName" name="fName" onChange={getName} placeholder="Enter the product's name"></input> <br></br>

                            <label htmlFor="fTagline">Tagline:</label> <br></br>
                            <input type="text" id="fTagline" name="fTagline" onChange={getTagLine} placeholder="Enter the product's tagline"></input> <br></br>

                            <label htmlFor="fDesc">Description:</label> <br></br>
                            <input type="text" id="fDesc" name="fDesc" onChange={getDesc} placeholder="Enter the product's description"></input> <br></br>

                            <label htmlFor="fPrice">Price:</label> <br></br>
                            <input type="number" id="fPrice" name="fPrice" onChange={getPrice} placeholder="0" min={0}></input> <br></br>

                            <br></br>
                            {/* Variations */}
                            <h4>Variations</h4>
                            {/* --Sauces */}
                            <h5>Sauce</h5>
                            <ul>
                                <li>
                                    <label htmlFor="fSauceChoco">Chocolate</label> <br></br>
                                    <input type="number" id="fSauceChoco" name="fSauceChoco" onChange={getSauceChoco} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                </li>
                                <li>
                                    <label htmlFor="fSauceVani">Vanilla</label> <br></br>
                                    <input type="number" id="fSauceVani" name="fSauceVani" onChange={getSauceVani} className="stockInput" placeholder="0" min={0}></input> <br></br>

                                </li>
                                <li>
                                    <label htmlFor="fSauceCara">Caramel</label> <br></br>
                                    <input type="number" id="fSauceCara" name="fSauceCara" onChange={getSauceCara} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                </li>
                            </ul>

                            {/* --Cones */}
                            <br></br><h5>Cones</h5>
                            <ul>
                                {/* ----Yoghurt */}
                                <li>
                                    <h6>Yoghurt</h6>
                                    <ul>
                                        <li>
                                            <label htmlFor="fYogSmall">Small</label> <br></br>
                                            <input type="number" id="fYogSmall" name="fYogSmall" onChange={getConeYogSmall} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fYogMed">Medium</label> <br></br>
                                            <input type="number" id="fYogMed" name="fYogMed" onChange={getConeYogMed} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fYogLarge">Large</label> <br></br>
                                            <input type="number" id="fYogLarge" name="fYogLarge" onChange={getConeYogLarge} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                    </ul>
                                </li>
                                {/* ----Waffle */}
                                <li>
                                    <h6>Waffle</h6>
                                    <ul>
                                        <li>
                                            <label htmlFor="fWafSmall">Small</label> <br></br>
                                            <input type="number" id="fWafSmall" name="fWafSmall" onChange={getConeWafSmall} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fWafMed">Medium</label> <br></br>
                                            <input type="number" id="fWafMed" name="fWafMed" onChange={getConeWafMed} className="stockInput" placeholder="0" min={0}></input> <br></br>

                                        </li>
                                        <li>
                                            <label htmlFor="fWafLarge">Large</label> <br></br>
                                            <input type="number" id="fWafLarge" name="fWafLarge" onChange={getConeWafLarge} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                    </ul>
                                </li>
                                {/* ----Bucket */}
                                <li>
                                    <h6>Bucket</h6>
                                    <ul>
                                        <li>
                                            <label htmlFor="fBuckSmall">Small</label> <br></br>
                                            <input type="number" id="fBuckSmall" name="fBuckSmall" onChange={getConeBuckSmall} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fBuckMed">Medium</label> <br></br>
                                            <input type="number" id="fBuckMed" name="fBuckMed" onChange={getConeBuckMed} className="stockInput" placeholder="0" min={0}></input> <br></br>

                                        </li>
                                        <li>
                                            <label htmlFor="fBuckLarge">Large</label> <br></br>
                                            <input type="number" id="fBuckLarge" name="fBuckLarge" onChange={getConeBuckLarge} className="stockInput" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <br></br>

                            <button type="submit" onClick={AddProduct}>Confirm</button>
                            <br></br>
                            <button type="button" onClick={() => {
                                document.getElementById("AddItemForm").style.display = 'none';
                                document.getElementById("btnAddItem").style.display = 'block';
                            }}>Cancel</button>
                        </div>
                    </Col>
                </Row >

                <br></br>
                <h3 style={{ display: 'none' }} id="hMessage">Product Successfully Added</h3>
            </div>  
        </div >
    )
}

export default Administrator;