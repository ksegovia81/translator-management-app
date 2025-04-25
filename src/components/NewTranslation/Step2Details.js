import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step2Details() {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [documentType, setDocumentType] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (sourceLanguage && targetLanguage && documentType) {
      navigate('/new-translation/preview');
    }
  };

  return (
    <div className="translation-container">
      <div className="translation-card">
        <h2>New Translation</h2>
        <div className="step-indicator">
          <div className="step completed">1. Upload Document</div>
          <div className="step active">2. Details</div>
          <div className="step">3. Preview</div>
          <div className="step">4. Summary</div>
        </div>

        <div className="translation-details">
          <div className="form-group">
            <label>Source Language</label>
            <select 
              value={sourceLanguage} 
              onChange={(e) => setSourceLanguage(e.target.value)}
              required
            >
              <option value="">Select a language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
            </select>
          </div>

          <div className="form-group">
            <label>Target Language</label>
            <select 
              value={targetLanguage} 
              onChange={(e) => setTargetLanguage(e.target.value)}
              required
            >
              <option value="">Select a language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
            </select>
          </div>

          <div className="form-group">
            <label>Document Type</label>
            <select 
              value={documentType} 
              onChange={(e) => setDocumentType(e.target.value)}
              required
            >
              <option value="">Select document type</option>
              <option value="general">General Translation</option>
              <option value="legal">Legal Document</option>
              <option value="medical">Medical Document</option>
              <option value="technical">Technical Document</option>
              <option value="business">Business Document</option>
              <option value="academic">Academic Paper</option>
            </select>
          </div>

          <div className="action-buttons">
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/new-translation/upload')}
            >
              Back
            </button>
            <button 
              className="btn-primary"
              onClick={handleNext}
              disabled={!sourceLanguage || !targetLanguage || !documentType}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2Details;