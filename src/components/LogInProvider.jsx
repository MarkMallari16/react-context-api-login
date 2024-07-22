import React, { useEffect, useState } from 'react'
import { LogInContext } from '../contexts/LogInContext'

const LogInProvider = ({ children }) => {
    const defaultUsername = "mark";
    const defaultPassword = "markpogi123";

    const initialUsername = () => {
        const storedUsername = localStorage.getItem("username");

        return storedUsername ? JSON.parse(storedUsername) : "";
    }
    const initialPassword = () => {
        const storedPassword = localStorage.getItem("password");

        return storedPassword ? JSON.parse(storedPassword) : "";
    }
    const initialShowDashboard = () => {
        const storedShowDashboard = localStorage.getItem("showDashboard");
        return storedShowDashboard ? JSON.parse(storedShowDashboard) : false
    }
    const [showDashboard, setShowDashboard] = useState(initialShowDashboard);
    const [username, setUsername] = useState(initialUsername);
    const [password, setPassword] = useState(initialPassword);
    const [logoutMessage, setLogoutMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem("showDashboard", JSON.stringify(showDashboard));
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));
    }, [showDashboard, username, password]);

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
            setError("");
            setShowDashboard(true);
        } else {
            setError("Invalid username or password");
        }
    }

    const logout = () => {

        setUsername("");
        setPassword("");
        setLogoutMessage("You have successfully logged out.");
        setVisible(true);
        setShowDashboard(false);

    }
    const updateProfile = (newUsername, newPassword) => {
        setUsername(newUsername);
        setPassword(newPassword);
        setError("");
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
                updateProfile
            }}
        >
            {children}
        </LogInContext.Provider>
    );
}

export default LogInProvider