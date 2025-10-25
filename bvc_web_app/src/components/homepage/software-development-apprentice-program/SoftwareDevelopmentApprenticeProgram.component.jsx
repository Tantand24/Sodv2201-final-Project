import React from "react";
import { useState } from "react";
import './SoftwareDevelopmentApprenticeProgram.style.css'

function SoftwareDevelopmentApprenticeProgram() {
    return (
        <div>
            <h1 className="main">Software Development Diploma - Apprenticeship Style</h1>
            <h2 className="main">School of Technology</h2>
            <h3 className="main">Program Length: 4 Terms</h3>

            <p>The Software Development - Apprenticeship Style program prepares learners for related employment in the technology industry. Learners in the program will gain practical experience in the software development industry by working-part time in a company on real-industry projects while completing an accredited college diploma. Learners gain exposure to industry standards in planning, developing, and quality assurance testing. A structured approach to problem solving, effective communications, and attention to development standards and documentation will be stressed throughout the program. Graduates will be ready for careers in full-stack web development, application development, mobile application development, database administration, and agile project management.</p>
        
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
                    <td className="tableStyle">$3,738</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$4,343</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 2</td>
                    <td className="tableStyle">$4,120</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$4,684</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 3</td>
                    <td className="tableStyle">$4,219</td>
                    <td className="tableStyle">$564</td>
                    <td className="tableStyle">$4,783</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">Term 4</td>
                    <td className="tableStyle">$4,219</td>
                    <td className="tableStyle">$605</td>
                    <td className="tableStyle">$4,824</td>
                    </tr>
                <tr className="tableStyle">
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td className="tableStyle">$18,634</td>
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
                    <td className="tableStyle">DATA1251	</td>
                    <td className="tableStyle">Introduction to Database</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1251	</td>
                    <td className="tableStyle">Web Programming Basics and Node.js</td>
                    <td className="tableStyle">6</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1252	</td>
                    <td className="tableStyle">Programming in C#</td>
                    <td className="tableStyle">6</td>
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
                    <td className="tableStyle">CLCM1151</td>
                    <td className="tableStyle">Introduction to Cloud</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1253</td>
                    <td className="tableStyle">Web Programming - REACT</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1254</td>
                    <td className="tableStyle">Object Oriented Programming Concepts</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1255	</td>
                    <td className="tableStyle">Web Programming - ASP.NET</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV1951</td>
                    <td className="tableStyle">Software Development Immersive Industry Experience - I</td>
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
                    <td className="tableStyle">SODV2251</td>
                    <td className="tableStyle">Mobile Application Development I</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2451</td>
                    <td className="tableStyle">Full Stack Web Application</td>
                    <td className="tableStyle">6</td>
                    </tr>
                <tr className="tableStyle"> 
                    <td className="tableStyle">SODV2452</td>
                    <td className="tableStyle">Application Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2951</td>
                    <td className="tableStyle">Software Development Immersive Industry Experience - II</td>
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
                    <td className="tableStyle">DATA2251</td>
                    <td className="tableStyle">Advanced Database Concepts</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2453</td>
                    <td className="tableStyle">Mobile Application Development II</td>
                    <td className="tableStyle">6</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">SODV2952</td>
                    <td className="tableStyle">Software Development Immersive Industry Experience - III</td>
                    <td className="tableStyle">3</td>
                    </tr>
                <tr className="tableStyle">
                    <td className="tableStyle">TECH2451</td>
                    <td className="tableStyle">Cloud Development</td>
                    <td className="tableStyle">3</td>
                    </tr>
            </table>
        </div>
    );
}

export default SoftwareDevelopmentApprenticeProgram;