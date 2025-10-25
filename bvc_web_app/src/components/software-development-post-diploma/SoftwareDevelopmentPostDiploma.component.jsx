import React from "react";
import { useState } from "react";
import './SoftwareDevelopmentPostDiploma.style.css'

function SoftwareDevelopmentPostDiploma() {
    return (
        <div>
            <h1 className="main">Software Development Diploma - Post-Diploma Certificate</h1>
            <h2 className="main">School of Technology</h2>
            <h3 className="main">Program Length: 2 Terms</h3>

            <p>Enhance your prior post-secondary education with new skills. This post-diploma certificate prepares you for a career in software development, computer applications development, database management, and mobile development. Gain the tools you need to analyze and design solutions for business and consumer applications, including coding principles, systems analysis, and more. You'll be ready for a rewarding career in software development in many possible industries.</p>
        
            <h2 className="main">Available Intakes</h2>
            <p>September 2026</p>

            <h2 className="main">Tuition and fees</h2>

            <p>Domestic Students</p>
            <table className="tableStyle">
                <tr className="tableStyle">
                    <th className="tableStyle">Term</th>
                    <th className="tableStyle">Tuition fees</th>
                    <th className="tableStyle">Additional fees</th>
                    <th className="tableStyle">Total fees</th>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 1</td>
                    <td className="tableStyle">$3,900</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$4,505</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 2</td>
                    <td className="tableStyle">$4,120</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$4,684</td>
                    </tr>
                <tr className="tableStyle">
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td className="tableStyle">$9,189</td>
                </tr>
            </table>

            <p>International Students</p>
            <table className="tableStyle">
                <tr className="tableStyle">
                    <th className="tableStyle">Term</th>
                    <th className="tableStyle">Tuition fees</th>
                    <th className="tableStyle">Additional fees</th>
                    <th className="tableStyle">Total fees</th>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 1</td>
                    <td className="tableStyle">$10,560</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$11,165</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 2</td>
                    <td className="tableStyle">$10,560</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$11,165</td>
                    </tr>
                <tr className="tableStyle">
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td className="tableStyle">$22,330</td>
                </tr>
            </table>

            <h2 className="main">Courses</h2>

            <p>Term 1</p>
            <table className="tableStyle">
                <tr className="tableStyle">
                    <th className="tableStyle">Code</th>
                    <th className="tableStyle">Course</th>
                    <th className="tableStyle">Credits</th>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">DESN3203</td>
                    <td className="tableStyle">Web Design and Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">MATH3901</td>
                    <td className="tableStyle">Mathematics for Software Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV3201</td>
                    <td className="tableStyle">Web Programming Foundations</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV3301</td>
                    <td className="tableStyle">Software Development Techniques</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV3302</td>
                    <td className="tableStyle">Systems Development and Object-Oriented Design</td>
                    <td className="tableStyle">3</td>
                    </tr>
            </table>

            <p>Term 2</p>
            <table className="tableStyle">
                <tr className="tableStyle">
                    <th className="tableStyle">Code</th>
                    <th className="tableStyle">Course</th>
                    <th className="tableStyle">Credits</th>
                    </tr>
                <tr className="tableStyle"> 
                    <td className="tableStyle">DATA3401</td>
                    <td className="tableStyle">Introduction to Data and Analytics</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">DESN3306</td>
                    <td className="tableStyle">Computer Graphics</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV3203</td>
                    <td className="tableStyle">Mobile Application Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV3999</td>
                    <td className="tableStyle">Software Development Capstone Project</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">TECH3101</td>
                    <td className="tableStyle">Systems Development: Concepts and Analysis</td>
                    <td className="tableStyle">3</td>
                    </tr>
            </table>
        </div>
    );
}

export default SoftwareDevelopmentPostDiploma;