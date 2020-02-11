import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Views/Dashboard';

const App = () => {
    return(
        <div>
            <Dashboard/>
        </div>    
    )
}

export default App;
