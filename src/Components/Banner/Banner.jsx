import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const Banner = () => {
  const [fact, setFact] = useState(""); // Input field state
  const [result, setResult] = useState(""); // Stores API response

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Checking...");

    try {
      const response = await fetch(`${API_BASE_URL}/api/fact-check?query=${encodeURIComponent(fact)}`);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("API Response:", data); // Debugging

      // Extract textualRating if available


      // if (data && data.claims) {
      //   const textualRatings = data.claims
      //     .map(claim => claim.claimReview[0].textualRating) // Extract ratings
      //     .join(", "); // Combine if multiple ratings exist

      //     const rating = data.claims[9].claimReview[0].textualRating;

      //   setResult(rating);

      if (data && data.claims) {
        // Extract all textual ratings
        const textualRatings = data.claims.map(claim => {
          const rating = claim.claimReview[0]?.textualRating || "No Rating";
          console.log("Rating:", rating); // Log each rating
          return rating;
        });
      
        // Check if any of the ratings are "false"
        const containsFalse = textualRatings.includes("false");
      
        // Set the result based on the presence of "false"
        setResult(containsFalse ? "true" : "false");
      } else {
        console.error("Data or claims are not defined.");
      }
      
      
      // } else {
      //   setResult("True");
      // }


    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Failed to fetch result");
    }
  };

  return (
    <section className="w-screen h-[50vh] bg-[#493624] flex flex-col justify-center items-center gap-5">
      <div className="flex w-screen font-bold text-3xl gap-2 px-10">
        <p className="text-slate-50">Find your fact is</p>
        <p className="text-orange-500">true/false...</p>
      </div>
      <div className="w-screen z-10">
        <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
          <input 
            type="text" 
            placeholder="Enter Your Fact"
            value={fact}
            onChange={(e) => setFact(e.target.value)}
            className="p-4 w-3/5 rounded-xl"
          />
          <button 
            className="bg-orange-500 text-slate-50 py-5 px-10 rounded-xl font-semibold text-lg hover:bg-green-700 cursor-pointer" 
            type="submit"
          >
            Check
          </button>
        </form>
        {/* Display only the textualRating */}
        {result && (
          <p className="text-white text-lg mt-5 bg-gray-800 px-4 py-2 rounded-lg">{result}</p>
        )}
      </div>
    </section>
  );
};

export default Banner;