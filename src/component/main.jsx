import React from "react";
import Bar from "./bar";
import { useState } from "react";

const Main = () => {
  const arr = [10, 20, 40, 30, 50, 70, 60, 90, 80, 100];
  const [newarr, setNewarr] = useState(arr);
  for (var i = 0; i < newarr.length - 9; i++) {
    // Last i elements are already in place
    for (var j = 0; j < newarr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (newarr[j] > newarr[j + 1]) {
        // If the condition is true then swap them
        var temp = newarr[j];
        newarr[j] = newarr[j + 1];
        newarr[j + 1] = temp;
      }
      console.log(arr);
      //   if (arr !== newarr) {
    //   setNewarr(arr);
      //   }
    }
  }
  return (
    <div style={{ display: "flex" }}>
      {newarr.map((item, index) => (
        <Bar key={index} height={item}></Bar>
      ))}
    </div>
  );
};
export default Main;
