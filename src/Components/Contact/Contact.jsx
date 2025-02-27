import React from 'react';
import Image from '../../assets/Photo/Contact_Hack.png';
import SocialLinks from '../../Components/Contact/SocialLinks';

const Contact = ({ icon }) => (
  <footer className="h-[40vh] w-screen flex flex-col justify-evenly bg-black text-[#DB945F]">
    <p className='text-orange-500 text-5xl font-extrabold text-center'>Contact Us</p>
    <p className='text-xl font-semibold text-center'>You can connect with us on these social sites and get regular updates on the facts.</p>
    <div className="flex justify-between items-center px-10">
      <div className="flex justify-start items-center">
        <h1 className="text-6xl font-semibold">NewsPatroL</h1>
        <img src={Image} className="h-40 w-40 mix-blend-screen" alt="NewsPatroL-logo" />
      </div>
      <div>
        <ul className="flex m-5">
          {
            icon.map((icon, index) => (
              <SocialLinks key={index} urls={icon.url} networks={icon.network}></SocialLinks>
            ))
          }
        </ul>
      </div>
    </div>
  </footer>
);

export default Contact;
