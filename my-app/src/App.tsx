// src/App.tsx

import React from 'react';
import './App.css';
import EmployeeComponent from './EmployeeComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <EmployeeComponent />
            </header>
        </div>
    );
};

export default App;
