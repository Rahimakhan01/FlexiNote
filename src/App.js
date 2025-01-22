import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import AddNote from './components/AddNote'; // Import AddNote Component

import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar /> 
          <Alert message="Welcome to FlexiNote, your note management solution!" />
          <div className="container" style={{ backgroundColor: '#ADEEE3', minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/addnote" element={<AddNote />} /> {/* Add AddNote Route */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
