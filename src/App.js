
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Alert } from './components/Alert';

import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar /> 
        <Alert message="This is amazing React course" />
        <div className="container"></div>
        <Routes> {}
          <Route path="/" element={<Home />} /> {}
          <Route path="/about" element={<About />} /> {}
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
