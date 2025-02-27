import React from 'react';
import Image from '../../assets/Photo/Contact_Hack.png';
import SocialLinks from '../../Components/Contact/SocialLinks';

const Contact = ({ icon }) => (
  <footer className="w-screen bg-black text-[#DB945F] flex flex-col items-center py-10 px-5 md:px-10">
    <p className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
      Contact Us
    </p>
    <p className="text-base sm:text-lg md:text-xl font-semibold text-center max-w-3xl mt-2">
      You can connect with us on these social sites and get regular updates on the facts.
    </p>
    <div className="w-full flex flex-col md:flex-row justify-between items-center mt-6 md:mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">NewsPatroL</h1>
        <img 
          src={Image} 
          className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 mix-blend-screen mt-4 md:mt-0 md:ml-4" 
          alt="NewsPatroL-logo" 
        />
      </div>
      <ul className="flex flex-wrap justify-center md:justify-end gap-4 mt-6 md:mt-0">
        {icon.map((item, index) => (
          <SocialLinks key={index} urls={item.url} networks={item.network} />
        ))}
      </ul>
    </div>
  </footer>
);

export default Contact;