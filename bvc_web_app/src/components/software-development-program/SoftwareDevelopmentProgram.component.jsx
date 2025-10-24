import React from "react";
import { useState } from "react";

function SoftwareDevelopmentProgram() {
    return (
        <div>
            <h1>Software Development Diploma</h1>
            <h2>School of Technology</h2>
            <h3>Program Length: 4 Terms</h3>

            <p>Gain practical experience in the cycles of software development through hands-on learning and real projects. 
                You'll gain an understanding of industry standards of planning, developing, and quality assurance testing. </p>

            <p>You'll learn the fundamentals of computer logic, giving you a solid foundation in applying programming skills in a variety of situations. 
                You'll also becoming familiar with emerging topics like user experience (UX) and the internet of things.</p>
        
            <h2>Available Intakes</h2>
            <p>January 2026</p>
            <p>September 2026</p>

            <h2>Tuition and fees</h2>

            <p>Domestic Students</p>
            <table>
                <tr>
                    <th>Term</th>
                    <th>Tuition fees</th>
                    <th>Additional fees</th>
                    <th>Total fees</th>
                    </tr>
                <tr>
                    <td>Term 1</td>
                    <td>$3,880</td>
                    <td>$605</td>
                    <td>$4,485</td>
                    </tr>
                <tr>
                    <td>Term 2</td>
                    <td>$3,976</td>
                    <td>$564</td>
                    <td>$4,540</td>
                    </tr>
                <tr>
                    <td>Term 3</td>
                    <td>$3,736</td>
                    <td>$564</td>
                    <td>$4,300</td>
                    </tr>
                <tr>
                    <td>Term 4</td>
                    <td>$3,684</td>
                    <td>$605</td>
                    <td>$4,289</td>
                    </tr>
                <tr>
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td>$17,614</td>
                </tr>
            </table>

            <p>International Students</p>
            <table>
                <tr>
                    <th>Term</th>
                    <th>Tuition fees</th>
                    <th>Additional fees</th>
                    <th>Total fees</th>
                    </tr>
                <tr>
                    <td>Term 1</td>
                    <td>$9,470</td>
                    <td>$605</td>
                    <td>$10,075</td>
                    </tr>
                <tr>
                    <td>Term 2</td>
                    <td>$9,688</td>
                    <td>$564</td>
                    <td>$10,252</td>
                    </tr>
                <tr>
                    <td>Term 3</td>
                    <td>$9,470</td>
                    <td>$564</td>
                    <td>$10,034</td>
                    </tr>
                <tr>
                    <td>Term 4</td>
                    <td>$9,694</td>
                    <td>$605</td>
                    <td>$10,299</td>
                    </tr>
                <tr>
                    <td colSpan={3}>Estimated total tuition:</td>
                    <td>$40,660</td>
                </tr>
            </table>

            <h2>Courses</h2>
        </div>
    );
}

export default SoftwareDevelopmentProgram;