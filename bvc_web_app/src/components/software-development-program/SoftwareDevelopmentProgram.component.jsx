import React from "react";
import { useState } from "react";
import './SoftwareDevelopmentProgram.style.css'

function SoftwareDevelopmentProgram() {
    return (
        <div>
            <h1 className="main">Software Development Diploma</h1>
            <h2 className="main">School of Technology</h2>
            <h3 className="main">Program Length: 4 Terms</h3>

            <p>Gain practical experience in the cycles of software development through hands-on learning and real projects. 
                You'll gain an understanding of industry standards of planning, developing, and quality assurance testing. </p>

            <p>You'll learn the fundamentals of computer logic, giving you a solid foundation in applying programming skills in a variety of situations. 
                You'll also becoming familiar with emerging topics like user experience (UX) and the internet of things.</p>
        
            <h2 className="main">Available Intakes</h2>
            <p>January 2026</p>
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
                    <td className="tableStyle">$3,880</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$4,485</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 2</td>
                    <td className="tableStyle">$3,976</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$4,540</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 3</td>
                    <td className="tableStyle">$3,736</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$4,300</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 4</td>
                    <td className="tableStyle">$3,684</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$4,289</td>
                    </tr>
                <tr className="tableStyle">
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td className="tableStyle">$17,614</td>
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
                    <td className="tableStyle">$9,470</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$10,075</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 2</td>
                    <td className="tableStyle">$9,688</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$10,252</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 3</td>
                    <td className="tableStyle">$9,470</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$10,034</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 4</td>
                    <td className="tableStyle">$9,694</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$10,299</td>
                    </tr>
                <tr className="tableStyle">
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td className="tableStyle">$40,660</td>
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
                    <td className="tableStyle">MATH1901</td>
                    <td className="tableStyle">Math for the Computer Industry</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">MGMT1103</td>
                    <td className="tableStyle">Essential Skills for Teams Collaboration</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1101</td>
                    <td className="tableStyle">Programming Fundamentals</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">TECH1101</td>
                    <td className="tableStyle">Web and Internet Fundamentals</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">DATA1201</td>
                    <td className="tableStyle">Introduction to Relational Databases</td>
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
                    <td className="tableStyle">DESN2301</td>
                    <td className="tableStyle">User Experience Design</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1201</td>
                    <td className="tableStyle">Introduction to Web Programming	</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1202</td>
                    <td className="tableStyle">Introduction to Object Oriented Programming</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">TECH1201</td>
                    <td className="tableStyle">Networking Essentials</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">TECH1102</td>
                    <td className="tableStyle">Internet of Things</td>
                    <td className="tableStyle">3</td>
                    </tr>
            </table>

            <p>Term 3</p>
            <table className="tableStyle">
                <tr className="tableStyle">
                    <th className="tableStyle">Code</th>
                    <th className="tableStyle">Course</th>
                    <th className="tableStyle">Credits</th>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">MGMT1104</td>
                    <td className="tableStyle">Project Management in Software Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2101</td>
                    <td className="tableStyle">Rapid Application Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle"> 
                    <td className="tableStyle">SODV2201</td>
                    <td className="tableStyle">Web Programming</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2202</td>
                    <td className="tableStyle">Object Oriented Programming</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2205</td>
                    <td className="tableStyle">Mobile Application Development with React Native I</td>
                    <td className="tableStyle">3</td>
                    </tr>
            </table>

            <p>Term 4</p>
            <table className="tableStyle">
                <tr className="tableStyle">
                    <th className="tableStyle">Code</th>
                    <th className="tableStyle">Course</th>
                    <th className="tableStyle">Credits</th>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">DATA2201</td>
                    <td className="tableStyle">Relational Databases</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2401</td>
                    <td className="tableStyle">Algorithms and Data Structures</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2403</td>
                    <td className="tableStyle">Mobile Application Development with React Native II	</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2999</td>
                    <td className="tableStyle">Software Development Diploma Capstone Project</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">TECH2102</td>
                    <td className="tableStyle">Enterprise Computing</td>
                    <td className="tableStyle">3</td>
                    </tr>
            </table>
        </div>
    );
}

export default SoftwareDevelopmentProgram;