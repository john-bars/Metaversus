const NewFeature = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex flex-col flex-1 sm:max-w-[250px] min-w-[210px] sm:items-start items-center">
      <div className="flex justify-center items-center w-[70px] h-[70px] rounded-3xl bg-sky-800 opacity-80">
        <img src={imgUrl} alt="icon" className="oject-contain w-1/2 h-1/2" />
      </div>
      <div className="flex flex-col items-center sm:place-items-baseline ">
        <h1 className="mt-7 font-bold text-2xl leading-7 text-slate-200">
          Title {title}
        </h1>
        <p className="flex-1 mt-4 font-normal text-lg text-slate-300 leading-8">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default NewFeature;
