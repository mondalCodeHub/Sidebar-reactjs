// import { useContext } from "react";
import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from 'react-icons/fa';
/*
    ( HOME Structure )
    main
        button(.sidebar-toggle)
        button(show modal button)
*/

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    return (
        <>
            <main>
                <button className="sidebar-toggle" onClick={openSidebar}>
                    <FaBars />
                </button>
                <button className="btn" onClick={openModal}>SHOW MODAL</button>
            </main>
        </>
    )
}
export default Home

// @mondalcodehub (November-2022)