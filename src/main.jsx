import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import MyRouter from "./MyRouter.jsx";
import { ServicesController } from "./context/ServicesContext.jsx";
import { AuthController } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ServicesController>
            <AuthController>
                <MyRouter />
            </AuthController>
        </ServicesController>
    </BrowserRouter>
);
