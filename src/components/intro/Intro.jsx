import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

import './Intro.css';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        'Marketing Manager',
        'Full Stack Developer',
        'Product Marketer',
        'Brand Marketer',
        'Web Developer',
      ],
    });
  }, []);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">
            <span>Amit</span> Bhalla
          </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                I am a... <span className="i-designation" ref={textRef}></span>
              </div>
            </div>
          </div>
          <div className="i-desc">
            Marketing and Sales executive with 16+ years of experience.
            Passionate about Marketing, Customer Service, Branding, and Business
            Strategy.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="i-bg2"></div>
        <div className="i-img"></div>
      </div>
       
    </div>
  );
};

export default Intro;