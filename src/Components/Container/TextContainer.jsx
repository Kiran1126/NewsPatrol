const TextContainer = (props) => {
  return (
    <div className={`border-box flex flex-col flex-wrap justify-evenly items-start text-left max-w-80 max-h-96 p-5 rounded-xl gap-4 bg-slate-50 opacit y-85 cursor-not-allowed ${props.animation}`}>
      {props.children}
    </div>
  );
};

export default TextContainer;