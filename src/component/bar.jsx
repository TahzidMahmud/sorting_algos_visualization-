import React from "react";
const Bar = (props) => {
  return (
    <div>
      <div
        style={{
          height: props.height * 5,
          width: "10px",
          backgroundColor: "blue",
          marginLeft: "1px",
        }}
      ></div>
      <div style={{ fontSize: "10px" }}>{props.height}</div>
    </div>
  );
};
export default Bar;
