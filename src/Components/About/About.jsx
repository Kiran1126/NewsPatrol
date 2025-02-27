import Background from "../../assets/Photo/About.jpg"
import TextContainer from "../../Container/TextContainer";

// This array of objects is used for the text box section in the about section
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
  return(
    <section className="bg-local w-screen h-[50vh] flex flex-col justify-evenly" style={{ backgroundImage: `url(${Background})` }}>
      <div>
        <p className="text-5xl font-bold text-center">Earlier News</p>
      </div>
      <div className="flex justify-evenly px-10 flex-wrap">
        {
          txtArr.map((temp, index) => (
            <TextContainer key={index} width="max-w-80" animation="transition duration-500 hover:-translate-y-5 delay-100">
              <div className="flex text-xl gap-2 font-bold">
                <h1 className="uppercase text-orange-500">news</h1>
                <h1>Title</h1>
              </div>
              <p className="text-xl font-semibold">{temp.text}</p>
              <span className="border-b-black border-b-2 w-full opacity-50"></span>
              <div className="flex w-full justify-between px-8 items-center font-bold">
                <span className="text-lg text-slate-50 bg-orange-500 px-7 py-2 rounded-full">{temp.state}</span>
                <p className="text-lg">Verified</p>
              </div>
            </TextContainer>
          ))
        };
      </div>
    </section>
  );
};

export default About;