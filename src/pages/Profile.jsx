import axios from 'axios';
import {useEffect, useState} from 'react';

const Profile = () => {

    const [user, setUser] = useState(null);

    let userToken = localStorage.getItem('userToken');

    const getUser = async () => {
        const response = await axios.get('http://localhost:8000/api/profile', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })        
        
        setUser(response.data);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <h1>Hello {user && user.first_name}</h1>
        </>
    )
}

export default Profile;