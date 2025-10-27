import React from "react";
import { Route, Routes } from "react-router-dom";

import "./home.style.css"

function Home() {
    return (
        <div>
            <h1 className="main">Software Development</h1>
            <h2 className="sub">School of Technology</h2>

            <h3 className="main">Programs</h3>
            <ul>
                <li>Software Development Diploma</li>
                <li>Software Development Diploma - Apprenticeship Style</li>
                <li>Software Development Diploma - Post-Diploma Certificate</li>
            </ul>
        </div>
    );
}

export default Home;