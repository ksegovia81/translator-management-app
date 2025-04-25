import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step4Summary() {
  const navigate = useNavigate();

  const orderDetails = {
    document: "Business_Proposal.pdf",
    sourceLanguage: "English (US)",
    targetLanguage: "Spanish (ES)",
    wordCount: 2500,
    price: 125.00,
    turnaround: "Standard (3-5 days)",
    deliveryEstimate: "July 15, 2023"
  };

  const handleSubmit = () => {
    // In a real app, you'd submit the order to your backend here
    navigate('/active-orders');
  };

  return (
    <div className="translation-container">
      <div className="translation-card">
        <h2>New Translation</h2>
        <div className="step-indicator">
          <div className="step completed">1. Upload Document</div>
          <div className="step completed">2. Details</div>
          <div className="step completed">3. Preview</div>
          <div className="step active">4. Summary</div>
        </div>

        <div className="summary-section">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-details">
              <div className="summary-row">
                <span className="label">Document:</span>
                <span className="value">{orderDetails.document}</span>
              </div>
              <div className="summary-row">
                <span className="label">Source Language:</span>
                <span className="value">{orderDetails.sourceLanguage}</span>
              </div>
              <div className="summary-row">
                <span className="label">Target Language:</span>
                <span className="value">{orderDetails.targetLanguage}</span>
              </div>
              <div className="summary-row">
                <span className="label">Word Count:</span>
                <span className="value">{orderDetails.wordCount} words</span>
              </div>
              <div className="summary-row">
                <span className="label">Price Estimate:</span>
                <span className="value">${orderDetails.price.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span className="label">Turnaround:</span>
                <span className="value">{orderDetails.turnaround}</span>
              </div>
              <div className="summary-row">
                <span className="label">Delivery Estimate:</span>
                <span className="value">{orderDetails.deliveryEstimate}</span>
              </div>
            </div>
          </div>

          <div className="total-section">
            <h3>Total price:</h3>
            <div className="total-price">${orderDetails.price.toFixed(2)}</div>
          </div>

          <div className="action-buttons">
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/new-translation/preview')}
            >
              Back
            </button>
            <button 
              className="btn-primary confirm-btn"
              onClick={handleSubmit}
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4Summary;