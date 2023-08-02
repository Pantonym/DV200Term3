// Import React functionality
import React from "react";

// Import Images
import IceCream1 from '../Assets/images/items/IceCream1.png';

// Import Bootstrap functionality
import { Row, Col } from "react-bootstrap";

function Administrator() {

    return (
        <div style={{ height: 'auto' }}>

            <Row className="beige_bg">
                <Col></Col>
                <Col className="Lobster">
                    <button ID="btnAdmin_left" style={{backgroundColor: '#3d1617', color: '#f8f7f2'}} onClick={() => { 
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

                    <button ID="btnAdmin_right" style={{backgroundColor: '#f8f7f2', color: '#3d1617'}} onClick={() => { 
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
                </Col>
                <Col></Col>
            </Row>

            {/* Order Management */}
            <div id="OrderManagementDiv" style={{ display: 'block' }} className="Abel">
                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <img src={IceCream1} className="OrderItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <div>
                            <label className="inline">User:</label>
                            <p className="inline" id="UserName">John Doe</p>
                        </div>

                        <div>
                            <label className="inline">Address:</label>
                            <p className="inline" id="UserAddress">21 Green Street, Pretoria</p>
                        </div>

                        <div>
                            <label>Order:</label>
                        </div>
                        <div>
                            <p id="OrderItem">1x Chocolate Raising Combo</p>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>

                <br></br>

                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <img src={IceCream1} className="OrderItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <div>
                            <label className="inline">User:</label>
                            <p className="inline" id="UserName">John Doe</p>
                        </div>

                        <div>
                            <label className="inline">Address:</label>
                            <p className="inline" id="UserAddress">21 Green Street, Pretoria</p>
                        </div>

                        <div>
                            <label>Order:</label>
                        </div>
                        <div>
                            <p id="OrderItem">1x Chocolate Raising Combo</p>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>
            </div>

            {/* Inventory Management */}
            <div id="InventoryManagementDiv" style={{ display: 'none' }} className="Abel">
                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <img src={IceCream1} className="InvItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <div>
                            <label className="inline">Name: </label>
                            <p className="inline" id="InvName">Vanilla Ice Cream</p>
                        </div>

                        <div>
                            <label className="inline">Description: </label>
                            <p className="inline" id="InvDesc">Lorum Ipsum Solor Dit Amet</p>
                        </div>

                        <div>
                            <label className="inline">Price: </label>
                            <p className="inline" id="InvPrice">R80</p>
                        </div>

                        <div>
                            <label className="inline">Stock: </label>
                            <input type="number" className="inline" id="InvPrice" value='100'></input>
                            <label className="inline"> Units</label>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>

                <br></br>

                <Row>
                    <Col className="col-1"></Col>
                    <Col className="col-3 text-end">
                        <img src={IceCream1} className="InvItem"></img>
                    </Col>

                    <Col className="col-5 text-start">
                        <div>
                            <label className="inline">Name: </label>
                            <p className="inline" id="InvName">Vanilla Ice Cream</p>
                        </div>

                        <div>
                            <label className="inline">Description: </label>
                            <p className="inline" id="InvDesc">Lorum Ipsum Solor Dit Amet</p>
                        </div>

                        <div>
                            <label className="inline">Price: </label>
                            <p className="inline" id="InvPrice">R80</p>
                        </div>

                        <div>
                            <label className="inline">Stock: </label>
                            <input type="number" className="inline" id="InvPrice" value='100'></input>
                            <label className="inline"> Units</label>
                        </div>
                    </Col>

                    <Col className="col-3"></Col>
                </Row>
            </div>
        </div>
    )
}

export default Administrator;