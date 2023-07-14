// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// function App(){
//   return (
//   <div>
//   <h1 className="bg-primary">React</h1>
//   <p>Hello all!</p>
//   </div>
//   // <></>
//   )
// }
// export default App


import React from 'react';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import SelectList from "./Components/SelectList";

function App() {
  return(
    <>
    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
  
    </Routes>
   </BrowserRouter>

    </>
  )
}
export default App