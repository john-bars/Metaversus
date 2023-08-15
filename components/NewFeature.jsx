import React from "react";

const NewFeature = ({ imgUrl, title, subtitle }) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt="icon" />
      </div>
      <h1>Title {title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default NewFeature;
