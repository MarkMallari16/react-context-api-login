import { useContext } from 'react'

import './App.css'
import { LogInContext } from './contexts/LogInContext';
import LogInComponent from './components/LogInComponent';
import Dashboard from './components/Dashboard';
import LogInProvider from './components/LogInProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Students from './pages/Students';
import Notifications from './pages/Notifications';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
function App() {
  return (
    <LogInProvider>
      <Router>
        <Content />
      </Router>
    </LogInProvider>
  )
}
function Content() {
  const { showDashboard } = useContext(LogInContext);

  if (!showDashboard) {
    return <LogInComponent />
  }

  return (
    <>

      <div className='min-h-screen flex gap-5 lg:gap-10 bg-blue-50'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </>
  )

}

export default App
