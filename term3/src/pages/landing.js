// Import React functionality
import React from "react";

// Import Axios
import Axios from "axios";

// Import Components
import NewCard from "../components/NewCard";
import DiscountCard from "../components/discountCard";

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

// Images
import Carousel1 from '../Assets/images/items/carousel1.jpg';
import Carousel2 from '../Assets/images/items/carousel2.png';
import Carousel3 from '../Assets/images/items/carousel3.jpg';
import Banner from '../Assets/images/banner.png';
import Banner2 from '../Assets/images/banner2.png';

// Import UseState and Effect
import { useState, useEffect } from 'react';

function Landing() {

    // --Store all products
    const [newProducts, setNewProducts] = useState();
    const [discountProducts, setDiscountProducts] = useState();
    // --Re-Render
    const [reRenderProducts, setReRenderProducts] = useState(false);

    // Use effect for read all
    useEffect(() => {

        // New Products
        Axios.get('http://localhost:5000/api/products_get_all/')
            .then(res => {
                let productData = res.data;

                let renderProducts = productData.map((item) =>
                    <NewCard key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} stock={item.stock} tagline={item.tagline}
                        choco={item.variations.sauce.chocolate} vanil={item.variations.sauce.vanilla} cara={item.variations.sauce.caramel}
                        yogsmall={item.variations.cone.yoghurt.small} yogmed={item.variations.cone.yoghurt.medium} yoglarge={item.variations.cone.yoghurt.large}
                        wafsmall={item.variations.cone.waffle.small} wafmed={item.variations.cone.waffle.medium} waflarge={item.variations.cone.waffle.large}
                        bucksmall={item.variations.cone.bucket.small} buckmed={item.variations.cone.bucket.medium} bucklarge={item.variations.cone.bucket.large}
                        image={item.image}
                    />)

                setNewProducts(renderProducts);
                setReRenderProducts(false);
            })
            .catch(err => console.log(err))

    }, [reRenderProducts])

    // Discounted Products
    Axios.get('http://localhost:5000/api/products_get_all/')
        .then(res => {
            let productData = res.data;

            let renderProducts = productData.map((item) =>
                <DiscountCard key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} stock={item.stock} tagline={item.tagline}
                    choco={item.variations.sauce.chocolate} vanil={item.variations.sauce.vanilla} cara={item.variations.sauce.caramel}
                    yogsmall={item.variations.cone.yoghurt.small} yogmed={item.variations.cone.yoghurt.medium} yoglarge={item.variations.cone.yoghurt.large}
                    wafsmall={item.variations.cone.waffle.small} wafmed={item.variations.cone.waffle.medium} waflarge={item.variations.cone.waffle.large}
                    bucksmall={item.variations.cone.bucket.small} buckmed={item.variations.cone.bucket.medium} bucklarge={item.variations.cone.bucket.large}
                    image={item.image}
                />)

            setDiscountProducts(renderProducts);
            setReRenderProducts(false);
        })
        .catch(err => console.log(err))

    return (
        // Div that holds all elements
        <div style={{ height: 'auto' }}>

            {/* Image Slider */}
            <Row className="beige_bg" style={{ paddingBottom: "25px", zIndex: '1' }}>
                {/* --Makes space left of the slider */}
                <Col className="col-2"></Col>

                {/* --Slider */}
                <Col className="col-8">

                    <div id="HeroSlider">
                        {/* ----Carousel */}
                        <Carousel className="carousel-dark">
                            {/* ------Carousel Items */}
                            <Carousel.Item interval={10000}>
                                <img className="d-block w-100 CarouselImg" src={Carousel1} alt="Image1" />

                                <Carousel.Caption>
                                    <h3 className="brown Lobster CarouselHeading">Neapolitan</h3>
                                    <p className="brown Abel CarouselText">Strawberry, Chocolate and Vanilla - an unbeatable combo!</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img className="d-block w-100 CarouselImg" src={Carousel2} alt="Image2" />

                                <Carousel.Caption>
                                    <h3 className="brown Lobster CarouselHeading">Strawberry Cup</h3>
                                    <p className="brown Abel CarouselText">A cup of flavorful strawberry ice cream, with a free strawberry cone!</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img className="d-block w-100 CarouselImg" src={Carousel3} alt="Image3" />

                                <Carousel.Caption>
                                    <h3 className="brown Lobster CarouselHeading">Party Package</h3>
                                    <p className="brown Abel CarouselText">Bulk ordering for upcoming events!</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                </Col>

                {/* --Makes space right of the slider */}
                <Col className="col-2"></Col>
            </Row>

            {/* Business Description */}
            <Row className="beige_bg">
                <Col className="col-3"></Col>
                <Col className="col-6">
                    <h2 className="brown Rye">Wintry West</h2>
                    <p className="brown Abel" style={{ fontSize: "larger" }}>Wintry West is a western-styled ice cream eCommerce site, where you can get all your rootin’ tootin’ ice cream needs satisfied.</p>
                </Col>
                <Col className="col-3"></Col>
            </Row>

            {/* New Items Header */}
            <Row className="beige_bg">
                <img src={Banner} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* New Items */}
            {newProducts}

            <br></br>

            {/* Discounts Header */}
            <Row className="beige_bg">
                <img src={Banner2} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* Discounts */}
            {discountProducts}
            
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default Landing;