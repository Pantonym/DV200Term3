import React from "react";
import '../App.css';

// Import CSS
import '../css/main.css';

// Axios import
import Axios from 'axios';

// Import Bootstrap functionality
import { Card, Button } from "react-bootstrap";

// Import UseState and Effect
import { useState } from 'react';

const StockCard = (props) => {
    // image displaying
    const serverURL = 'http://localhost:5000';
    const imageURL = `${serverURL}/images/${props.image}`;

    // image uploading
    const [image, setImage] = useState();

    // Bypass first click failure
    const [firstClick, setFirstClick] = useState(false);

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

    const getImage = (e) => {
        let imageFile = e.target.files[0];
        console.log(imageFile);
        setImage(imageFile);

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
    };

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

        // Basic Info
        setProductName(document.getElementById("name_change_" + e).value);
        setProductTagLine(document.getElementById("tag_change_" + e).value);
        setProductDesc(document.getElementById("desc_change_" + e).value);
        setProductPrice(document.getElementById("price_change_" + e).value);
        // Sauces
        setVariationSauceChocolate(document.getElementById("sauce_choco_change_" + e).value);
        setVariationSauceVanilla(document.getElementById("sauce_vanil_change_" + e).value);
        setVariationSauceCaramel(document.getElementById("sauce_cara_change_" + e).value);
        // Cups
        // --Yoghurt
        setVariationConeYoghurtSmall(document.getElementById("yog_small_change" + e).value);
        setVariationConeYoghurtMedium(document.getElementById("yog_med_change" + e).value);
        setVariationConeYoghurtLarge(document.getElementById("yog_large_change" + e).value);
        // --Waffle
        setVariationConeWaffleSmall(document.getElementById("waf_small_change" + e).value);
        setVariationConeWaffleMedium(document.getElementById("waf_med_change" + e).value);
        setVariationConeWaffleLarge(document.getElementById("waf_large_change" + e).value);
        // --Bucket
        setVariationConeBucketSmall(document.getElementById("buck_small_change" + e).value);
        setVariationConeBucketMedium(document.getElementById("buck_med_change" + e).value);
        setVariationConeBucketLarge(document.getElementById("buck_large_change" + e).value);

        // The total stock will be equivalent to the total amount of cones of all cone types.
        let STOCK = (+variationConeYoghurtLarge + +variationConeYoghurtMedium + +variationConeYoghurtSmall) + (+variationConeWaffleLarge + +variationConeWaffleMedium + +variationConeWaffleSmall) + (+variationConeBucketLarge + +variationConeBucketMedium + +variationConeBucketSmall);

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
            },
        }

        const objFormData = new FormData();
        objFormData.append('data', JSON.stringify(payload));
        objFormData.append('image', image);

        if (firstClick === false) {

            setFirstClick(true);
            document.getElementById("lblConfirm_" + e).style.display = 'block';

        } else if (firstClick === true) {

            setFirstClick(false);
            document.getElementById("lblConfirm_" + e).style.display = 'none';
            Axios.patch(URL, objFormData, {
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
            window.location.reload(true);

        }

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

                        <img src={imageURL} alt={props.name} style={{ width: '250px', height: '250px' }}></img>
                    </div>

                    <br></br>

                    <div id={"Update_" + props.id} style={{ display: "none" }}>
                        <label>Name:</label>
                        <input id={"name_change_" + props.id} defaultValue={props.name}></input>
                        <br></br>

                        <label>Tagline:</label>
                        <input id={"tag_change_" + props.id} defaultValue={props.tagline}></input>
                        <br></br>

                        <label>Desc:</label>
                        <input id={"desc_change_" + props.id} defaultValue={props.description} onChange={(e) => setProductDesc(e.target.value)}></input>
                        <br></br>

                        <label>Price:</label>
                        <input id={"price_change_" + props.id} defaultValue={props.price} onChange={(e) => setProductPrice(e.target.value)}></input>
                        <br></br>

                        <label>Sauces:</label>
                        <br></br>

                        <label>Chocolate:</label>
                        <input id={"sauce_choco_change_" + props.id} defaultValue={props.choco} onChange={(e) => setVariationSauceChocolate(e.target.value)}></input>
                        <br></br>

                        <label>Vanilla:</label>
                        <input id={"sauce_vanil_change_" + props.id} defaultValue={props.vanil} onChange={(e) => setVariationSauceVanilla(e.target.value)}></input>
                        <br></br>

                        <label>Caramel:</label>
                        <input id={"sauce_cara_change_" + props.id} defaultValue={props.cara} onChange={(e) => setVariationSauceCaramel(e.target.value)}></input>
                        <br></br>

                        <label>Yoghurt Cups</label>
                        <br></br>

                        <label>Small:</label>
                        <input id={"yog_small_change" + props.id} defaultValue={props.yogsmall} onChange={(e) => setVariationConeYoghurtSmall(e.target.value)}></input>
                        <br></br>

                        <label>Medium:</label>
                        <input id={"yog_med_change" + props.id} defaultValue={props.yogmed} onChange={(e) => setVariationConeYoghurtMedium(e.target.value)}></input>
                        <br></br>

                        <label>Large:</label>
                        <input id={"yog_large_change" + props.id} defaultValue={props.yoglarge} onChange={(e) => setVariationConeYoghurtLarge(e.target.value)}></input>
                        <br></br>

                        <label>Waffle Cones</label>
                        <br></br>

                        <label>Small:</label>
                        <input id={"waf_small_change" + props.id} defaultValue={props.wafsmall} onChange={(e) => setVariationConeWaffleSmall(e.target.value)}></input>
                        <br></br>

                        <label>Medium:</label>
                        <input id={"waf_med_change" + props.id} defaultValue={props.wafmed} onChange={(e) => setVariationConeWaffleMedium(e.target.value)}></input>
                        <br></br>

                        <label>Large:</label>
                        <input id={"waf_large_change" + props.id} defaultValue={props.waflarge} onChange={(e) => setVariationConeWaffleLarge(e.target.value)}></input>
                        <br></br>

                        <label>Buckets</label>
                        <br></br>

                        <label>Small:</label>
                        <input id={"buck_small_change" + props.id} defaultValue={props.bucksmall} onChange={(e) => setVariationConeBucketSmall(e.target.value)}></input>
                        <br></br>

                        <label>Medium:</label>
                        <input id={"buck_med_change" + props.id} defaultValue={props.buckmed} onChange={(e) => setVariationConeBucketMedium(e.target.value)}></input>
                        <br></br>

                        <label>Large:</label>
                        <input id={"buck_large_change" + props.id} defaultValue={props.bucklarge} onChange={(e) => setVariationConeBucketLarge(e.target.value)}></input>
                        <br></br>

                        <br></br>
                        {/* image upload */}
                        <label>Upload Image</label>
                        <input type="file" onChange={getImage}></input>
                        <br></br>

                    </div>

                    {/* Delete and Update */}
                    <Button variant="danger" style={{ marginRight: '20px', visibility: 'visible' }} id={"btnDelete_" + props.id} onClick={() => DeleteFunc(props.id)}>DELETE</Button>
                    <Button variant="success" style={{ visibility: 'visible' }} id={"btnUpdate_" + props.id} onClick={() => {
                        // Inputs
                        document.getElementById("Update_" + props.id).style.display = "block";

                        // Update and delete buttons
                        document.getElementById("btnDelete_" + props.id).style.visibility = "hidden";
                        document.getElementById("btnUpdate_" + props.id).style.visibility = "hidden";

                        // Cancel and Confirm buttons
                        document.getElementById("btnConfirm_" + props.id).style.visibility = "visible";
                        document.getElementById("btnCancel_" + props.id).style.visibility = "visible";

                        // Info Block
                        document.getElementById("Update_Done" + props.id).style.display = "none";

                    }}>Update</Button>

                    <br></br>
                    <h3 id={"lblConfirm_" + props.id} style={{ display: "none" }}>Click again to confirm</h3>

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