import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="loading.... "
        style={{ width: "270px", margin: "auto", display: "block" }}
      ></img>
    </Fragment>
  );
};
export default Spinner;
