import {} from "react";
import "../App.css";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function About() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h2>About</h2>
      <p>
        Thanks for your interest in my new application, fashioned on Britain's
        longest running game show, Countdown. Please visit my{" "}
        <a href="https://github.com/jrfiii">Github</a> or check out my{" "}
        <a href="https://www.linkedin.com/in/robertfrankiii/">LinkedIn</a> for
        more information about me!
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to go to documentation about these
        technologies.
      </p>
    </div>
  );
}

export default About;
