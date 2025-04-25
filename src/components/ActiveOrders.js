import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ActiveOrders() {
  const [orders] = useState([
    {
      id: 'ORDER-123456',
      document: 'Business_Proposal.pdf',
      status: 'In Progress',
      submitted: 'July 12, 2023',
      delivery: 'July 15, 2023',
      progress: 60
    },
    {
      id: 'ORDER-123455',
      document: 'Medical_Report.docx',
      status: 'Completed',
      submitted: 'July 10, 2023',
      delivery: 'July 13, 2023',
      progress: 100
    },
    {
      id: 'ORDER-123454',
      document: 'Legal_Contract.pdf',
      status: 'In Review',
      submitted: 'July 8, 2023',
      delivery: 'July 14, 2023',
      progress: 80
    }
  ]);

  return (
    <div className="orders-container">
      <div className="orders-card">
        <h2>Active Orders</h2>
        
        <div className="orders-header">
          <div className="search-bar">
            <input type="text" placeholder="Search orders..." />
            <button className="search-btn">Search</button>
          </div>
          <Link to="/new-translation/upload" className="btn-primary">
            New Translation
          </Link>
        </div>

        <div className="orders-list">
          <div className="orders-table">
            <div className="table-header">
              <div className="col col-id">Order ID</div>
              <div className="col col-document">Document</div>
              <div className="col col-status">Status</div>
              <div className="col col-submitted">Submitted</div>
              <div className="col col-delivery">Delivery</div>
              <div className="col col-progress">Progress</div>
            </div>
            
            {orders.map(order => (
              <div key={order.id} className="table-row">
                <div className="col col-id">{order.id}</div>
                <div className="col col-document">{order.document}</div>
                <div className="col col-status">
                  <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </span>
                </div>
                <div className="col col-submitted">{order.submitted}</div>
                <div className="col col-delivery">{order.delivery}</div>
                <div className="col col-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{order.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-history-section">
          <h3>Order History</h3>
          <div className="history-placeholder">
            <p>View your complete order history here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveOrders;