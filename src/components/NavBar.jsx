import {Link} from 'react-router';
import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext.jsx";

const NavBar = () => {
    const {isAuthenticated, handleLogout} = useContext(AuthContext);
    return (
        <header className="bg-gray-500 px-12 flex items-center justify-center [&>nav>ul>li>a]:hover:text-red-200 [&>nav>ul>li>a]:transition-all [&>nav>ul>li>a]:duration-200 shadow-md">
            <nav className="flex justify-between items-center w-full max-w-5xl text-white">
                <ul className="flex justify-center gap-3 py-3">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    {isAuthenticated && ( <li> <Link to="/profile">Profile</Link> </li> ) }
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
                <ul className="flex items-center gap-3 py-3">
                    {isAuthenticated ? (
                        <li>
                            <Link onClick={handleLogout}>Déconnexion</Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to="/register">S'inscrire</Link>
                            </li>
                            <li>
                                <Link to="/login">Se connecter</Link>
                            </li>
                        </>
                    ) }
                </ul>
            </nav>
        </header>
    )
}

export default NavBar