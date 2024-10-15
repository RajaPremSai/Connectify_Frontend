import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Connectify</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/guestroom");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Maintain your long distance relationships</p>
        </div>
        <div role="button" className="get_started">
          <Link to={"/auth"} className="GSlink">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
