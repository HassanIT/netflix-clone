import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  // Using useState to initilize an veriable in react
  const [show, handleShow] = useState(false);

  const transitionNavBav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // Because the dependency is empty, code runs when the component mounts.
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBav);

    // Clean up to remove the event listener after the component mounts.
    return () => window.removeEventListener("scroll", transitionNavBav);
  }, []);

  return (
    // The balck nav bar only occurs when show is true
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt="netflix spelled out logo in red"
        />

        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="netflix default avatar logo in teal colour"
        />
      </div>
    </div>
  );
}

export default Nav;
