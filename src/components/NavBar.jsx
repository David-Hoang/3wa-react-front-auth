import {Link} from 'react-router';
import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext.jsx";

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
    console.log(isAuthenticated)
    return (
        <ul className="bg-gray-500 flex justify-center gap-3 py-3 text-white [&>a]:hover:text-red-200 [&>a]:transition-all [&>a]:duration-200">
            <Link to="/">Accueil</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>

            <Link to="/register">S'inscrire</Link>
            <Link to="/login">Se connecter</Link>
        </ul>
    )
}

export default NavBar