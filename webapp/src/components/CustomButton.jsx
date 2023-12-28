import React from "react";

const CustomButton = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
  };
  return <button className="btn btn-secondary text-white rounded-1" onClick={onClickHandler}>{props.title}</button>;
};

export default CustomButton;
