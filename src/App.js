import React,{ useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Healthblog from './Components/Home/Home';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import BookingConsultation from './Components/BookingConsultation';


function App() {
  return (
  <div className='App'>
  <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/InstantConsultation" element={<InstantConsultation/>} />
              <Route path='/Home' element ={<Healthblog/>}/>
              <Route path='/BookingConsultation' element={<BookingConsultation/>}/>

              </Routes>
            
        </BrowserRouter>
  </div>
  );
}

export default App;
