import {Link} from 'react-router';

const NavBar = () => {
    return (
        <ul className="bg-gray-500 flex justify-center gap-3 py-3 text-white [&>a]:hover:text-red-200 [&>a]:transition-all [&>a]:duration-200">
            <Link to="/">Accueil</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">S'inscrire</Link>
        </ul>
    )
}

export default NavBar