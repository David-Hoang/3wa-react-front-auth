import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Register = () => {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const newUser = await axios.post('http://localhost:8000/api/register', {first_name : firstName, last_name : lastName, email, password});
            
            if(newUser.status === 201){
                navigate('/');
            }

        } catch (error) {
            console.log(error.response.data);
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
                    Inscription
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleRegistration} className="space-y-6">
                    <div>
                        <label
                            for="first_name"
                            className="block text-sm/6 font-medium text-gray-900 text-start"
                        >
                            Votre prénom
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder="John"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="last_name"
                            className="block text-sm/6 font-medium text-gray-900 text-start"
                        >
                            Votre nom de famille
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Doe"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="email"
                            className="block text-sm/6 font-medium text-gray-900 text-start"
                        >
                            Votre adresse email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                for="password"
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
                                autocomplete="current-password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            S'inscrire
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Vous n'êtes pas membre ?
                </p>
                <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 text-sm/6"
                >
                    Essayer la version d'essaie de 14 jours
                </a>
            </div>
        </div>
    );
};

export default Register;
