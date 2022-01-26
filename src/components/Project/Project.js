import React from 'react';
import "./Project.css";
import pokeBeats from "../../images/Poke-beats.png"
import mentalHealthPicture from "../../images/Mental-Health-Tracker.png"

export default function Project() {
  return (
  <div className='container'> 
    <div className='row'>
      <div className="Project-Heading-Container col2">
        <h1 className='project_heading maroon'>Projects</h1>
         <div className="Project-Container">
            {/* <a href="https://negronmarc.github.io/Poke-Beats/" > */}
                <img src={pokeBeats} alt="Poke-beats sample picture" />
            {/* </a> */}
            {/* <a href="https://github.com/natpitt2393/Mental-Health-Tracker" > */}
                <img src={mentalHealthPicture} alt="Mental Health Login Picture"/>
            {/* </a> */}
         </div>
      </div>
    </div>
  </div>
  );
}
