import React from "react";

const Card = ({ img }) => {
    return (
        <div className="card m-1 " style={{ width: "18rem" }}>
            <img className="card-img-top" src={img} alt="imagen de paisaje" />
        </div>
    );
};

export default Card;
