const Banner = () => {
  return (
    <section className="w-screen h-[50vh] bg-custom-dark flex flex-col justify-center items-center gap-5">
      <div className="flex w-screen font-bold text-3xl gap-2 px-10">
        <p className="text-slate-50">Find your fact is</p>
        <p className="text-orange-500">true/false...</p>
      </div>
      <div className="w-screen">
        <form action="#" method="post" className="flex gap-2 justify-center">
          <input type="text" placeholder="Enter Your Fact" 
            className="p-4 w-3/5 rounded-xl"
          />
          <button className="bg-orange-500 text-slate-50 p-5 rounded-xl font-semibold text-lg hover:bg-green-700 cursor-pointer" type="submit">Check</button>
        </form>
      </div>
    </section>
  );
};

export default Banner;