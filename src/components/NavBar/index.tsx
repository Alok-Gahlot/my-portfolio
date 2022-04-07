import React from "react";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Routing from "../Routing/Routing";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function index() {
  return (
    <div className="parentContainer">
      {/* name container */}
      <Logo />

      {/* Navigation Container */}
      <Routing />

      {/* Spcial media */}
<SocialMedia/>

    </div>
  );
}
