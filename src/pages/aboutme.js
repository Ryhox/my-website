import React, { useState, useEffect } from 'react';
import "./css/mainstyles.css";
import "./css/aboutme.css";

function AboutMe() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      <div className="main-container">
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
              <div className="coloraqua">About Me</div>
            </div>

            <div className="outercon">
              <div className="containerabout">
                <div className="profile">
                  <div className="banner">
                    <img src={require("./pics/banner.png").default} alt="Banner" className="banner-pic" />
                  </div>
                  <img src={require("./pics/fufuee.png").default} alt="Avatar" className="avatar" />
                  <div className="username">Ryhox</div>

                  <div className="badges">
                    <img src={require("./pics/badge1.png").default} alt="Badge 1" />
                    <img src={require("./pics/badge2.png").default} alt="Badge 2" />
                    <img src={require("./pics/badge3.png").default} alt="Badge 3" />
                  </div>

                  <div className="info">
                    <div className="bio">
                      <br />I made this site because I was bored. Don't expect too much. <br />
                    </div>

                    <ul className="socials">
                      <li className="icon-content">
                        <a aria-label="Discord" data-social="discord">
                          <div className="filled"></div>
                          <svg viewBox="0 0 16 16" className="bi bi-discord" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.018ZM5.665 10.37c-.789 0-1.448-.724-1.448-1.612 0-.889.637-1.617 1.448-1.617.812 0 1.46.736 1.448 1.617 0 .888-.637 1.612-1.448 1.612Zm4.671 0c-.788 0-1.448-.724-1.448-1.612 0-.889.637-1.617 1.448-1.617.812 0 1.46.736 1.448 1.617 0 .888-.636 1.612-1.448 1.612Z"/>
                          </svg>
                        </a>
                      </li>
                      <li className="icon-content">
                        <a aria-label="GitHub" data-social="github">
                          <div className="filled"></div>
                          <svg viewBox="0 0 16 16" className="bi bi-github" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.55 7.55 0 0 1 2.01-.27c.68 0 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
