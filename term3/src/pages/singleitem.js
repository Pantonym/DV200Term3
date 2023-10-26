// Import React functionality
import React from "react";

// Axios import
import Axios from 'axios';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

function SingleItem() {
    const AddToCart = (id) => {

        let TotalPrice = document.getElementById("sedQty").value * sessionStorage.getItem("ProductPrice");

        if (document.getElementsByName("Restrictions").value === undefined) {
            var RESTRICTIONS = 'NoRes';
        }

        let ORDERS = sessionStorage.getItem("ProductName") + ', ' + sessionStorage.getItem("ProductPrice") + ', ' + document.getElementById("SelectFlavours").value + ', ' + document.getElementById("SelectSize").value + ', ' + document.getElementById("SelectType").value + ', ' + RESTRICTIONS + ', ' + document.getElementById("sedQty").value;

        let payload = {
            client: sessionStorage.getItem("Email"),
            orders: ORDERS,
            totalprice: TotalPrice
        }

        if (sessionStorage.getItem("Email") === null) {
            window.location = "/signup";
        } else {
            console.log(payload);

            if (window.confirm("Are you sure you want to add this to your cart?") === true) {
                Axios.post('http://localhost:5000/api/order_add/', payload);
            }
        }
    }

    Axios.get('http://localhost:5000/api/product_get_single/' + localStorage.getItem("SingleItem"))
        .then(res => {
            let varData = res.data;
            // image displaying
            const serverURL = 'http://localhost:5000';
            const imageURL = `${serverURL}/images/${varData.image}`;
            sessionStorage.setItem("imageURL", imageURL);

            sessionStorage.setItem("ProductName", varData.name);
            sessionStorage.setItem("Image", varData.image);

            sessionStorage.setItem("ProductPrice", varData.price);
            sessionStorage.setItem("ProductDesc", varData.description);

            sessionStorage.setItem("ProductID", varData.id);
        })
        .catch(err => console.log(err))

    return (
        <div className="beige_bg" style={{ height: 'auto' }}>

            <Row>
                <Col></Col>
                <Col><h3 id="ProductName" className="Lobster">{sessionStorage.getItem("ProductName")}</h3></Col>
                <Col></Col>
            </Row>

            <br></br>

            <Row>
                <Col className="col-1"></Col>

                <Col className="col-5">
                    <img src={sessionStorage.getItem("imageURL")} className="SingleImg"></img>
                </Col>

                <Col className="col-5 Abel text-start" style={{ fontSize: "Largest" }}>
                    <div><p id="SinglePrice">R{sessionStorage.getItem("ProductPrice")}</p></div>

                    <div><p id="SingleDesc">{sessionStorage.getItem("ProductDesc")}</p></div>

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
                        <label className="inline" style={{ marginRight: '25px' }}>Bowl Type</label>
                        <select id="SelectType" className="inline">
                            <option value={'Yoghurt'}>Yoghurt Cup</option>
                            <option value={'Waffle'}>Waffle Cone</option>
                            <option value={'Bucket'}>Bucket</option>
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

                        <input type="radio" id="NoRes" name="Restrictions" value="NoRes"></input>
                        <label className="CheckLabel" for="NoRes">No Restrictions</label>

                        <input type="radio" id="GlutFree" name="Restrictions" value="GlutFree"></input>
                        <label className="CheckLabel" for="GlutFree">Gluten Free</label><br></br>

                        <input type="radio" id="LacInt" name="Restrictions" value="LacInt"></input>
                        <label className="CheckLabel" for="LacInt">Lactose Intolerant</label>

                        <input type="radio" id="Vegan" name="Restrictions" value="Vegan"></input>
                        <label className="CheckLabel" for="Vegan">Vegan</label>

                    </div>

                    <div>
                        <label className="inline" style={{ marginRight: '25px' }}>Quantity</label>
                        <input id="sedQty" type="number" defaultValue={1}></input>
                    </div>

                    <br></br>

                    <div>
                        <button type="submit" onClick={AddToCart}>Add To Cart</button>
                    </div>
                </Col>

                <Col className="col-1"></Col>
            </Row>

        </div>
    )
}

export default SingleItem;