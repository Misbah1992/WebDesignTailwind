import React from "react";

const Cards = ({ title, image, description }) => {
  return (
    <div className=" rounded-sm shadow p-8 h-72 flex flex-col justify-between" style={{backgroundColor:"#1A2126"}}>
      <img
        src={image}
        alt={title}
        className="w-full "
        style={{height:"3rem",width:"3rem"}}
      />
      <h3 className="mt-2 text-white text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <img src="../src/assets/VectorArrow.png" style={{height:"0.75rem",width:"1rem"}}/>
    </div>
  );
};

export default Cards;
