// Import React functionality
import React from "react";

// Import functionality for loading text
import { useState, useEffect } from "react";

// Import Bootstrap functionality
import { Card, Container, Row, Col } from "react-bootstrap";

// Images
import Banner2 from '../Assets/images/banner2.png';
import BannerCream1 from '../Assets/images/items/BannerCream1.png';
import BannerCream2 from '../Assets/images/items/BannerCream2.png';
import BannerCream3 from '../Assets/images/items/BannerCream3.png';
import BannerCream4 from '../Assets/images/items/IceCream3.png';

import BannerCream5 from '../Assets/images/items/BannerCream1.png';
import BannerCream6 from '../Assets/images/items/BannerCream2.png';
import BannerCream7 from '../Assets/images/items/BannerCream3.png';
import BannerCream8 from '../Assets/images/items/IceCream3.png';

import Banner3 from '../Assets/images/banner3.png';
import TypeCream1 from '../Assets/images/items/BannerCream1.png';
import TypeCream2 from '../Assets/images/items/BannerCream2.png';
import TypeCream3 from '../Assets/images/items/BannerCream3.png';
import TypeCream4 from '../Assets/images/items/IceCream3.png';

import TypeCream5 from '../Assets/images/items/BannerCream1.png';
import TypeCream6 from '../Assets/images/items/BannerCream2.png';
import TypeCream7 from '../Assets/images/items/BannerCream3.png';
import TypeCream8 from '../Assets/images/items/IceCream3.png';

