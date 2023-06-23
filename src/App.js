import Home from "./routes/Home";
import Coursework from "./routes/Coursework";
import Projects from "./routes/Projects";

import './Default.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </>
  );
}
export default App;