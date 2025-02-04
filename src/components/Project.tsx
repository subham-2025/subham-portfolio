import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://drive.google.com/file/d/1IhvUk0FclTadMvpUuvtmuUh6v-QGGYPl/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1IhvUk0FclTadMvpUuvtmuUh6v-QGGYPl/view?usp=drive_link" target="_blank" rel="noreferrer"><h2>Google Capstone Project</h2></a>
                <p>Developed a system for real-time autonomous vehicle routing, featuring a fleet monitoring dashboard, adaptive route optimization logic, and a user-friendly ride booking and tracking interface.
                </p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/110pfSYonkljymxYW9llHZslNplXIzDlr/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/110pfSYonkljymxYW9llHZslNplXIzDlr/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Managing Oracle Work & Asset Cloud Services</h2></a>
                <p>Launched 4 cloud-native features on WACS, boosting user engagement by 5%, optimizing asset inventory handling (-10%), streamlining onboarding (-15%), and reducing unplanned downtime (-12%) through AI-driven risk evaluation.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1FMAoZsD5W0aASt76osG2BJ44txhg1C7d/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1FMAoZsD5W0aASt76osG2BJ44txhg1C7d/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Mitigation of vehicle noise</h2></a>
                <p>Developed predictive models for vehicle noise simulation, securing a patent and generating $2.6M in royalties. Leveraged Azure Data Factory for data ingestion and Azure Synapse Analytics for large-scale simulations.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1baFN7gRF9UlRMJvmVCp3OS9OPxAiFenu/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1baFN7gRF9UlRMJvmVCp3OS9OPxAiFenu/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Reducing Ambulance delay casualties</h2></a>
                <p>Reduced ambulance delay casualties by 8% by leading the development and launch of an Azure IoT-based vehicle-integrated SOS alerting product. Conducted interviews with emergency responders to define product requirements.
                </p>
            </div>
            {/* <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;