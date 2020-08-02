import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        © {new Date().getFullYear()}, Built by{" "}
        <a
          href="https://github.com/cemergin/"
          style={{ textDecoration: "none" }}
        >
          Cem Ergin
        </a>
      </div>
      <div>
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/cemergin/Trivia-Fighter-Web"
        >
          Github Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;
