import React from 'react';
import "./Project.css";
import pokeBeats from "../../images/Poke-beats.png"
import mentalHealthPicture from "../../images/Mental-Health-Tracker.png"
import e_fit from "../../images/e-fit.png"

export default function Project() {
  return (
  <div className='container'> 
    <div className='row'>
      <div className="Project-Heading-Container col2">
        <h1 className='project_heading maroon'>Projects</h1>
         <div className="Project-Container">
           <div className="Poke-beats-container">
            {/* <a href="https://negronmarc.github.io/Poke-Beats/" > */}
                <img src={pokeBeats} alt="Poke-beats sample picture"/>
                <a href='https://negronmarc.github.io/Poke-Beats/'>
                <button className="btn1">Deployed</button>
                </a>
            </div>
            {/* </a> */}
            {/* <a href="https://github.com/natpitt2393/Mental-Health-Tracker" > */}
                <div className="mentalHealth-container">
                  <img src={mentalHealthPicture} alt="Mental Health Login Picture"/>
                  <a href='https://mental-health-tracker-arj.herokuapp.com/'>
                <button className="btn1">Deployed</button>
                </a>
                </div>
                
                <div className="e-fit-container">
            {/* <a href="https://negronmarc.github.io/Poke-Beats/" > */}
                <img src={e_fit} alt="e-fit Preview"/>
                <a href='https://negronmarc.github.io/Poke-Beats/'>
                <button className="btn1">Deployed</button>
                </a>
            </div>
         </div>
      </div>
    </div>
  </div>
  );
}
