import React, { useState, useEffect, useContext } from 'react';
import { api } from "../services/api";
import { useNavigate } from "react-router";

const AuthContext = React.createContext({
    signed: false,
    user: {},
    onLogout: () => { },
    onLogin: (userData) => {}
});

// Named export.
export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('@App:user');
        setUser(null);
        navigate("/signin");
    }

    const loginHandler = async (userData) => {
        const { data } = await api.post("/users/signin", userData);

        setUser(data);
        localStorage.setItem('@App:user', JSON.stringify(data));
        navigate("/");
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('@App:user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}