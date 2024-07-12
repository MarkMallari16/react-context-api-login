import { useContext } from 'react'

import './App.css'
import { LogInContext } from './contexts/LogInContext';
import LogInComponent from './components/LogInComponent';
import Dashboard from './components/Dashboard';
import LogInProvider from './components/LogInProvider';
function App() {
  return (
    <LogInProvider>
      <Content/>
    </LogInProvider>
  )
}
function Content() {
  const { showDashboard } = useContext(LogInContext);

  return showDashboard ? <Dashboard /> : <LogInComponent />
}

export default App