function Products() {

    // Function to change the content of the item depending on what has been selected
    const ChangeSelected = (ID) => {
        return () => {
            // --Variable to show the information of the chosen item
            var y = document.getElementById("SelectedItemDisc");

            // --ID's for the hidden component that displays the data
            var sHeadingID = "SelectedDiscItemHeading";
            var sSubHeadingID = "SelectedDiscItemSubheading";
            var sDescID = "SelectedDiscDesc";

            // --If-else statement to change the information displayed in the output
            if (ID === "DiscItem1") {
                // ----Indicate which item is selected
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";
                document.getElementById("DiscItem4").style.border = "none";

                // ----Generate the data for the output
                document.getElementById(sHeadingID).innerHTML = "VANILLA, CARAMEL AND CHOCOLATE COMBO";
                document.getElementById(sSubHeadingID).innerHTML = "with CHERRY ON TOP";
                document.getElementById(sDescID).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (y.style.display === "none") {
                    y.style.display = "block";
                }
            } else if (ID === "DiscItem2") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem3").style.border = "none";
                document.getElementById("DiscItem4").style.border = "none";

                // ----Generate the data for the output
                document.getElementById(sHeadingID).innerHTML = "VANILLA TUB";
                document.getElementById(sSubHeadingID).innerHTML = "with SPRINKLES";
                document.getElementById(sDescID).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (y.style.display === "none") {
                    y.style.display = "block";
                }
            } else if (ID === "DiscItem3") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem4").style.border = "none";

                // ----Generate the data for the output
                document.getElementById(sHeadingID).innerHTML = "VANILLA KIDDIES";
                document.getElementById(sSubHeadingID).innerHTML = "with SPRINKLES AND A CHERRY ON TOP";
                document.getElementById(sDescID).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (y.style.display === "none") {
                    y.style.display = "block";
                }
            } else if (ID === "DiscItem4") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem1").style.border = "none";
                document.getElementById("DiscItem2").style.border = "none";
                document.getElementById("DiscItem3").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                // ----Generate the data for the output
                document.getElementById(sHeadingID).innerHTML = "VANILLA TUMBLER PACKAGE";
                document.getElementById(sSubHeadingID).innerHTML = "with CHOCOLATE BALLS AND SAUCE";
                document.getElementById(sDescID).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (y.style.display === "none") {
                    y.style.display = "block";
                }
            }

            // --Show the hidden component once the user clicks on one of the items
            if (y.style.display === "none") {
                y.style.display = "block";
            }

            // --Variable to show the information of the chosen item on line 2
            var x = document.getElementById("SelectedItemDisc2");

            // --ID's for the hidden component that displays the data
            var sHeadingID2 = "SelectedDisc2ItemHeading";
            var sSubHeadingID2 = "SelectedDisc2ItemSubheading";
            var sDescID2 = "SelectedDisc2Desc";

            // --If-else statement to change the information displayed in the output
            if (ID === "DiscItem5") {
                // ----Indicate which item is selected
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem6").style.border = "none";
                document.getElementById("DiscItem7").style.border = "none";
                document.getElementById("DiscItem8").style.border = "none";

                // ----Generate the data for the output
                document.getElementById(sHeadingID2).innerHTML = "VANILLA, CARAMEL AND CHOCOLATE COMBO";
                document.getElementById(sSubHeadingID2).innerHTML = "with CHERRY ON TOP";
                document.getElementById(sDescID2).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (x.style.display === "none") {
                    x.style.display = "block";
                }
            } else if (ID === "DiscItem6") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem6").style.border = "none";
                document.getElementById("DiscItem8").style.border = "none";

                // ----Generate the data for the output
                document.getElementById(sHeadingID2).innerHTML = "VANILLA TUB";
                document.getElementById(sSubHeadingID2).innerHTML = "with SPRINKLES";
                document.getElementById(sDescID2).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (x.style.display === "none") {
                    x.style.display = "block";
                }
            } else if (ID === "DiscItem7") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById("DiscItem6").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";
                document.getElementById("DiscItem8").style.border = "none";

                // ----Generate the data for the output
                document.getElementById(sHeadingID2).innerHTML = "VANILLA KIDDIES";
                document.getElementById(sSubHeadingID2).innerHTML = "with SPRINKLES AND A CHERRY ON TOP";
                document.getElementById(sDescID2).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (x.style.display === "none") {
                    x.style.display = "block";
                }
            } else if (ID === "DiscItem8") {
                // ----Indicate which item is selected
                document.getElementById("DiscItem5").style.border = "none";
                document.getElementById("DiscItem6").style.border = "none";
                document.getElementById("DiscItem7").style.border = "none";
                document.getElementById(ID).style.border = "5px solid #3d1617";

                // ----Generate the data for the output
                document.getElementById(sHeadingID2).innerHTML = "VANILLA TUMBLER PACKAGE";
                document.getElementById(sSubHeadingID2).innerHTML = "with CHOCOLATE BALLS AND SAUCE";
                document.getElementById(sDescID2).innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

                // --Show the hidden component once the user clicks on one of the items
                if (x.style.display === "none") {
                    x.style.display = "block";
                }
            }
        }
    }

    return (
        <div style={{ height: 'auto' }}>
            {/* Discounts Header */}
            <Row className="beige_bg">
                <img src={Banner2} alt="Banner" width={'100%'} height={'auto'}></img>
            </Row>

            <br></br>

            {/* Discounts Line 1 */}
            <Row>
                <Col>
                    <img src={BannerCream1} alt="Item1" className="IceCreamImg" onClick={ChangeSelected("DiscItem1")} id="DiscItem1"></img>
                </Col>

                <Col>
                    <img src={BannerCream2} alt="Item2" className="IceCreamImg" onClick={ChangeSelected("DiscItem2")} id="DiscItem2"></img>
                </Col>

                <Col>
                    <img src={BannerCream3} alt="Item3" className="IceCreamImg" onClick={ChangeSelected("DiscItem3")} id="DiscItem3"></img>
                </Col>

                <Col>
                    <img src={BannerCream4} alt="Item4" className="IceCreamImg" onClick={ChangeSelected("DiscItem4")} id="DiscItem4"></img>
                </Col>
            </Row>

            <br></br>

            {/* Hidden element that displays once an item is clicked. Contains information regarding clicked item */}
            <Row style={{ display: 'none' }} id="SelectedItemDisc">

                <Col style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <h2 id="SelectedDiscItemHeading">COCONUT STRACCIATELLA</h2>
                    <h4 id="SelectedDiscItemSubheading">with BITTERSWEET CHOCOLATE STRANDS</h4>
                    <p id="SelectedDiscDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>

                <Col></Col>
            </Row>

            <br></br>

            {/* Discounts Line 2 */}
            <Row>
                <Col>
                    <img src={BannerCream1} alt="Item1" className="IceCreamImg" onClick={ChangeSelected("DiscItem5")} id="DiscItem5"></img>
                </Col>

                <Col>
                    <img src={BannerCream2} alt="Item2" className="IceCreamImg" onClick={ChangeSelected("DiscItem6")} id="DiscItem6"></img>
                </Col>

                <Col>
                    <img src={BannerCream3} alt="Item3" className="IceCreamImg" onClick={ChangeSelected("DiscItem7")} id="DiscItem7"></img>
                </Col>

                <Col>
                    <img src={BannerCream4} alt="Item4" className="IceCreamImg" onClick={ChangeSelected("DiscItem8")} id="DiscItem8"></img>
                </Col>
            </Row>

            <br></br>

            {/* Hidden element that displays once an item is clicked. Contains information regarding clicked item */}
            <Row style={{ display: 'none' }} id="SelectedItemDisc2">

                <Col style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <h2 id="SelectedDisc2ItemHeading">COCONUT STRACCIATELLA</h2>
                    <h4 id="SelectedDisc2ItemSubheading">with BITTERSWEET CHOCOLATE STRANDS</h4>
                    <p id="SelectedDisc2Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>

                <Col></Col>
            </Row>
        </div>
    )
}

export default Products;