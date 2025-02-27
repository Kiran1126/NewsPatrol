import Background from '../../assets/Photo/About.jpg';

// FAQ Data
const faqArr = [
  {
    summary: "WHAT IS NEWSPATROL?",
    details: "The Fake News Detector is an AI-powered web application designed to analyze and verify the authenticity of news articles, images, and videos. By leveraging Google Fact Check API, machine learning models, and real-time content analysis, the system helps users determine whether the information they encounter is credible or misleading."
  },
  {
    summary: "WHY WE USE NEWSPATROL?",
    details: "Fact-checking is essential to verify the accuracy of information, prevent the spread of misinformation, and ensure people make informed decisions. It helps maintain credibility in journalism, combats fake news, and promotes trust in reliable sources."
  },
  {
    summary: "How does the NewsPatrol work?",
    details: "It uses machine learning models and fact-checking APIs (like Google Fact Check API) to analyze the credibility of news articles."
  },
  {
    summary: "Is this tool free to use?",
    details: "Yes, it is free to use. However, advanced features (e.g., deeper AI analysis) may require an API key or subscription in the future."
  },
  {
    summary: "How accurate is the NewsPatrol?",
    details: "The accuracy depends on the ML model's training data and fact-checking sources. The AI model is continuously improved for better detection."
  },
  {
    summary: "Can this tool be integrated into other platforms?",
    details: "Yes, the API can be integrated into websites, mobile apps, or browser extensions."
  },
  {
    summary: "What features will be added in the future?",
    details: "Browser extension for real-time news verification, Multilingual support & Improved deepfake detection."
  },
];

const Faq = () => {
  return (
    <section 
      className="w-screen min-h-screen flex flex-col items-center py-16 px-5 md:px-10"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <div>
        <p className="text-4xl md:text-5xl font-bold text-center text-black">FAQ</p>
      </div>
      <div className="flex flex-col w-full max-w-4xl mt-10 space-y-4">
        {faqArr.map((temp, index) => (
          <details key={index} className="bg-orange-500 rounded-xl overflow-hidden shadow-lg transition duration-300">
            <summary className="bg-black text-slate-50 p-4 cursor-pointer font-semibold text-lg uppercase rounded-t-xl hover:bg-gray-800 transition duration-300">
              {temp.summary}
            </summary>
            <p className="font-semibold p-4 bg-orange-300">{temp.details}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;