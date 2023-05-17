import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import InfoContextProvider from "./contexts/infoContext";
import ModalContextProvider from "./modalContext/infoContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <InfoContextProvider>
                <ModalContextProvider>
                    <App />
                </ModalContextProvider>
            </InfoContextProvider>
        </Router>
    </React.StrictMode>
);
