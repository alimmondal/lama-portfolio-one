import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator'],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, </h2>
          <h1>I'm Alim Mondol</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <p>
            I am the master of HTML, CSS and Javascript. I know everything
            needed to make a website function, efficient. I didn't stop with the
            web. I went beyond with most popular Javascript framework called
            React JS. I even know the deployment, server and security. I will
            give you 100% web solution..
          </p>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
