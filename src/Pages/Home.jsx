// HeroComponent.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/home.css';
import teaImage1 from '../images/tea1.png';
import teaImage2 from '../images/tea1.png';
import teaImage3 from '../images/tea1.png';
import teaImage4 from '../images/tea1.png';

const Home = () => {
  return (
<>
    
    <div className="hero">
      <div className="hero-content">
        <h1>Want To Taste< br/>Our Tea?</h1>
        <p>Each tea purchase comnes with organically and <br />ethically grown loose LIYONTA tea, carefully<br /> blended to create the perfect cup. </p>
        <button>Shop Now </button>
      </div>
    </div>


    <div className="aboutus">
      <div className="aboutus-content">
        <h1 className="titles">About Liyonta Tea</h1>
        <p> 
        Each tea purchase comes with organically and ethically grown 
        loose LIYONTA tea, carefully blended to create the perfect cup. 
        Each tea purchase comes with organically and ethically grown 
        loose LIYONTA tea, carefully blended to create the perfect cup.
        Each tea purchase comes with organically and ethically grown 
        loose LIYONTA tea, carefully blended to create the perfect cup.
        </p>
        <button>Read More</button>
      </div>
    </div>


    <div className="teavariants">

      <div className="teavariants-content">

        <h1 className="titles">Our Tea Variants</h1>

        <p className="description">Each tea purchase comes with organically and ethically grown loose LIYONTA tea.</p>

        <div className="tea-containers">
          <div className="tea-container" style={{ backgroundImage: `url(${teaImage1})` }}>
            <div className="tea-details">
              <h3 className="tea-name">PEKOE</h3>
              <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
            </div>
          </div>
          <div className="tea-container" style={{ backgroundImage: `url(${teaImage2})` }}>
            <div className="tea-details">
              <h3 className="tea-name">PEKOE</h3>
              <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
            </div>
          </div>
          <div className="tea-container" style={{ backgroundImage: `url(${teaImage3})` }}>
            <div className="tea-details">
              <h3 className="tea-name">PEKOE</h3>
              <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
            </div>
          </div>
          <div className="tea-container" style={{ backgroundImage: `url(${teaImage4})` }}>
            <div className="tea-details">
              <h3 className="tea-name">PEKOE</h3>
              <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div> 
      <div>



      </div>
    </div>






    


    



    </>

  );

};

export default Home;

