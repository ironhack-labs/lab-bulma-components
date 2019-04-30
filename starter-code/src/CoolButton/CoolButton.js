import React from "react";
// import "./CoolButton.css";

export default function CoolButton({ className, text }) {
  return (
    <a className={className} href="/">
      {text}
    </a>
  );
}
