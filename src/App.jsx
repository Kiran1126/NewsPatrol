import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/NavBar";
import About from "./Components/About/About";
import Faq from "./Components/FAQ/Faq";

// This array of objects is used for the navigation purpose
const linksArr = [
  { 
    link: 'Home',
    icon: 'home',
    url: '/Home'
  },
  {
    link: 'About',
    icon: 'support_agent',
    url: '/About'
  },
  {
    link: 'Results',
    icon: 'work',
    url: '/Result'
  },
  {
    link: 'Contact',
    icon: 'forum',
    url: '/Contact'
  }
];

const App = () => {
  return(
    <Router>
      <Navbar links={ linksArr }/>
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Banner />
              <About />
              <Faq />
              <Contact />
            </>
          }
        />
        <Route 
            path="*" 
            element={
              <h1 className="text-center text-black">404 - Page Not Found</h1>
            } 
          />
      </Routes>
    </Router>
  );
};

export default App;