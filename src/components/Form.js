import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea row="6"placeholder="하실 말씀을 적어주세요"/>
        <button className="btn">저장</button>
      </form>
    </div>
  );
};

export default Form;
