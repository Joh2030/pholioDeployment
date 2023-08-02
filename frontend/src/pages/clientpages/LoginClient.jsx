import React from "react";
import LoginClientNavbar from "../../components/client/LoginClientNavbar";
import ClientLogin from "../../components/client/ClientLogin";
import Schnecken from "../../assets/SchneckenVB.jpg";
import "../../components/client/client.css";

const LoginClient = () => {
  return (
    <>
      <LoginClientNavbar />
      <div className="image-container">
        <img className="cloginimg" src={Schnecken} alt="Background" />
      </div>
      <div className="clogin-container">
        <ClientLogin />
      </div>
    </>
  );
};

export default LoginClient;
