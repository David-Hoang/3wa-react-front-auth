import axios from 'axios';
import {useEffect, useState} from 'react';

const Profile = () => {

    const [userInfos, setUserInfos] = useState(null);

    let userToken = localStorage.getItem('userToken');

    const getUser = async () => {
        const response = await axios.get('http://localhost:8000/api/profile', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })        
        
        setUserInfos(response.data);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="min-w-96 w-full border border-gray-400 rounded-md shadow-xl p-6 flex flex-col gap-6 mx-auto">
                <h1 className="text-center text-3xl font-semibold">Mon profil</h1>
                <div className="flex flex-col gap-2">
                    <p>Nom : {userInfos && userInfos.last_name}</p>
                    <p>Prénom : {userInfos && userInfos.first_name}</p>
                    <p>Email : {userInfos && userInfos.email}</p>
                    {userInfos && userInfos.image ? (
                        <div className="w-48 self-center overflow-hidden rounded-md">
                            <img src={userInfos && `http://localhost:8000${userInfos.image}`} alt="profile picture" className="w-full h-full object-contain"/>
                        </div>
                    ) : (
                        <p className="text-center">Vous n'avez pas de photo de profil</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile;