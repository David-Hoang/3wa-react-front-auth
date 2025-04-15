import {Routes, Route, Navigate} from 'react-router';
import { useContext } from "react";
import { AuthContext } from './context/AuthContext.jsx';
import App from "./App";
import Profile from "./pages/Profile";
import NavBar from './components/NavBar.jsx';
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import SingleService from "./pages/SingleService.jsx";

const MyRouter = () => {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" /> } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path="/service/:id" element={<SingleService />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )

}

export default MyRouter;