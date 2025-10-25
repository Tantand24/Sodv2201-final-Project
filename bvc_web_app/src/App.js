// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
// import SoftwareDevelopmentProgram from './components/software-development-program/SoftwareDevelopmentProgram.component';
import SoftwareDevelopmentApprenticeProgram from './components/homepage/software-development-apprentice-program/SoftwareDevelopmentApprenticeProgram.component';
import SoftwareDevelopmentPostDiploma from './components/software-development-post-diploma/SoftwareDevelopmentPostDiploma.component';

import SoftwareDevelopmentProgramRoute from "./routes/software-development-program/SoftwareDevelopmentProgram";
import SoftwareDevelopmentApprenticeProgramRoute from './routes/software-development-apprentice-program/SoftwareDevelopmentApprenticeProgram';
import SoftwareDevelopmentPostDiplomaRoute from './routes/software-development-post-diploma/SoftwareDevelopmentPostDiploma';

// import Homepage from "./components/homepage/Homepage.component";


function App() {
  return (
    <div className="App">
        <SoftwareDevelopmentProgramRoute/>
        {/* <SoftwareDevelopmentApprenticeProgramRoute/> */}
        {/* <SoftwareDevelopmentPostDiplomaRoute/> */}
    </div>
    // <div>
    //   <Routes>
    //     <Route path="Diploma" element={<SoftwareDevelopmentProgramRoute/>}/>
    //   </Routes>
    // </div>
  );
}

export default App;
