// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Singer from "./singer";
import Bestlook from "./Look";
import Food from "./Food";
import Place from "./place";
import Actor from "./actor";
import Final from "./final";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/singer" element={<Singer />} />
        <Route path="/best_look" element={<Bestlook />} />
        <Route path="/food" element={<Food />} />
        <Route path="/place" element={<Place />} />
        <Route path="/actor" element={<Actor/>}/>
        <Route path="/final" element={<Final/>}/>
      </Routes>
    </Router>
  );
}

export default App;
