import React, { useState, useEffect } from 'react';
import "./css/mainstyles.css";
import "./css/games.css";

function Games() {
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
                        <div className="welcome">Games</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Games;
