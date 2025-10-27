// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";

import SoftwareDevelopmentProgramRoute from "./routes/software-development-program/SoftwareDevelopmentProgram";
import SoftwareDevelopmentApprenticeProgramRoute from './routes/software-development-apprentice-program/SoftwareDevelopmentApprenticeProgram';
import SoftwareDevelopmentPostDiplomaRoute from './routes/software-development-post-diploma/SoftwareDevelopmentPostDiploma';

import Home from './routes/home/home.component';

function App() {
  return (
    <div className="App">
        <SoftwareDevelopmentProgramRoute/>
        {/* <SoftwareDevelopmentApprenticeProgramRoute/> */}
        {/* <SoftwareDevelopmentPostDiplomaRoute/> */}
        {/* <Home/> */}
    </div>
  );
}

export default App;
