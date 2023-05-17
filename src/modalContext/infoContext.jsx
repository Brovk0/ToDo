import React, { useState } from "react";

export const ModalContext = React.createContext(null);

export default function ModalContextProvider({ children }) {
    const [modal, setmodal] = useState({ isShow: false });

    function showModal(type) {
        switch (type) {
            case "add":
                setmodal({
                    isShow: true,
                    desc: "add todo",
                    backgroundColor: "green",
                });
                break;
            case "del":
                setmodal({
                    isShow: true,
                    desc: "delete todo",
                    backgroundColor: "red",
                });
                break;
            default:
                break;
        }

        setTimeout(() => {
            setmodal({
                isShow: false,
            });
        }, 1000);
    }

    return <ModalContext.Provider value={{ modal, setmodal, showModal }}>{children}</ModalContext.Provider>;
}
