import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="inputText"
        placeholder="Search your image"
        className="form-control w-100 mt-2 mb-2"
      />

      <button className="btn btn-outline-success block w-100" type="submit">
        <span className="material-symbols-outlined ">search</span>
      </button>
    </form>
  );
};

export default Form;
