import Links from "./Components/Navbar/Links";

const Navbar = ({ links }) => {
  return(
    <section className="flex h-auto w-screen overflow-hidden bg-black">
      <div>
        <p className="text-2xl font-semibold">NewsPatrol</p>
      </div>
      <div className="flex">
        <ul>
          {
            links.map((temp, index) => (
              <li className="m-3 cursor-pointer">
                <Links 
                  key={index} 
                  Link={temp.link} 
                  Icon={temp.icon} 
                  Url={temp.url}>
                </Links>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Navbar;