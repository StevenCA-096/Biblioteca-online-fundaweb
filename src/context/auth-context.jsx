import React, { useContext, useState } from "react";

export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {
    const [value, setValue] = useState(false);

    return (
        <AuthContext.Provider value={{ value, setValue }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuthContext = () => {
    let contextData = useContext(AuthContext);
    return contextData
}

