import React from "react";
import PropTypes from "prop-types";
const Useritems = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center py-2">
      <img
        src={avatar_url}
        alt="Img1"
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h4>{login}</h4>

      <a href={html_url} className="btn btn-dark py-1">
        More
      </a>
    </div>
  );
};

Useritems.propTypes = {
  user: PropTypes.object,
};
export default Useritems;
