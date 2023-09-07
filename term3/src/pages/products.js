// Import React functionality
import React from "react";

// Axios import
import Axios from 'axios';

// Import Bootstrap functionality
import { Row } from "react-bootstrap";

// Import UseState and Effect
import { useState } from 'react';

// Images
import Banner3 from '../Assets/images/banner3.png';

// Components
import ProductCard from "../components/productCard";

function Products() {

    const [products, setProducts] = useState();

    Axios.get('http://localhost:5000/api/products_get_all/')
        .then(res => {
            let productData = res.data;
            console.log(productData);

            let renderProducts = productData.map((item) =>
                <ProductCard key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} stock={item.stock} tagline={item.tagline}
                    choco={item.variations.sauce.chocolate} vanil={item.variations.sauce.vanilla} cara={item.variations.sauce.caramel}
                    yogsmall={item.variations.cone.yoghurt.small} yogmed={item.variations.cone.yoghurt.medium} yoglarge={item.variations.cone.yoghurt.large}
                    wafsmall={item.variations.cone.waffle.small} wafmed={item.variations.cone.waffle.medium} waflarge={item.variations.cone.waffle.large}
                    bucksmall={item.variations.cone.bucket.small} buckmed={item.variations.cone.bucket.medium} bucklarge={item.variations.cone.bucket.large}
                    image={item.image}
                />)

            setProducts(renderProducts);
        })
        .catch(err => console.log(err))

    return (
        <div style={{ height: 'auto' }}>
            {/* Discounts Header */}
            <Row className="beige_bg">
                <img src={Banner3} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>
            {products}

        </div>
    )
}

export default Products;