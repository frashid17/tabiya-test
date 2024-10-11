import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobMatch from './components/JobMatch';
import ChatBot from './components/ChatBot';
import Dashboard from './components/Dashboard';
import Login from './components/login';
import Register from './components/register';

function App() {
    return (
        <Router>
            <div>
                <h1>Hackathon Project</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" exact component={JobMatch} />
                    <Route path="/chatbot" component={ChatBot} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
