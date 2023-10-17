// Import React functionality
import React from "react";

// Import UseState and Effect
import { useState, useEffect } from 'react';

// Import Axios
import Axios from 'axios';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

// Import Components
import StockCard from "../components/StockCard";
import OrderCard from "../components/ordercard";

function Administrator() {

    // Image
    const [image, setImage] = useState();

    // Read
    // --Store all products
    const [allProducts, setAllProducts] = useState();
    const [allOrders, setAllOrders] = useState();
    // --Re-Render
    const [reRenderProducts, setReRenderProducts] = useState(false);

    // Base Item
    const [productName, setProductName] = useState();
    const [productTagLine, setProductTagLine] = useState();
    const [productDesc, setProductDesc] = useState();
    const [productPrice, setProductPrice] = useState();
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

    // Use effect for read all
    useEffect(() => {

        Axios.get('http://localhost:5000/api/products_get_all/')
            .then(res => {
                let productData = res.data;

                let renderProducts = productData.map((item) =>
                    <StockCard key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} stock={item.stock} tagline={item.tagline}
                        choco={item.variations.sauce.chocolate} vanil={item.variations.sauce.vanilla} cara={item.variations.sauce.caramel}
                        yogsmall={item.variations.cone.yoghurt.small} yogmed={item.variations.cone.yoghurt.medium} yoglarge={item.variations.cone.yoghurt.large}
                        wafsmall={item.variations.cone.waffle.small} wafmed={item.variations.cone.waffle.medium} waflarge={item.variations.cone.waffle.large}
                        bucksmall={item.variations.cone.bucket.small} buckmed={item.variations.cone.bucket.medium} bucklarge={item.variations.cone.bucket.large}
                        image={item.image}
                    />)

                setAllProducts(renderProducts);
                setReRenderProducts(false);
            })
            .catch(err => console.log(err))

        // Orders display
        Axios.get('http://localhost:5000/api/placedorder_get_all/')
            .then(res => {
                let productData = res.data;

                let renderProducts = productData.map((item) =>
                    <OrderCard key={item._id} id={item._id} clientName={item.clientName} clientAddress={item.clientAddress} orderName={item.orderName} />)

                setAllOrders(renderProducts);
                setReRenderProducts(false);
            })
            .catch(err => console.log(err))

    }, [reRenderProducts])

    const getImage = (e) => {
        let imageFile = e.target.files[0];
        console.log(imageFile);
        setImage(imageFile);

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
    };

    // Functions
    const AddProduct = (e) => {
        // Normalize the variation items
        const normalizeVariation = (value) => (value === undefined ? 0 : parseInt(value));

        // The total stock will be equivalent to the total amount of cones of all cone types.
        let STOCK = (+variationConeYoghurtLarge + +variationConeYoghurtMedium + +variationConeYoghurtSmall) + (+variationConeWaffleLarge + +variationConeWaffleMedium + +variationConeWaffleSmall) + (+variationConeBucketLarge + +variationConeBucketMedium + +variationConeBucketSmall);

        // set the data for the first
        const data = {
            name: productName,
            tagline: productTagLine,
            description: productDesc,
            price: parseFloat(productPrice),
            stock: STOCK,
            variations: {
                sauce: {
                    chocolate: normalizeVariation(variationSauceChocolate),
                    vanilla: normalizeVariation(variationSauceVanilla),
                    caramel: normalizeVariation(variationSauceCaramel)
                },
                cone: {
                    yoghurt: {
                        small: normalizeVariation(variationConeYoghurtSmall),
                        medium: normalizeVariation(variationConeYoghurtMedium),
                        large: normalizeVariation(variationConeYoghurtLarge)
                    },
                    waffle: {
                        small: normalizeVariation(variationConeWaffleSmall),
                        medium: normalizeVariation(variationConeWaffleMedium),
                        large: normalizeVariation(variationConeWaffleLarge)
                    },
                    bucket: {
                        small: normalizeVariation(variationConeBucketSmall),
                        medium: normalizeVariation(variationConeBucketMedium),
                        large: normalizeVariation(variationConeBucketLarge)
                    }
                }
            }
        };

        const payload = new FormData();
        payload.append('data', JSON.stringify(data));
        payload.append('image', image);

        // If the user left out an item
        if (!productName || !productTagLine || !productDesc || !productPrice) {
            let hMessage = document.getElementById("hMessage");
            hMessage.style.display = 'block';
            hMessage.innerHTML = "Please Fill All Fields For The Base Product";
        } else {
            Axios.post('http://localhost:5000/api/product_add', payload, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the correct content type for FormData
                },
            })
                .then((response) => {
                    // Handle the response from the server
                    console.log(response.data);
                })
                .catch((error) => {
                    // Handle any errors
                    console.error(error);
                });

            let hMessage = document.getElementById("hMessage");
            hMessage.style.display = 'block';
            hMessage.innerHTML = "Product Successfully Added";
            setReRenderProducts(true);

            document.getElementById("AddItemForm").style.display = 'none';
            document.getElementById("btnAddItem").style.display = 'block';

            console.log(payload);

            window.location.reload(true);
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
                <br></br>
                {allOrders}
                <br></br>
            </div>

            {/* Inventory Management */}
            <div id="InventoryManagementDiv" style={{ display: 'none' }} className="Abel">

                <br></br>

                {allProducts}

                <br></br>

                {/* New item button */}
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
                        <div style={{ display: 'none' }} id="AddItemForm" className="AdminForm">
                            {/* Base Item */}
                            <h3>Add Product</h3>
                            <label htmlFor="fName">Name:</label> <br></br>
                            <input type="text" id="fName" name="fName" onChange={(e) => setProductName(e.target.value)} placeholder="Enter the product's name" className="AdminInput"></input> <br></br>

                            <label htmlFor="fTagline">Tagline:</label> <br></br>
                            <input type="text" id="fTagline" name="fTagline" onChange={(e) => setProductTagLine(e.target.value)} placeholder="Enter the product's tagline" className="AdminInput"></input> <br></br>

                            <label htmlFor="fDesc">Description:</label> <br></br>
                            <input type="text" id="fDesc" name="fDesc" onChange={(e) => setProductDesc(e.target.value)} placeholder="Enter the product's description" className="AdminInput"></input> <br></br>

                            <label htmlFor="fPrice">Price:</label> <br></br>
                            <input type="number" id="fPrice" name="fPrice" onChange={(e) => setProductPrice(e.target.value)} placeholder="0" min={0} className="AdminInput"></input> <br></br>

                            <br></br>
                            {/* Variations */}
                            <h4>Variations</h4>
                            {/* --Sauces */}
                            <h5>Sauce</h5>
                            <ul>
                                <li>
                                    <label htmlFor="fSauceChoco">Chocolate</label> <br></br>
                                    <input type="number" id="fSauceChoco" name="fSauceChoco" onChange={(e) => setVariationSauceChocolate(e.target.value)} className="stockInput StockLeft" placeholder="0" min={0}></input> <br></br>
                                </li>
                                <li>
                                    <label htmlFor="fSauceVani">Vanilla</label> <br></br>
                                    <input type="number" id="fSauceVani" name="fSauceVani" onChange={(e) => setVariationSauceVanilla(e.target.value)} className="stockInput StockMid" placeholder="0" min={0}></input> <br></br>

                                </li>
                                <li>
                                    <label htmlFor="fSauceCara">Caramel</label> <br></br>
                                    <input type="number" id="fSauceCara" name="fSauceCara" onChange={(e) => setVariationSauceCaramel(e.target.value)} className="stockInput StockRight" placeholder="0" min={0}></input> <br></br>
                                </li>
                            </ul>

                            {/* --Cones */}
                            <br></br><h5><u>Cones</u></h5>
                            <ul>
                                {/* ----Yoghurt */}
                                <li>
                                    <h5>Yoghurt</h5>
                                    <ul>
                                        <li>
                                            <label htmlFor="fYogSmall">Small</label> <br></br>
                                            <input type="number" id="fYogSmall" name="fYogSmall" onChange={(e) => setVariationConeYoghurtSmall(e.target.value)} className="stockInput StockLeft" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fYogMed">Medium</label> <br></br>
                                            <input type="number" id="fYogMed" name="fYogMed" onChange={(e) => setVariationConeYoghurtMedium(e.target.value)} className="stockInput StockMid" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fYogLarge">Large</label> <br></br>
                                            <input type="number" id="fYogLarge" name="fYogLarge" onChange={(e) => setVariationConeYoghurtLarge(e.target.value)} className="stockInput StockRight" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                    </ul>
                                </li>
                                {/* ----Waffle */}
                                <li>
                                    <h5>Waffle</h5>
                                    <ul>
                                        <li>
                                            <label htmlFor="fWafSmall">Small</label> <br></br>
                                            <input type="number" id="fWafSmall" name="fWafSmall" onChange={(e) => setVariationConeWaffleSmall(e.target.value)} className="stockInput StockLeft" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fWafMed">Medium</label> <br></br>
                                            <input type="number" id="fWafMed" name="fWafMed" onChange={(e) => setVariationConeWaffleMedium(e.target.value)} className="stockInput StockMid" placeholder="0" min={0}></input> <br></br>

                                        </li>
                                        <li>
                                            <label htmlFor="fWafLarge">Large</label> <br></br>
                                            <input type="number" id="fWafLarge" name="fWafLarge" onChange={(e) => setVariationConeWaffleLarge(e.target.value)} className="stockInput StockRight" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                    </ul>
                                </li>
                                {/* ----Bucket */}
                                <li>
                                    <h5>Bucket</h5>
                                    <ul>
                                        <li>
                                            <label htmlFor="fBuckSmall">Small</label> <br></br>
                                            <input type="number" id="fBuckSmall" name="fBuckSmall" onChange={(e) => setVariationConeBucketSmall(e.target.value)} className="stockInput StockLeft" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                        <li>
                                            <label htmlFor="fBuckMed">Medium</label> <br></br>
                                            <input type="number" id="fBuckMed" name="fBuckMed" onChange={(e) => setVariationConeBucketMedium(e.target.value)} className="stockInput StockMid" placeholder="0" min={0}></input> <br></br>

                                        </li>
                                        <li>
                                            <label htmlFor="fBuckLarge">Large</label> <br></br>
                                            <input type="number" id="fBuckLarge" name="fBuckLarge" onChange={(e) => setVariationConeBucketLarge(e.target.value)} className="stockInput StockRight" placeholder="0" min={0}></input> <br></br>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <br></br>
                            {/* image upload */}
                            <label>Upload Image</label>
                            <input type="file" onChange={getImage}></input>
                            <br></br>

                            {/* Confirm/cancel button */}
                            <button type="submit" className="btnConfirmCancel" onClick={AddProduct}>Confirm</button>
                            <br></br>
                            <button type="button" className="btnConfirmCancel" onClick={() => {
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