import React from "react";
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from "./Context";

/*
    sidebar structure
    aside(sidebar , show-sidebar hide-sidebar)
        .sidebar-header
            h4 or logo
            close-btn (button)
        ul(links)
            li
                a#1
                a#2
                ...
                a#n
        ul(social-icons)
            li
                a#1
                a#2
                ...
                a#n

    (--- closed---)
*/

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <h3 className="mch-title">(mondalcodehub)</h3> 
                    <button className="close-btn" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>

                <ul className="links">
                    {
                        links.map((link) => {
                            const { id, url, text, icon } = link;
                            return (
                                <>
                                    <li key={id}>
                                        <a href={url}>
                                            {icon}
                                            {text}
                                        </a>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>

                <ul className="social-icons">
                    {
                        social.map((link) => {
                            const { id, url, icon } = link;
                            return (
                                <>
                                    <li key={id}>
                                        <a href={url} >
                                            {icon}
                                        </a>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>

            </aside>
        </>
    )
}
export default Sidebar

// @mondalcodehub (November-2022)