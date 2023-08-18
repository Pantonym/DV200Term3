import React from "react";
import '../App.css';

// Import CSS
import '../css/main.css';

// Import Bootstrap functionality
import { Row, Col, Card } from "react-bootstrap";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

const StockCard = (props) => {
    return (
        <Row style={{ fontSize: 'large' }}>
            <Col></Col>
            <Col>
                <Card className="StockCard border-0" id={props.key}>
                    <Card.Body>
                        <div className="Left">
                            <Card.Img src={IceCream1} className="InvImage" alt="Stock Item"></Card.Img>
                        </div>

                        <div>
                            <Card.Text>
                                Name: {props.name} <br></br>
                                Description: {props.description} <br></br>
                                Price: R{props.price} <br></br>
                                Stock: {props.stock} items
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