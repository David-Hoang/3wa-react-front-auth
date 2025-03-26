import {Routes, Route} from 'react-router';
import App from "./App";
import Profile from "./pages/Profile";
import NavBar from './components/NavBar.jsx';
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

const MyRouter = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )

}

export default MyRouter;