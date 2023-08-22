import React from "react";
import '../App.css';

// Import CSS
import '../css/main.css';

// Axios import
import Axios from 'axios';

// Import Bootstrap functionality
import { Row, Col, Card, Button } from "react-bootstrap";

const StockCard = (props) => {
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

        Axios.put(URL)
            .then(res => {
                alert('Item Updated');

                window.location.reload(false);
            })
            .catch(err => console.log(err))

        console.log(URL);

    }

    return (

        <Card style={{ width: '20rem', height: 'auto', display: 'inline-block', marginBottom: '30px' }}>
            <Card.Body style={{ width: '20rem' }}>
                <Card.Text>
                    <div id="Update_Done" style={{ display: "block" }}>
                        <h3>{props.name}</h3>
                        <h5>{props.description}</h5> <br></br>
                        <h5> Price: R{props.price}</h5> <br></br>
                        <h5> Stock: {props.stock} items</h5> <br></br>
                    </div>

                    <div id={"Update_" + props.id} style={{ display: "none" }}>
                        <input id="name_change" placeholder={props.name}></input>
                        <input id="desc_change" placeholder={props.description}></input>
                        <input id="price_change" placeholder={props.price}></input>
                        <input id="stock_change" placeholder={props.stock}></input>
                    </div>

                    {/* Delete and Update */}
                    <Button variant="danger" style={{ marginRight: '20px', visibility: 'visible' }} id={"btnDelete_" + props.id} onClick={() => DeleteFunc(props.id)}>DELETE</Button>
                    <Button variant="success" style={{ visibility: 'visible' }} id={"btnUpdate_" + props.id} onClick={() => {
                        document.getElementById("Update_" + props.id).style.display = "block";

                        document.getElementById("btnDelete_" + props.id).style.visibility = "hidden";
                        document.getElementById("btnUpdate_" + props.id).style.visibility = "hidden";

                        document.getElementById("btnConfirm_" + props.id).style.visibility = "visible";
                        document.getElementById("btnCancel_" + props.id).style.visibility = "visible";

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
                    }}>Cancel</Button>

                </Card.Text>

            </Card.Body>
        </Card >

    )
}

export default StockCard;