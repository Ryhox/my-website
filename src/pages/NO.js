import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import velocity from 'velocity-animate';
import "./css/mainstyles.css";
import "./css/no.css";
import { useNavigate } from 'react-router-dom'; 


$.fn.velocity = velocity;

function FourOhFourForm() {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate(); 

  let message;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleDocumentClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    $('.new-output').text(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'kittens') {
      cmdKittens();
    }

    else {
      resetForm();
    }
  };

  const resetForm = () => {
    message = "PLEASE TYPE `KITTENS`";

    setOutput('');
    setInputValue('');
    $('.new-output').removeClass('new-output');
    $('.terminal').append(`<p class="prompt">${message}</p><p class="prompt output new-output"></p>`);
  };

  const cmdKittens = () => navigate('/');


  const textEffect = (line) => {
    const alpha = [';', '.', ',', ':', ';', '~', '`'];
    const animationSpeed = 10;
    let index = 0;
    const string = line.text();
    const splitString = string.split("");
    const copyString = splitString.slice(0);

    let emptyString = copyString.map(function(el){
      return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
    });

    emptyString = shuffle(emptyString);

    $.each(copyString, function(i, el){
      const newChar = emptyString[i];
      toUnderscore(copyString, line, newChar);

      setTimeout(function(){
        fromUnderscore(copyString, splitString, newChar, line);
      }, i * animationSpeed);
    });
  };

  const toUnderscore = (copyString, line, newChar) => {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
  };

  const fromUnderscore = (copyString, splitString, newChar, line) => {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(''));
  };

  const shuffle = (o) => {
    for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  return (
    <div>
      <form className="four-oh-four-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="404-input" 
          value={inputValue} 
          onChange={handleChange} 
          ref={inputRef} 
        />
      </form>

      <div className="wholeTerminal">

      <div className="barAbove">
        <div className="menu">
        <div class="fakeButtons fakeClose" onClick={cmdKittens}></div>
        <div class="fakeButtons fakeMinimize" onClick={cmdKittens}></div>
  <    div class="fakeButtons fakeZoom" onClick={cmdKittens}></div>

        </div>
        </div>

      <div className="terminal">
        
        <p className="prompt">The page you requested cannot be found right meow. Try typing 'kittens'.</p>
        <p className="prompt output new-output">{output}</p>
      </div>

      </div>
    </div>
  );
}

function NO() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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



            <div className="websiteName">Ryhox.xyz</div>

            <div className="welcome">
              404 Page not found...
            </div>
          </div>
        )}
      </div>

      {!loading && (
        <div className="four-oh-four">




          <FourOhFourForm />
        </div>
      )}
    </div>
  );
}

export default NO;
