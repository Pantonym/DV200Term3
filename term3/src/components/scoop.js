import React from 'react';

const Scoop = () => {
  return (
    <div className="scoops">
      <div id="scoop_1" className="scoop butterscotch-budino">
        <img src="https://www.nancysfancy.com/wp-content/uploads/2016/09/flavors_butterscotch.jpg" alt="Butterscotch Budino" width={"250px"}/>
        <p className="active">BUTTERSCOTCH<br />BUDINO</p>
        <div className="scoop-arrow-up" style={{ display: 'block' }}>
          <img src="https://www.nancysfancy.com/wp-content/themes/dw-bootstrap-child/img/flavors-arrow-up.png" alt="Arrow Up"/>
        </div>
      </div>
      <div id="scoop_2" className="scoop bourbon-vanilla">
        <img src="https://www.nancysfancy.com/wp-content/uploads/2018/06/Vanilla-2.jpg" alt="Bourbon Vanilla Bean"  width={"250px"} />
        <p>BOURBON <br />VANILLA BEAN</p>
        {/* <div className="scoop-arrow-up" style={{ display: 'none' }}>
          <img src="https://www.nancysfancy.com/wp-content/themes/dw-bootstrap-child/img/flavors-arrow-up.png" alt="Arrow Up" />
        </div> */}
      </div>
      <div id="scoop_3" className="scoop espresso">
        <img src="https://www.nancysfancy.com/wp-content/uploads/2022/07/NF_Espresso_Scoop_LR-3.png" alt="Espresso"  width={"250px"} />
        <p>ESPRESSO<br />&nbsp;</p>
        {/* <div className="scoop-arrow-up" style={{ display: 'none' }}>
          <img src="https://www.nancysfancy.com/wp-content/themes/dw-bootstrap-child/img/flavors-arrow-up.png" alt="Arrow Up" />
        </div> */}
      </div>
    </div>
  );
};

export default Scoop;
