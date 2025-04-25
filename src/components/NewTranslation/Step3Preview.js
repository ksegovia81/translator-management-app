import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step3Preview() {
  const [documentText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus eu nisi euismod, a varius nisl semper.');
  const navigate = useNavigate();

  return (
    <div className="translation-container">
      <div className="translation-card">
        <h2>New Translation</h2>
        <div className="step-indicator">
          <div className="step completed">1. Upload Document</div>
          <div className="step completed">2. Details</div>
          <div className="step active">3. Preview</div>
          <div className="step">4. Summary</div>
        </div>

        <div className="preview-section">
          <div className="document-preview">
            <h3>Document Preview</h3>
            <div className="document-frame">
              <p>{documentText}</p>
            </div>
          </div>

          <div className="translation-options">
            <div className="form-group">
              <label>Turnaround</label>
              <select defaultValue="standard">
                <option value="standard">Standard (3-5 days)</option>
                <option value="express">Express (24-48 hours)</option>
                <option value="urgent">Urgent (12-24 hours)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Target</label>
              <div className="target-info">Word count: ~250 words</div>
            </div>
          </div>

          <div className="action-buttons">
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/new-translation/details')}
            >
              Back
            </button>
            <button 
              className="btn-primary"
              onClick={() => navigate('/new-translation/summary')}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3Preview;