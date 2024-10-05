import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const options = [
    { title: 'Product Setup', icon: '📦' },
    { title: 'Policy Process', icon: '🛡️' },
    { title: 'Claims Module', icon: '📄' },
    { title: 'Endorsement', icon: '🔖' },
    { title: 'Renewal', icon: '🔁' }
  ];

  return (
    <div className="dashboard-container">
      <h1 className="title">What would you like to use CRM for?</h1>
      <div className="grid-container">
        {options.map((option, index) => (
          <div className="grid-item" key={index}>
            <span className="icon">{option.icon}</span>
            <h3>{option.title}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
