import React from 'react';


fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'user', password: 'pass' }),
  });
  
const Dashboard = () => {
    return (
        <div>
            <h2>Entrepreneurship Dashboard</h2>
            <p> Track your progress and business plans here </p>
        </div>
    );
};

export default Dashboard;