import React, {createContext, useState} from "react";
import {ProductService} from "../services/ProductService";

interface AuthContextProps {
    isLogged: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
    isLogged: false,
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const productService = new ProductService();

    const login = async (email: string, password: string) => {
        await productService.login(email, password);
        setIsLogged(true);
    };

    const logout = async () => {
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;