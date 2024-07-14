import React, { useEffect, useState } from 'react'
import { LogInContext } from '../contexts/LogInContext'
const LogInProvider = ({ children }) => {
    const initialUsername = () => {
        return JSON.parse(localStorage.getItem("username")) || "";
    }
    const initialShowDashboard = () => {
        return JSON.parse(localStorage.getItem("showDashboard")) || false;
    }

    const [showDashboard, setShowDashboard] = useState(initialShowDashboard);
    const [username, setUsername] = useState(initialUsername);
    const [logoutMessage, setLogoutMessage] = useState("");
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        localStorage.setItem("showDashboard", JSON.stringify(showDashboard));
        localStorage.setItem("username", JSON.stringify(username));
    }, [showDashboard, username]);

    useEffect(() => {
        if (logoutMessage) {
            const timer = setTimeout(() => {
                setVisible(false)
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [logoutMessage,showDashboard]);

    const logout = () => {
        localStorage.removeItem("showDashboard");
        localStorage.removeItem("username");
        setUsername("");
        setLogoutMessage("You have successfully logged out.");
        setVisible(true);
        setShowDashboard(false)
    }
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
                logout
            }}
        >
            {children}
        </LogInContext.Provider>
    );
}

export default LogInProvider