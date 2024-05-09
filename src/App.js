import React,{ useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Healthblog from './Components/Healthblog/Healthblog';
import BookingConsultation from './Components/BookingConsultation';
import SelfCheckup from './Components/SelfCheckup/SelfCheckup';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Home from './Components/Home/Home';
import Notification from './Components/Notification/Notification';

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
              <Route path='/Home' element ={<Home/>}/>
              <Route path='/BookingConsultation' element={<BookingConsultation/>}/>
              <Route path="/SelfCheckup" element={<SelfCheckup/>} />
              <Route path="/ReviewForm" element={<ReviewForm/>}/>
              <Route path="/ProfileCard" element={<ProfileCard/>}/>
              <Route path="/ReportsLayout" element={<ReportsLayout/>}/>
              <Route path="/Healthblog" element={<Healthblog/>}/>

              </Routes>
              <Notification/>
            
        </BrowserRouter>
  </div>
  );
}

export default App;
