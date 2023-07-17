import React from "react";

const Selected = () => {
    return (
        <div className="selected_div montserrat">
            
            <ul>
                <li className="left"><img src="https://www.nancysfancy.com/wp-content/uploads/2018/06/NANCYS-FANCY_BOURBON-VANILLA-BEAN_044-FINAL-Credit-Jason-Varney-1.jpg" height={"500px"} className="selected_img" /></li>
                <li>
                    <h2 className="col_brown selected_header">BUTTERSCOTCH BUDINO</h2>
                    <h3 className="col_gray selected_header">With Bittersweet Chocolate Strands</h3>
                    <p className="col_brown selected_text">
                        Bourbon vanilla beans from Madagascar are the source of the complex and buttery, true vanilla flavor in Nancy’s Bourbon
                        Vanilla Bean Gelato.  This gelato starts with the freshest milk and cream, together with pure cane sugar, to create a
                        perfect, creamy foundation for the full, rich vanilla essence to shine through.  It is simply the most authentic,
                        natural vanilla flavor to be found in a pint.
                    </p>
                    <br></br>
                    <button type="button" className="left col_brown btnPurchase">Purchase</button>
                </li>
            </ul>

        </div>
    );
};

export default Selected;