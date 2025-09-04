// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white py-4 text-center">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Eat Wise</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
