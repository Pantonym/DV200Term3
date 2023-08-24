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

const StockCard = (props) => {

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

    const DeleteFunc = (e) => {
        let URL = 'http://localhost:5000/api/product_delete/' + e;

        Axios.delete(URL)
            .then(res => {
                alert('Item Deleted');

                window.location.reload(false);
            })
            .catch(err => console.log(err))

        console.log(URL);

    }

    const UpdateFunc = (e) => {
        let URL = 'http://localhost:5000/api/product_update/' + e;
        console.log(props);

        

    }

    return (

        <Card style={{ width: '20rem', height: 'auto', display: 'inline-block', marginBottom: '30px' }}>
            <Card.Body style={{ width: '20rem' }}>
                <Card.Text>
                    <div id={"Update_Done" + props.id} style={{ display: "block" }}>
                        <h3>{props.name}</h3>
                        <h5>{props.description}</h5> <br></br>
                        <h5> Price: R{props.price}</h5> <br></br>
                        <h5> Stock: {props.stock} items</h5> <br></br>
                    </div>

                    <div id={"Update_" + props.id} style={{ display: "none" }}>
                        <label>Name:</label>
                        <input id="name_change" placeholder={props.name} onChange={(e) => setProductName(e.target.value)}></input>
                        <br></br>

                        <label>Tagline:</label>
                        <input id="tag_change" placeholder={props.tagline} onChange={(e) => setProductTagLine(e.target.value)}></input>
                        <br></br>

                        <label>Desc:</label>
                        <input id="desc_change" placeholder={props.description} onChange={(e) => setProductDesc(e.target.value)}></input>
                        <br></br>

                        <label>Price:</label>
                        <input id="price_change" placeholder={props.price} onChange={(e) => setProductPrice(e.target.value)}></input>
                        <br></br>

                        <label>Sauces:</label>
                        <br></br>

                        <label>Chocolate:</label>
                        <input id="sauce_choco_change" placeholder={props.choco} onChange={(e) => setVariationSauceChocolate(e.target.value)}></input>
                        <br></br>

                        <label>Vanilla:</label>
                        <input id="sauce_vanil_change" placeholder={props.vanil} onChange={(e) => setVariationSauceVanilla(e.target.value)}></input>
                        <br></br>

                        <label>Caramel:</label>
                        <input id="sauce_cara_change" placeholder={props.cara} onChange={(e) => setVariationSauceCaramel(e.target.value)}></input>
                        <br></br>

                        <label>Yoghurt Cups</label>
                        <br></br>

                        <label>Small:</label>
                        <input id="yog_small_change" placeholder={props.yogsmall} onChange={(e) => setVariationConeYoghurtSmall(e.target.value)}></input>
                        <br></br>

                        <label>Medium:</label>
                        <input id="yog_med_change" placeholder={props.yogmed} onChange={(e) => setVariationConeYoghurtMedium(e.target.value)}></input>
                        <br></br>

                        <label>Large:</label>
                        <input id="yog_large_change" placeholder={props.yoglarge} onChange={(e) => setVariationConeYoghurtLarge(e.target.value)}></input>
                        <br></br>

                        <label>Waffle Cones</label>
                        <br></br>

                        <label>Small:</label>
                        <input id="waf_small_change" placeholder={props.wafsmall} onChange={(e) => setVariationConeWaffleSmall(e.target.value)}></input>
                        <br></br>

                        <label>Medium:</label>
                        <input id="waf_med_change" placeholder={props.wafmed} onChange={(e) => setVariationConeWaffleMedium(e.target.value)}></input>
                        <br></br>

                        <label>Large:</label>
                        <input id="waf_large_change" placeholder={props.waflarge} onChange={(e) => setVariationConeWaffleLarge(e.target.value)}></input>
                        <br></br>

                        <label>Buckets</label>
                        <br></br>

                        <label>Small:</label>
                        <input id="buck_small_change" placeholder={props.bucksmall} onChange={(e) => setVariationConeBucketSmall(e.target.value)}></input>
                        <br></br>

                        <label>Medium:</label>
                        <input id="buck_med_change" placeholder={props.buckmed} onChange={(e) => setVariationConeBucketMedium(e.target.value)}></input>
                        <br></br>

                        <label>Large:</label>
                        <input id="buck_large_change" placeholder={props.bucklarge} onChange={(e) => setVariationConeBucketLarge(e.target.value)}></input>
                        <br></br>

                    </div>

                    {/* Delete and Update */}
                    <Button variant="danger" style={{ marginRight: '20px', visibility: 'visible' }} id={"btnDelete_" + props.id} onClick={() => DeleteFunc(props.id)}>DELETE</Button>
                    <Button variant="success" style={{ visibility: 'visible' }} id={"btnUpdate_" + props.id} onClick={() => {
                        document.getElementById("Update_" + props.id).style.display = "block";

                        document.getElementById("btnDelete_" + props.id).style.visibility = "hidden";
                        document.getElementById("btnUpdate_" + props.id).style.visibility = "hidden";

                        document.getElementById("btnConfirm_" + props.id).style.visibility = "visible";
                        document.getElementById("btnCancel_" + props.id).style.visibility = "visible";

                        document.getElementById("Update_Done" + props.id).style.display = "none";

                    }}>Update</Button>

                    <br></br>

                    {/* Update Confirm and Cancel */}
                    <Button variant="success" style={{ marginRight: '20px', visibility: 'hidden' }} id={"btnConfirm_" + props.id} onClick={() => UpdateFunc(props.id)}>Confirm</Button>
                    <Button variant="secondary" style={{ visibility: 'hidden' }} id={"btnCancel_" + props.id} onClick={() => {
                        document.getElementById("Update_" + props.id).style.display = "none";

                        document.getElementById("btnConfirm_" + props.id).style.visibility = "hidden";
                        document.getElementById("btnCancel_" + props.id).style.visibility = "hidden";

                        document.getElementById("btnDelete_" + props.id).style.visibility = "visible";
                        document.getElementById("btnUpdate_" + props.id).style.visibility = "visible";

                        document.getElementById("Update_Done" + props.id).style.display = "block";
                    }}>Cancel</Button>

                </Card.Text>

            </Card.Body>
        </Card >

    )
}

export default StockCard;