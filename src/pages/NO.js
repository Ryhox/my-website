import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import velocity from 'velocity-animate';
import "./css/mainstyles.css";
import "./css/no.css";

$.fn.velocity = velocity;

function FourOhFourForm() {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [showKittens, setShowKittens] = useState(false);
  const inputRef = useRef(null);
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
      displayKittens();
    }
    else if(inputValue.toLowerCase() === 'help') {
      message = "nga";
    } 
    else if(inputValue.toLowerCase() === 'kittens') {
      
    } 
    else if(inputValue.toLowerCase() === 'kittens') {
      
    } 
    else if(inputValue.toLowerCase() === 'kittens') {
      
    } 
    else if(inputValue.toLowerCase() === 'kittens') {
      
    } 
    else {
      resetForm();
    }
  };

  const resetForm = (withKittens = false) => {
    message = "Sorry that command is not recognized.";
    if (withKittens) {
      message = "Huzzzzzah Kittehs!";
      setShowKittens(false);

    }
    setOutput('');
    setInputValue('');
    $('.new-output').removeClass('new-output');
    $('.terminal').append(`<p class="prompt">${message}</p><p class="prompt output new-output"></p>`);
    $('.new-output').velocity('scroll', { duration: 100 });
  };

  const displayKittens = () => {
    setShowKittens(true);
    const kittensHTML = `
      <div class='kittens'>
        {/* Kitten ASCII art will be injected here */}
      </div>
    `;

    $('.terminal').append(kittensHTML);
    const lines = $('.kittens p');

    $.each(lines, function(index, line){
      setTimeout(function(){
        $(line).css({ "opacity": 1 });
        textEffect($(line));
      }, index * 100);
    });

    $('.new-output').velocity('scroll', { duration: 100 });


  };

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

      <div className="terminal">
        <p className="prompt">The page you requested cannot be found right meow. Try typing 'kittens'.</p>
        <p className="prompt output new-output">{output}</p>
      </div>

      {showKittens && (
        <div className="kittens">
          {/* Kitten ASCII art will be injected here */}
        </div>
      )}
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
