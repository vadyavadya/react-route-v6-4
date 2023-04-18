import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signIn(newUser, cb) {
        setUser(newUser);
        cb();
    }

    function signOut(cb) {
        setUser(null);
        cb();
    }
    const value = { user, signIn, signOut }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}