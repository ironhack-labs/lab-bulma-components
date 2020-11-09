import React from "react";

// Css for Form
import "./Hero.css";

// Components to Hero
import Form from "./Form";
import CoolButton from "./CoolButton";

function Hero() {
  return (
    <div className="hero_cta">
      <h1>
        LEARN <span>BULMA</span> AND CREATE <span>AWESOME</span> WEBSITES
      </h1>
      <div>
        <Form />
      </div>
      <div>
        <CoolButton />
      </div>
    </div>
  );
}

export default Hero;
