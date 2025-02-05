import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt} from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faHandshake} from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Agile",
    "Scrum",
    "JIRA",
    "Confluence",
    "User Research",
    "Competitive Analysis",
    "Go-to-Market Strategy",
    "Wireframing",
    "Miro",
    "Figma",
];

const labelsSecond = [
    "A/B Testing",
    "Google Analytics",
    "MS Excel",
    "Tableau",
    "Cohort Analysis",
    "KPI Tracking",
    "Funnel Optimization",
    "Mixpanel",
];

const labelsThird = [
    "Roadmap Planning",
    "Sprint Planning",
    "Product Backlog Management",
    "Feature Prioritization",
    "Stakeholder Communication",
    "Product Requirement Docs",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faProductHunt} size="3x"/>
                    <h3>Customer-focused Product Manager</h3>
                    <p>I have 5+ years of experience driving end-to-end product development across North America and APAC. Proven success in leveraging cloud and AI to build scalable, data-driven solutions. Skilled in AWS, Azure, OCI, system design, and predictive analytics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data-Driven Decision Making & Analytics</h3>
                    <p>I leverage data to drive product decisions by analyzing user behavior, market trends, and key metrics. I collaborate with cross-functional teams to optimize product performance and improve retention.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHandshake} size="3x"/>
                    <h3>Product Execution & Collaboration</h3>
                    <p>I excel in leading cross-functional teams and managing communication between engineering, design, and business teams to deliver impactful products. I drive execution through sprint planning, user stories, and clear documentation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;