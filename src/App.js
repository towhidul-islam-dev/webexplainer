import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { Homepage,Navbar,Technology,About,Contact } from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='technology' element={<Technology />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App;
