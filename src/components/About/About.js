import React from 'react';
import aboutImg from '../../images/Profile_Picture.jpg';
import "./style.css";

export default function About() {
  return (
    <div className='container'> 
      <div className='row'>
        <div className="col2">
          <img src={aboutImg} alt="" className="about_img"></img>
        </div>
        <div className="col2">
          <h1 className='about_heading'>About Page</h1>
          <div className="about_body">
            <p className='about_text'>
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
              mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
              lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
              imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
              in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
          </div>
        </div>
        </div>
      </div>  
  );
}
