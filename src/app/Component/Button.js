// components/Button.js
import React from "react";

const Button = ({ text, onClick, color, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "18px 24px",
        width: "100%",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "700",
        borderRadius: "4px",
        pointerEvents: disabled ? "none" : "auto",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
