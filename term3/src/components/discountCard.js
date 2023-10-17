import React from "react";
import '../App.css';

// Import CSS
import '../css/main.css';

// Import Bootstrap functionality
import { Card, Button } from "react-bootstrap";

// Import UseState and Effect
import { useState } from 'react';

const DiscountCard = (props) => {
    // image displaying
    const serverURL = 'http://localhost:5000';
    const imageURL = `${serverURL}/images/${props.image}`;

    const [oneClick, setOneClick] = useState(false);

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

    if (props.name === "Vanilla" || props.name === "Chocolate" || props.name === "Strawberry" || props.name === "Vanilla Chocolate Chip") {
        return (

            <Card style={{ width: '20rem', height: 'auto', display: 'inline-block', marginBottom: '30px', marginRight: '25px' }}>
                <Card.Body style={{ width: '20rem' }}>
                    <Card.Text>
                        <div id={"Update_Done" + props.id} style={{ display: "block" }}>
                            <h3>{props.name}</h3>
                            <h5>{props.description}</h5> <br></br>
                            <h5> Price: R{props.price}</h5> <br></br>
                            <h5> Stock: {props.stock} items</h5> <br></br>

                            <img src={imageURL} alt={props.name} style={{ width: '250px', height: '250px' }}></img>
                            <br></br>
                            <br></br>

                            <Button variant="info" style={{ color: 'white', fontSize: '20px' }} onClick={() => {
                                if (oneClick === false) {
                                    setOneClick(true);
                                    localStorage.setItem("SingleItem", props.id);
                                } else {
                                    console.log(localStorage.getItem("SingleItem"));
                                    window.location = "/singleitem";

                                    setOneClick(false);
                                }
                            }
                            }>View Product</Button>
                        </div>

                    </Card.Text>

                </Card.Body>

                {/* <Card.Img variant="bottom" src={'http://localhost:3000/images/' + props.image}></Card.Img> */}
            </Card >
        )

    } else {
        return (
            <div style={{ display: 'none' }}></div>
        )
    }

}

export default DiscountCard;