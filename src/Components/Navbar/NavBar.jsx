import React from "react";
import { useState } from "react";
import Links from "../../Components/Navbar/Links";
import TapSound from "../../assets/Music/HoverSound.mp3"
import useSound from "use-sound";

const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(false);

  const handleToggle = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className="text-slate-50">
      <span className="material-symbols-outlined cursor-pointer" onClick={handleToggle}>
        {lightMode ? "light_mode" : "dark_mode"}
      </span>
    </div>
  );
};

const Navbar = ({ links }) => {

  // On hover sound effect
  const [play, { stop }] = useSound(TapSound);

  return(
    <section className="flex justify-evenly items-center h-auto w-screen bg-black fixed z-10">
      <div>
        <p className="text-2xl font-bold text-slate-50">NewsPatrol</p>
      </div>
      <div className="flex">
        <ul className="flex">
          {
            links.map((temp, index) => (
              <li key={index} className="m-3 cursor-pointer" onMouseEnter={() => play()} onMouseLeave={() => stop()}>
                <Links 
                  Link={temp.link} 
                  Icon={temp.icon} 
                  Url={temp.url} 
                />
              </li>
            ))
          }
        </ul>
      </div>
      <ToggleButton />
    </section>
  );
};

export default Navbar;