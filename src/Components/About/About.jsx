import Background from "../../assets/Photo/About.jpg";
import TextContainer from "../../Container/TextContainer";

// Array of news data
const txtArr = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et optio voluptatum dolore.",
    state: "True"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et optio voluptatum dolore.",
    state: "False"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et optio voluptatum dolore.",
    state: "True"
  }
];

const About = () => {
  return (
    <section 
      className="w-screen min-h-[50vh] flex flex-col justify-evenly items-center bg-cover bg-center bg-no-repeat px-5 md:px-10 py-10"
      style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <div>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black">
          Earlier News
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {txtArr.map((temp, index) => (
          <TextContainer 
            key={index} 
            width="max-w-xs sm:max-w-sm md:max-w-md"
            animation="transition duration-500 hover:-translate-y-3 delay-100"
          >
            <div className="flex text-lg sm:text-xl gap-2 font-bold">
              <h1 className="uppercase text-orange-500">news</h1>
              <h1>Title</h1>
            </div>
            <p className="text-base sm:text-lg font-semibold">{temp.text}</p>
            <span className="border-b-black border-b-2 w-full opacity-50"></span>
            <div className="flex w-full justify-between items-center font-bold mt-2">
              <span className="text-sm sm:text-lg text-slate-50 bg-orange-500 px-5 sm:px-7 py-2 rounded-full">
                {temp.state}
              </span>
              <p className="text-sm sm:text-lg">Verified</p>
            </div>
          </TextContainer>
        ))}
      </div>
    </section>
  );
};

export default About;