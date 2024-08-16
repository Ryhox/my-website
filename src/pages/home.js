import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./css/mainstyles.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Navigation functions using useNavigate
  const link1 = () => navigate('/pussy');
  const link2 = () => navigate('/aboutme');
  const link3 = () => navigate('/games');

  return (
    <div className="App">
      <div className="maincontainer">
        {loading ? (
          <div className="container">
            <div id="loading">
              <div className="cat">
                <div className="face">
                  <div className="ear-1">
                    <div className="inner-1"></div>
                  </div>
                  <div className="ear-r">
                    <div className="inner-2"></div>
                  </div>
                  <div className="eye-1">
                    <div className="eyeball"></div>
                  </div>
                  <div className="eye-r">
                    <div className="eyeball"></div>
                  </div>
                  <div className="nose">
                    <div className="l1"></div>
                    <div className="l2"></div>
                  </div>
                </div>
                <div className="body">
                  <div className="paw-1"></div>
                  <div className="paw-2"></div>
                  <div className="tail"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="header">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="stars4"></div>
            <div className="stars5"></div>

            <div className="catcontainer">
              <div className="cat2">
                <div className="face">
                  <div className="ear-1">
                    <div className="inner-1"></div>
                  </div>
                  <div className="ear-r">
                    <div className="inner-2"></div>
                  </div>
                  <div className="eye-1">
                    <div className="eyeball"></div>
                  </div>
                  <div className="eye-r">
                    <div className="eyeball"></div>
                  </div>
                  <div className="nose">
                    <div className="l1"></div>
                    <div className="l2"></div>
                  </div>
                </div>
                <div className="body">
                  <div className="paw-1"></div>
                  <div className="paw-2"></div>
                  <div className="tail"></div>
                </div>
              </div>
            </div>

            <div className="catcontainer2">
              <div className="cat3">
                <div className="face_3">
                  <div className="ear-1_3">
                    <div className="inner-1_3"></div>
                  </div>
                  <div className="ear-r_3">
                    <div className="inner-2_3"></div>
                  </div>
                  <div className="eye-1_3">
                    <div className="eyeball_3"></div>
                  </div>
                  <div className="eye-r_3">
                    <div className="eyeball_3"></div>
                  </div>
                  <div className="nose_3">
                    <div className="l1_3"></div>
                    <div className="l2_3"></div>
                  </div>
                </div>
                <div className="body_3">
                  <div className="paw-1_3"></div>
                  <div className="paw-2_3"></div>
                  <div className="tail_3"></div>
                </div>
              </div>
            </div>

            <div className="catcontainer3">
              <div className="cat4">
                <div className="face_4">
                  <div className="ear-1_4">
                    <div className="inner-1_4"></div>
                  </div>
                  <div className="ear-r_4">
                    <div className="inner-2_4"></div>
                  </div>
                  <div className="eye-1_4">
                    <div className="eyeball_4"></div>
                  </div>
                  <div className="eye-r_4">
                    <div className="eyeball_4"></div>
                  </div>
                  <div className="nose_4">
                    <div className="l1_4"></div>
                    <div className="l2_4"></div>
                  </div>
                </div>
                <div className="body_4">
                  <div className="paw-1_4"></div>
                  <div className="paw-2_4"></div>
                  <div className="tail_4"></div>
                </div>
              </div>
            </div>

            <div className="websiteName">Ryhox.xyz</div>


            <div className="welcome">
          A Site by <div className="colorAqua">Ryhox</div>
        </div>

        <div className="selections">
          <div className="selection" onClick={link1}>
            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Pussy</span>
              <span className="circle"></span>
            </button>
          </div>
          <div className="selection" onClick={link2}>
            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">About</span>
              <span className="circle"></span>
            </button>
          </div>
          <div className="selection" onClick={link3}>
            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Games</span>
              <span className="circle"></span>
            </button>
          </div>
        </div>

        <div className="footer_LOL-feet">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=message@ryhox.xyz" style={{ textDecoration: 'none' }}>
            <div className="tooltip-container">
              <span className="tooltip">message@ryhox.xyz</span>
              <div className="hi">say hi!</div>
            </div>
          </a>
        </div>
      </div>
    )}
  </div>
</div>
  );
}

export default Home;

