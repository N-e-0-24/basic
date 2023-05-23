import React from 'react'
import {Aboutus,Contactus,Layout} from "../Route"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Nopage,Thank} from "../components"
const Abc = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path="/contactUs" element={<Contactus />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/thankYou" element ={<Thank/>}/>
          
      </Routes>
    </Router>
    </div>
  )
}

export default Abc;
