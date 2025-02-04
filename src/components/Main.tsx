import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pic from '../assets/images/mypic.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={pic} alt="Screenshot" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/subham-2025" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/subham-sharma1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Subham Sharma</h1>
          <p>Product Manager</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/subham-2025" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/subham-sharma1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;