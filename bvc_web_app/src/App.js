// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
// import SoftwareDevelopmentProgram from './components/software-development-program/SoftwareDevelopmentProgram.component';
import SoftwareDevelopmentProgramRoute from "./routes/software-development-program/SoftwareDevelopmentProgram";

// import Homepage from "./components/homepage/Homepage.component";


function App() {
  return (
    <div className="App">
        <SoftwareDevelopmentProgramRoute/>
        {/* <Homepage /> */}
    </div>
    // <div>
    //   <Routes>
    //     <Route path="Diploma" element={<SoftwareDevelopmentProgramRoute/>}/>
    //   </Routes>
    // </div>
  );
}

export default App;
