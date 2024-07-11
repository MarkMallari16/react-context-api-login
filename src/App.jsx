import { useEffect, useState } from 'react'

import './App.css'
import { LogInContext } from './contexts/LogInContext';
import LogInComponent from './components/LogInComponent';
import Dashboard from './components/Dashboard';
function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [username, setUsername] = useState("");
  const [logoutMessage, setLogoutMessage] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (logoutMessage) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [logoutMessage]);

  return (
    <LogInContext.Provider value={{ username, setUsername, setShowDashboard, logoutMessage, setLogoutMessage, visible }}>
      {showDashboard ?
        <Dashboard /> :
        <LogInComponent />
      }
    </LogInContext.Provider>
  )
}

export default App
