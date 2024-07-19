import React, { useState, useEffect } from 'react';
import "./css/mainstyles.css";
import "./css/aboutme.css";
import badge1 from './pics/badge1.png';
import badge2 from './pics/badge2.png';
import badge3 from './pics/badge3.png';
import banner from './pics/banner.png';
import avatar from './pics/fufuee.png';



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
                  <img src={banner} alt="Banner" className="bannerpic" />
                  </div>
                  <img src={avatar} alt="avatar" className="avatar"/>
                  <div className="username">@Ryhox</div>

                  <div className="badges">
                  <img src={badge1} alt="Badge 1" />
                  <img src={badge2} alt="Badge 2" />
                  <img src={badge3} alt="Badge 3" />
                  </div>

                  <div className="info">
                    <div className="bio">
                      UwU - Some socials hehe Onlyfans coming soon.
                    </div>
                    <div className="social-container">
      <ul className="socials">
        <li className="icon-content">
          <a
            className="link"
            data-social="spotify"
            aria-label="Spotify"
            href="https://www.spotify.com/"
          >
            <svg viewBox="0 0 100 100" version="1.1">
              <path
                fill="currentColor"
                d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
              ></path>
            </svg>
          </a>
          <div className="tooltip">Spotify</div>
        </li>
        <li className="icon-content">
          <a
            className="link"
            data-social="discord"
            aria-label="Discord"
          >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 640 512"
      fill="currentColor"
      stroke="currentColor"
    >
      <path
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      ></path>
            </svg>
          </a>
          <div className="tooltip">@ryhox</div>
        </li>
        <li className="icon-content">
          <a
            className="link"
            data-social="steam"
            aria-label="Steam"
            href="https://steamcommunity.com/id/Ryhox/"
          >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-steam"
        viewBox="0 0 16 16"
      >
        <path
          d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"
        ></path>
        <path
          d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"
        ></path>
            </svg>
          </a>
          <div className="tooltip">Steam</div>
        </li>
        
                    </ul>
                    </div>

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
