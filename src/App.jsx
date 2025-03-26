import { useEffect, useState } from "react";
import "./App.css";
import { ServicesContext } from './context/ServicesContext.jsx';
import { useContext } from 'react'


function App() {

    const [services, setServices, error, setError] = useContext(ServicesContext);

    return (
        <main className="flex flex-col gap-5">
            <h1 className="text-2xl py-5 font-semibold">Liste des services</h1>
            {error ? (             
                    <p>{error}</p>
                ) : !services ? ( // Vérification si services est null ou undefined
                    <p>Chargement...</p> // Message pendant le chargement
                ) : services.length === 0 ? ( // Vérification si le tableau est vide
                    <p>Aucun évènement en cours</p>
                ) : ( <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map(service => (
                            <li key={service._id} className="col-span-1">
                                <div className="border border-gray-400 rounded-md shadow-xl p-6 h-full">
                                    <p>
                                        Titre : {service.title}
                                    </p>
                                    <p>
                                        Description : {service.description}
                                    </p>
                                    <p>
                                        Addresse : {service.address}
                                    </p>
                                    <p>
                                        Catégorie : {service.category}
                                    </p>
                                    <p>
                                        Tarif : {service.price} €
                                    </p>
                                    <p>
                                        Disponibilité : {service.availability ? "Oui" : "Non"} 
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul> 
                )
            }
        </main>
    )
}

export default App;
