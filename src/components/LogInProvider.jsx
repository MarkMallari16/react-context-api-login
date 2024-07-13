import React, { useEffect, useState } from 'react'
import { LogInContext } from '../contexts/LogInContext'
const LogInProvider = ({ children }) => {
    const initialShowDashboard = () => {
        return JSON.parse(localStorage.getItem("showDashboard")) || false;
    }

    const [showDashboard, setShowDashboard] = useState(initialShowDashboard);
    const [username, setUsername] = useState("");
    const [logoutMessage, setLogoutMessage] = useState("");
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        localStorage.setItem("showDashboard", JSON.stringify(showDashboard));
    }, [showDashboard]);

    useEffect(() => {
        if (logoutMessage) {
            const timer = setTimeout(() => {
                setVisible(false)
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [logoutMessage]);

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