import { useState } from 'react'

import './App.css'
import { LogInContext } from './contexts/LogInContext';
import LogInComponent from './components/LogInComponent';
import Dashboard from './components/Dashboard';
function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [username, setUsername] = useState("");
  const [logoutMessage, setLogoutMessage] = useState("");
  
  return (
    <LogInContext.Provider value={{ username, setUsername, setShowDashboard, logoutMessage, setLogoutMessage }}>
      {showDashboard ?
        <Dashboard /> :
        <LogInComponent />
      }
    </LogInContext.Provider>
  )
}

export default App
