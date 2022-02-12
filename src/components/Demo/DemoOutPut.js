import React from "react";

const DemoOutPut = (props) => {
  console.log("DemoOutPut running");
  return <p>{props.show ? "This is New!" : ""}</p>;
};

export default React.memo(DemoOutPut);
