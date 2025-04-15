import axios from "axios";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function SingleService() {
    const {id} = useParams()

    const {userToken} = useContext(AuthContext)

    const fetchService = async () => {
        const response = await axios.get(`http://localhost:8000/api/services/${id}`,
            {
                headers : {'Authorization' : `Bearer ${userToken}`}
            }
        )
        console.log(response);
    }

    useEffect(()=> {
        fetchService()
    }, [])
    return ( 
        <>{id}</>
     );
}

export default SingleService;