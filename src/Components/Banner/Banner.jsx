import NewsPaper from '../../assets/Photo/Newspaper.png';

const Banner = () => {
  return (
    <section className="relative w-screen h-[50vh] bg-[#493624] flex flex-col justify-center items-center gap-5 px-5 md:px-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full flex justify-end items-center pointer-events-none">
        <img 
          src={NewsPaper} 
          className="h-[250px] w-[200px] sm:h-[350px] sm:w-[300px] md:h-[450px] md:w-[400px] lg:h-[550px] lg:w-[500px] mt-20 mr-5 sm:mr-20 opacity-80"
          alt="newspaper" 
        />
      </div>
      <div className="flex flex-wrap justify-center font-bold text-2xl sm:text-3xl gap-2 px-4 text-center z-10">
        <p className="text-slate-50">Find your fact is</p>
        <p className="text-orange-500">true/false...</p>
      </div>
      <div className="w-full z-10">
        <form action="#" method="post" className="flex flex-col sm:flex-row gap-1 justify-center items-center w-full">
          <input 
            type="text" 
            placeholder="Enter Your Fact" 
            className="p-4 w-4/5 sm:w-3/5 rounded-xl text-lg font-semibold"
          />
          <button 
            className="bg-orange-500 text-slate-50 py-3 sm:py-4 px-6 sm:px-10 rounded-xl font-semibold text-lg hover:bg-green-700 cursor-pointer transition"
            type="submit"
          >
            Check
          </button>
        </form>
      </div>
    </section>
  );
};

export default Banner;