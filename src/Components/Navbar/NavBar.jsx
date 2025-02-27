import React, { useState } from "react";
import Links from "../../Components/Navbar/Links";
import TapSound from "../../assets/Music/HoverSound.mp3";
import useSound from "use-sound";
import { FiMenu, FiX } from "react-icons/fi";

const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(false);

  const handleToggle = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className="flex text-slate-50 cursor-pointer gap-2" onClick={handleToggle}>
      <span className="material-symbols-outlined">
        {lightMode ? "light_mode" : "dark_mode"}
      </span>
      <p className="font-semibold">Switch Mode</p>
    </div>
  );
};

const Navbar = ({ links }) => {
  const [play, { stop }] = useSound(TapSound);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-10 font-sans">
      <div className="flex justify-between items-center h-16 px-5 md:px-10">
        <p className="text-2xl font-bold text-slate-50">NewsPatrol</p>
        <ul className="hidden md:flex space-x-6">
          {links.map((temp, index) => (
            <li key={index} className="cursor-pointer" onMouseEnter={() => play()} onMouseLeave={() => stop()}>
              <Links Link={temp.link} Icon={temp.icon} Url={temp.url} />
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <ToggleButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-50 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black w-full flex flex-col items-center py-5 space-y-4">
          {links.map((temp, index) => (
            <div key={index} className="cursor-pointer text-white text-lg" onMouseEnter={() => play()} onMouseLeave={() => stop()}>
              <Links Link={temp.link} Icon={temp.icon} Url={temp.url} />
            </div>
          ))}
          <ToggleButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;