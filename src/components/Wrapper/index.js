import React from "react";


function Wrapper(props) {
  return <main className="container">{props.children}</main>;
}

export default Wrapper;
