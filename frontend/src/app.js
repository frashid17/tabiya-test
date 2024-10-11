import React from 'react';
import JobMatch from './components/JobMatch';
import ChatBot from './components/ChatBot';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <div>
            <h1>Hackathon Project</h1>
            <JobMatch/>
            <ChatBot/>
            <Dashboard/>
        </div>
    );
}

export default App;