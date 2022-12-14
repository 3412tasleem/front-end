import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to={"/"}>product</Link>
        </li>
        <li>
          <Link to={"/add"}>add product</Link>
        </li>
        <li>
          <Link to={"/update"}>update product</Link>
        </li>
        <li>
          <Link to={"/logout"}>logout</Link>
        </li>
        <li>
          <Link to={"/profile"}>profile</Link>
        </li>
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
