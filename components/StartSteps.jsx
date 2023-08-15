const StartSteps = ({ number, text }) => {
  return (
    <div className="flex flex-row justify-center items-center ">
      <div className="flex justify-center items-center w-[70px] h-[70px] rounded-3xl bg-indigo-900 ">
        <p className="font-bold text-xl text-white p-4 ">{number}</p>
      </div>
      <p className="flex-1 ml-8 font-normal text-lg text-slate-400 leading-8 ">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
