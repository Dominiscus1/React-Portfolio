import React from 'react';
import './Footer.css'
import githubImg from '../../images/github.png';
import resumeIcon from '../../images/ResumeIcon.png';
import linkedIn from '../../images/linkedin.png';
import resumePDF from '../../images/Anthony Jimenez Resume.pdf';

export default function Footer(){
    return (
        <footer>
        <div className="linkContainer">
        <a href="https://github.com/Dominiscus1">
            <img src={githubImg} alt="Github logo" className="GitHubLogo"/>
        </a>
        <a href="https://www.linkedin.com/in/anthony-jimenez-937a61132/">
            <img src={linkedIn} alt="LinkedIn logo" className="LinkedInLogo"/>
        </a>
        <a href={resumePDF} id="resume" 
            download="Anthony Jimenez Resume.pdf">
            <img src={resumeIcon} alt="Resume Icon" className="ResumeIcon"/>
        </a>
        </div>
        </footer>
    );
}