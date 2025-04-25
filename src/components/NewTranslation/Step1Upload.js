import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step1Upload() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleNext = () => {
    if (file) {
      // In a real app, you might upload the file here
      navigate('/new-translation/details');
    }
  };

  return (
    <div className="translation-container">
      <div className="translation-card">
        <h2>New Translation</h2>
        <div className="step-indicator">
          <div className="step active">1. Upload Document</div>
          <div className="step">2. Details</div>
          <div className="step">3. Preview</div>
          <div className="step">4. Summary</div>
        </div>

        <div className="upload-section">
          <div 
            className={`file-drop-area ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <p>Drag & Drop Files Here</p>
            <div className="upload-button-container">
              <label className="btn-secondary">
                Browse Files
                <input type="file" onChange={handleFileChange} hidden />
              </label>
            </div>
          </div>

          {file && (
            <div className="selected-file">
              <p>Selected file: <strong>{file.name}</strong>, {Math.round(file.size / 1024)} KB</p>
            </div>
          )}

          <div className="action-buttons">
            <button className="btn-secondary">Cancel</button>
            <button 
              className="btn-primary"
              onClick={handleNext}
              disabled={!file}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1Upload;