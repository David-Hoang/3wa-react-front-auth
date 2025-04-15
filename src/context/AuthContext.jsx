import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthController = ({ children }) => {
    let navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState("");

    console.log("isAuth : " + isAuthenticated)
    
    useEffect(() => {
        let token = localStorage.getItem("userToken");

        if(token){
            setIsAuthenticated(true);
            setUserToken(token);
        }
    }, [])

    const handleLogin = async (e, formUser) => {
        e.preventDefault();

        const { email, password } = formUser;
        setErrorEmail("");
        setErrorPassword("");
        setError("");

        try {
            setIsLoading(true);
            if (!email) return setErrorEmail("Veuillez renseigner votre adresse email.");
            if (!password) return setErrorPassword("Veuillez renseigner un mot de passe.");

            const response = await axios.post(
                "http://localhost:8000/api/login",
                {
                    email,
                    password,
                }
            );

            if (response.status === 200) {
                let userToken = response.data.token;
                localStorage.setItem("userToken", userToken);
                setIsAuthenticated(true);
                navigate("/");
            }
        } catch (error) {
            if(error.response.status === 401) {
                setError("Les informations renseigner sont incorrect.")
            } else if(error.response.status === 500) { 
                setError("Un problème est survenu, veuillez réessayer.")
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {

        try {
            localStorage.removeItem("userToken");
            setIsAuthenticated(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                handleLogin,
                errorEmail,
                errorPassword,
                error,
                isLoading,
                handleLogout,
                userToken
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
