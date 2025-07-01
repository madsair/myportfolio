import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <h4>{props.headOne}</h4>
      <h1>{props.headTwo}</h1>
    </div>
  );
};

export default Title;
