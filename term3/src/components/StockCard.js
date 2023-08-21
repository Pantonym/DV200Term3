import React from "react";
import '../App.css';

// Import CSS
import '../css/main.css';

// Axios import
import Axios from 'axios';

// Import Bootstrap functionality
import { Row, Col, Card } from "react-bootstrap";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

const StockCard = (props) => {
    const DeleteFunc = (e) => {
        let URL = 'http://localhost:5000/api/product_delete/' + e;

        Axios.delete(URL)
            .then(res => {
                alert('Item Deleted');
            })
            .catch(err => console.log(err))

        console.log(URL);

        // TODO add page refresh after delete
    }

    return (
        <Row style={{ fontSize: 'large' }}>
            <Col></Col>
            <Col>
                <Card className="StockCard border-0">
                    <Card.Body>
                        <div className="Left">
                            <Card.Img src={IceCream1} className="InvImage" alt="Stock Item"></Card.Img>
                        </div>

                        <div>
                            <Card.Text>
                                Name: {props.name} <br></br>
                                Description: {props.description} <br></br>
                                Price: R{props.price} <br></br>
                                Stock: {props.stock} items <br></br>
                                
                                <button variant="danger" id={props.id} onClick={() => DeleteFunc(props.id)}>DELETE</button>

                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default StockCard;