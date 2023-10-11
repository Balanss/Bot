<<<<<<< HEAD
import { useState , useEffect } from 'react'

import './App.css'
import Main from './Comp/Main'
import Home from './Comp/Home/Home'
import { HashRouter,Routes ,Route } from 'react-router-dom'
import FoodBot from './Comp/FoodBot/FoodBot'


function App() {




  return (
    <div >
<HashRouter>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/foodbot' element={<FoodBot/>} />
<Route path='/main' element={<Main/>} />
<Route path='/meds' element={<Main/>} />
</Routes>
</HashRouter>

=======
import "./App.css";
import Main from "./Comp/Main";
import Home from "./Comp/Home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import FoodBot from "./Comp/FoodBot/FoodBot";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodbot" element={<FoodBot />} />
          <Route path="/main" element={<Main />} />
          <Route path="/meds" element={<Main />} />
        </Routes>
      </HashRouter>
>>>>>>> a5f11e48d7c7b3a6d08ccca5c8295f1901035008
    </div>
  );
}

export default App;

//floor rules
