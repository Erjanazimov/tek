import React from "react";
import "./global.css";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Students from "./components/Students/Students";
import Glavnaya from "./components/Glavnaya/Glavnaya";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
      <div>
          <Router>
              <Navigation/>
              <Routes>
                  <Route path='/' element={<Glavnaya />} />
                  <Route path='/students' element={<Students />} exact/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
