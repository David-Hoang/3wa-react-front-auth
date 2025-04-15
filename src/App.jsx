import { useEffect, useState } from "react";
// import "./App.css";
import { ServicesContext } from './context/ServicesContext.jsx';
import { useContext } from 'react';
import { Link } from "react-router";

function App() {

    const [services, setServices, error, setError] = useContext(ServicesContext);

    return (
        <main className="flex flex-col items-center gap-5 px-12">
            <h1 className="text-2xl py-5 font-semibold">Liste des services</h1>
            {error ? (             
                    <p>{error}</p>
                ) : !services ? ( // Vérification si services est null ou undefined
                    <p>Chargement...</p> // Message pendant le chargement
                ) : services.length === 0 ? ( // Vérification si le tableau est vide
                    <p>Aucun évènement en cours</p>
                ) : ( <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map(service => (
                            <Link to={`/service/${service._id}`} key={service._id}>
                                <li className="col-span-1">
                                    <div className="border border-gray-400 rounded-md shadow-xl p-6 h-full flex flex-col gap-3 text-sm">
                                        <h2 className="text-center text-lg font-semibold">
                                            {service.title}
                                        </h2>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-zinc-800">
                                                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p>
                                                Description : {service.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-300">
                                                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p>
                                                Addresse : {service.address}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-sky-300">
                                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p>
                                                Catégorie : {service.category}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-300">
                                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.902 7.098a3.75 3.75 0 0 1 3.903-.884.75.75 0 1 0 .498-1.415A5.25 5.25 0 0 0 8.005 9.75H7.5a.75.75 0 0 0 0 1.5h.054a5.281 5.281 0 0 0 0 1.5H7.5a.75.75 0 0 0 0 1.5h.505a5.25 5.25 0 0 0 6.494 2.701.75.75 0 1 0-.498-1.415 3.75 3.75 0 0 1-4.252-1.286h3.001a.75.75 0 0 0 0-1.5H9.075a3.77 3.77 0 0 1 0-1.5h3.675a.75.75 0 0 0 0-1.5h-3c.105-.14.221-.274.348-.402Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p>
                                            Tarif : {service.price} €
                                            </p>
                                        </div>
                                        <p>
                                            Disponibilité : {service.availability ? "Oui" : "Non"} 
                                        </p>
                                        {service.availability && <button type="button" className="bg-blue-600 text-white rounded-md shadow-md">Réserver</button> } 
                                        
                                    </div>
                                </li>
                            </Link>

                        ))}
                    </ul> 
                )
            }
        </main>
    )
}

export default App;
