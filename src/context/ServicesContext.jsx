import { useState , useEffect, createContext } from "react";
import axios from 'axios';

export const ServicesContext = createContext(null);

export const ServicesController = ({children}) => {

    const [services, setServices] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)



    const fetching = async () => {
        try {
            const getServices = await axios.get('http://localhost:8000/api/services');
            setServices(getServices.data);

        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }  finally {
            setLoading(false)
        }
    };
    
    useEffect(() => {
        fetching();
    }, []);

    return (
        <ServicesContext.Provider value={[services, setServices, error, setError]}>
            {!loading && children}
        </ServicesContext.Provider>
    )
}