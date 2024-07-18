import React, { useEffect, useState } from 'react'
import { LogInContext } from '../contexts/LogInContext'
const LogInProvider = ({ children }) => {
    const defaultUsername = "mark";
    const defaultPassword = "markpogi123";

    const initialShowDashboard = () => {
        const storedShowDashboard = localStorage.getItem("showDashboard");
        return storedShowDashboard ? JSON.parse(storedShowDashboard) : false
    }
    const [showDashboard, setShowDashboard] = useState(initialShowDashboard);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [logoutMessage, setLogoutMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem("showDashboard", JSON.stringify(showDashboard));

    }, [showDashboard, username]);

    useEffect(() => {
        if (logoutMessage) {
            const timer = setTimeout(() => {
                setVisible(false)
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [logoutMessage, showDashboard]);
    const login = (inputUsername, inputPassword) => {
        if (inputUsername === defaultUsername && inputPassword === defaultPassword) {
            setUsername(inputUsername);
            setPassword(inputPassword);
            setShowDashboard(true);
            setError("");
        } else {
            setError("Invalid username or password");
        }
    }
    const logout = () => {
        localStorage.removeItem("showDashboard");
        setUsername("");
        setPassword("");
        setLogoutMessage("You have successfully logged out.");
        setVisible(true);
        setShowDashboard(false)
    }
    return (
        <LogInContext.Provider
            value={{
                username,
                password,
                error,
                setUsername,
                setPassword,
                showDashboard,
                setShowDashboard,
                logoutMessage,
                setLogoutMessage,
                visible,
                login,
                logout,
            }}
        >
            {children}
        </LogInContext.Provider>
    );
}

export default LogInProvider