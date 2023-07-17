// Group members:
// Nico Van Wyk
// Tebogo Ramoboleng
// Hannah Naidoo 
// Tsebo Ramonyalioa

import './App.css';
import './css/main.css';
import icon from './Assets/images/SearchIcon.svg';
import Scoop from './components/scoop';
import Selected from './components/selected_item';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

  return (

    <div className="App background">

      <div>
        <ul className="header">

          <li className="left search"> <img src={icon} alt="search" height={"40px"}></img> </li>
          <li className="left header_logo"> <img src="https://www.nancysfancy.com/wp-content/themes/dw-bootstrap-child/img/logo2x.png" alt="logo" width="500px" height="150px" /> </li>
          <li className="left menu">
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </li>

        </ul>
      </div>

      {/* <img src="https://www.nancysfancy.com/wp-content/themes/dw-bootstrap-child/img/flavors_banner-1920.jpg" alt="fancy_flavors"/> */}
      <Banner />
      <Scoop />
      <Selected />

      <Footer />
    </div>

  );

}

export default App;