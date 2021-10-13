import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

import Me from '../../img/amit_adobespark.png';
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
          <p className="i-desc">
            Marketing and Sales executive with 16+ years of experience.
            Passionate about Marketing, Customer Service, Branding, and Business
            Strategy. And, Full-stack developer by hobby with knowledge of
            Python, JavaScript, Django, Django REST Framework, React, SQL,
            HTML5, CSS3, MySQL, Docker, Adobe XD and Photoshop.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="black"
          className="i-scroll"
        >
          <path d="M32,41v18c0,9.9,8.1,18,18,18c9.9,0,18-8.1,18-18V41c0-9.9-8.1-18-18-18C40.1,23,32,31.1,32,41z M50,27c7.7,0,14,6.3,14,14  v18c0,7.7-6.3,14-14,14s-14-6.3-14-14V41C36,33.3,42.3,27,50,27z" />
          <path d="M50,44c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2s-2,0.9-2,2v6C48,43.1,48.9,44,50,44z" />
          <path d="M48.6,92.4C49,92.8,49.5,93,50,93s1-0.2,1.4-0.6l5-5c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0L50,88.2l-3.6-3.6  c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8L48.6,92.4z" />
          <path d="M48.6,7.6l-5,5c-0.8,0.8-0.8,2,0,2.8C44,15.8,44.5,16,45,16s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6C54,15.8,54.5,16,55,16  s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-5-5C50.6,6.8,49.4,6.8,48.6,7.6z" />
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="i-bg2"></div>
        <img src={Me} alt="Amit Bhalla" className="i-img" />
      </div>
       
    </div>
  );
};

export default Intro;
