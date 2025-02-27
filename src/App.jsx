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
    link: 'Faq',
    icon: 'help',
    url: '/Result'
  },
  {
    link: 'Contact',
    icon: 'forum',
    url: '/Contact'
  }
];

// This array of objects is used for the Social Madia links
const socialLinks = [
  {
    url: "https://www.facebook.com/kiran.samanta.7568",
    network: "facebook"
  },
  {
    url: "https://www.instagram.com/i.__.am.__.kiran/?hl=en",
    network: "instagram"
  },
  {
    url: "https://www.linkedin.com/in/kiran-samanta-732604258/",
    network: "linkedin"
  },
  {
    url: "https://github.com/Kiran1126",
    network: "github"
  },
  {
    url: "https://discord.gg/hGhBXRvg",
    network: "discord"
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
              <Contact icon={socialLinks} />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <About />
          }
        />
        <Route
          path="/Faq"
          element={
            <Faq />
          }
        />
        <Route
          path="/Contact"
          element={
            <Contact icon={socialLinks} />
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