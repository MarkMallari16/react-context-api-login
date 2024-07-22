import { useContext } from 'react'

import './App.css'
import { LogInContext } from './contexts/LogInContext';

import Dashboard from './components/Dashboard';
import LogInProvider from './components/LogInProvider';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Notifications from './pages/Notifications';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Orders from './pages/Orders';
import Products from './pages/Products';
import useSideBar from './hooks/useSideBar';
import LogIn from './pages/auth/LogIn';
import Register from './pages/auth/Register';
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
  const { isSideBarExpand, handleSideBarExpand } = useSideBar();

  if (!showDashboard) {
    return (
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }

  return (
    <>
      <div className='min-h-screen flex gap-5 lg:gap-10 bg-blue-50'>
        <nav >
          <Sidebar isSideBarExpand={isSideBarExpand} handleSideBarExpand={handleSideBarExpand} />
        </nav>
        <main className={`${isSideBarExpand ? 'ml-96' : 'ml-20'} w-full transition-all duration-500`}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/products' element={<Products />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/settings' element={<Settings />} />
          
          </Routes>
         
        </main>
      </div>
    </>
  )
}

export default App
