// imports yay.
import React, { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import "./mainstyles.css";

// FUNCTION STARTSSS!!!
function App() {

  // some variables
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [dragDropText, setDragDropText] = useState("Drag & drop any file here");
  const [showCannotUploadMessage, setShowCannotUploadMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showImages, setShowImages] = useState(true);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [uploadsToday, setUploadsToday] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [username, setUsername] = useState("");
  const fileInputRef = useRef(null);

  // changable variables
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const MAX_UPLOADS_PER_DAY = 3;
  const COOLDOWN_PERIOD = 10;

  // firebase folder
  const imagesListRef = ref(storage, "images/");

  //loads the images from the Storage
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          const name = item.name.split("_")[0];
          setImageUrls((prev) => [...prev, { url, name }]);
        });
      });
    });

    //checks the numbers of todays Users Upload. hehe storage is not unlimited :(
    const today = new Date().toISOString().split("T")[0];
    const savedData = JSON.parse(localStorage.getItem("uploadData")) || {};
    if (savedData[today]) {
      setUploadsToday(savedData[today]);
    }
  }, []);

  // Update the upload data in the local storage
  const updateUploadData = () => {
    const today = new Date().toISOString().split("T")[0];
    const savedData = JSON.parse(localStorage.getItem("uploadData")) || {};
    savedData[today] = (savedData[today] || 0) + 1;
    localStorage.setItem("uploadData", JSON.stringify(savedData));
    setUploadsToday(savedData[today]);
  };

  // Cooldown starts
  const startCooldown = () => {
    setCooldownActive(true);
    setCooldownSeconds(COOLDOWN_PERIOD);
    const interval = setInterval(() => {
      setCooldownSeconds((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setCooldownActive(false);
          setErrorMessage("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // The Handling 
  const uploadFile = () => {
    if (!imageUpload) {
      setErrorMessage("Please select a file first.");
      setShowCannotUploadMessage(true);
      return;
    }

    if (imageUpload.size > MAX_FILE_SIZE) {
      setErrorMessage("File size exceeds 5 MB limit.");
      setShowCannotUploadMessage(true);
      return;
    }

    if (uploadsToday >= MAX_UPLOADS_PER_DAY) {
      setErrorMessage("You have reached the maximum number of uploads for today.");
      setShowCannotUploadMessage(true);
      return;
    }

    if (cooldownActive) {
      setErrorMessage(`Please wait for the cooldown period to end before uploading again. (${cooldownSeconds}s)`);
      setShowCannotUploadMessage(true);
      return;
    }

    if (!username) {
      setErrorMessage("Please enter your username.");
      setShowCannotUploadMessage(true);
      return;
    }

    startCooldown();

    const imageRef = ref(storage, `images/${username}_${uuidv4()}_${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, { url, name: username }]);
        setImageUpload(null);
        setDragDropText("Drag & drop any file here");
        updateUploadData();
        setShowForm(false);
        setShowImages(true);
      });
    }).catch(error => {
      setErrorMessage("Failed to upload image. Please try again later.");
      setShowCannotUploadMessage(true);
    });
  };


  // the Drag and drop logic
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragDropText("Drop your file here!");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragDropText("Drag & drop any file here");
  };

  // handling events on the drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        setDragDropText("Only image files are allowed");
        setErrorMessage("Only image files are allowed.");
        setShowCannotUploadMessage(true);
      } else if (file.size > MAX_FILE_SIZE) {
        setDragDropText("File size exceeds 5 MB limit");
        setErrorMessage("File size exceeds 5 MB limit.");
        setShowCannotUploadMessage(true);
      } else {
        setImageUpload(file);
        setDragDropText("File Dropped Successfully!");
        setShowCannotUploadMessage(false);
      }
    }
  };

    // handling the same events again for Change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setDragDropText("Only image files are allowed");
        setErrorMessage("Only image files are allowed.");
        setShowCannotUploadMessage(true);
      } else if (file.size > MAX_FILE_SIZE) {
        setDragDropText("File size exceeds 5 MB limit");
        setErrorMessage("File size exceeds 5 MB limit.");
        setShowCannotUploadMessage(true);
      } else {
        setImageUpload(file);
        setDragDropText("File Dropped Successfully!");
        setShowCannotUploadMessage(false);
      }
    }
  };

    //the Visibility of the form
  const toggleFormVisibility = () => {
    setShowForm((prev) => !prev);
    setShowImages((prev) => !prev);
  };

  // The logic to make the image bigger when you click on it
  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // yeah then we got the whole ass HTML Replica
  return (
    <div className="App">
      <div className="topThing">
        <div className="websiteName">Ryhox.xyz</div>
        <div className="welcome">
          <div className="colorAqua">Pussys</div>
        </div>
      </div>
  
      <button className="button" onClick={toggleFormVisibility}>
        <i className="fa-solid fa-plus"></i>
      </button>
  
      <div className={showForm ? "form-wrapper slide-in" : "form-wrapper slide-out"}>
        <form className="form-container" encType="multipart/form-data">
          <div
            className="upload-files-container"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="drag-file-area">
              <span className="material-icons-outlined upload-icon">
                <i className="fa-solid fa-upload"></i>
              </span>
              <h3 className="dynamic-message">{dragDropText}</h3>
              <label className="label">
                or{" "}
                <span className="browse-files">
                  <input
                    type="file"
                    className="default-file-input"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <span className="browse-files-text">browse a file</span>{" "}
                  <span>from your device</span>{" "}
                </span>{" "}
              </label>{" "}
            </div>{" "}
            {imageUpload && (
              <div className="file-block">
                <div className="file-info">
                  <span className="material-icons-outlined file-icon">
                    description
                  </span>{" "}
                  <span className="file-name">{imageUpload.name}</span> |{" "}
                  <span className="file-size">
                    {(imageUpload.size / 1024).toFixed(1)} KB
                  </span>{" "}
                </div>{" "}
                <span
                  className="material-icons remove-file-icon"
                  onClick={() => {
                    setImageUpload(null);
                    setDragDropText("Drag & drop any file here");
                  }}
                >
                  delete
                </span>{" "}
              </div>
            )}{" "}
            <div className="input-container">
              <input
                type="text"
                className="username-input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="animated-button"
              onClick={uploadFile}
              disabled={cooldownActive}
            >
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <span className="text">Upload</span>
              <span className="circle"></span>
            </button>
            {showCannotUploadMessage && (
              <div className="cannot-upload-message">
                <span className="material-icons-outlined"><i className="fa-solid fa-circle-exclamation"></i></span>
                {errorMessage}
                <span
                  className="material-icons-outlined cancel-alert-button"
                  onClick={() => setShowCannotUploadMessage(false)}
                >
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            )}
            {cooldownActive && (
              <div className="cannot-upload-message">
                <span className="material-icons-outlined"><i className="fa-solid fa-circle-exclamation"></i></span>
                Please wait for the cooldown period to end before uploading again. ({cooldownSeconds}s)
              </div>
            )}
          </div>{" "}
        </form>
      </div>
  
      <div className={showImages ? "image-container show" : "image-container hide"}>
        {imageUrls.map((image, index) => (
          <div key={index} className="image-wrapper"  onClick={() => handleThumbnailClick(image.url)}>
            <img
              src={image.url}
              alt={`Image ${index}`}
              className="thumbnail"
             
            />
            <div className="image-username"><i class="fa-regular fa-user"></i> <div className="image-username-color">{image.name}</div></div>
          </div>
        ))}{" "}
      </div>{" "}
  
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full-size" />
        </div>
      )}
    </div>
  );
}

export default App;