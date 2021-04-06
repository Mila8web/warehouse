import "./Navbar.module.scss"
import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                    <FaIcons.FaBars onClick={showSidebar}/>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <AiIcons.AiOutlineClose/>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
