import { createContext, useState } from "react";

const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};


export const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const setUser = (user) => {
        setState({
            ...state,
            isAuthenticated: true,
            user: user,
            token: user.token,
        });
    };

    const logout = () => {
        localStorage.clear();
        setState(initialState);
    };

    return (
        <AuthContext.Provider value={{
            state,
            setUser,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;


