import axios from "axios";
import { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

function Login() {

    const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();

        setErrorEmail("");
        setErrorPassword("");

        try {
            if (!email) return setErrorEmail("Veuillez renseigner votre adresse email.");
            if (!password) return setErrorPassword("Veuillez renseigner un mot de passe.");
            
            const response = await axios.post("http://localhost:8000/api/login", {
                    email,
                    password,
                })

            if(response.status === 200){
                console.log(response);
                let userToken = response.data.token;
                localStorage.setItem("userToken", userToken);
                setIsAuthenticated(true);
                navigate('/');
            }
        } catch (error) {
            
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Connectez-vous
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900 text-start"
                        >
                            Votre adresse email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Votre mot de passe
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;