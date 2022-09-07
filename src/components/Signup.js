import React from "react";
const Signup = () => {
  return (
    <div className="signup">
      <label>Register</label>
      <div className="inputbox">
        <input type="text" placeholder="Name" className="fields" />
        <input type="text" placeholder="Email" className="fields" />
        <input type="password" placeholder="Password" className="fields" />
        <br />
        <button type="button">SignUp</button>
      </div>
    </div>
  );
};
export default Signup;
