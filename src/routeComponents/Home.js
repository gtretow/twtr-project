import React from "react";
import { Link } from "react-router-dom";

function Home() {
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

export default Home;
