import React from "react";
import { Link } from "react-router-dom";

function LoginHome() {
  return (
    <div>
      <h1>Provi Challenge</h1>
      <p>Twitter</p>
      <div>
        <Link to="/auth/signup">Signup here!</Link>
      </div>
    </div>
  );
}

export default LoginHome;
