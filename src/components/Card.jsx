import React from "react";

const Card = ({ img }) => {
  return (
    <div className="card m-2" style={{ width: "20rem" }}>
      <img className="card-img-top" src={img} alt="imagen de paisaje" />
    </div>
  );
};

export default Card;
