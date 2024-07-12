import React, { useEffect, useState } from 'react'
import { LogInContext } from '../contexts/LogInContext'
const LogInProvider = ({ children }) => {
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
    }, [visible, logoutMessage]);

    return (
        <LogInContext.Provider
            value={{
                username,
                setUsername,
                showDashboard,
                setShowDashboard,
                logoutMessage,
                setLogoutMessage,
                visible,
            }}
        >
            {children}
        </LogInContext.Provider>
    );
}

export default LogInProvider