import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Sidebar.css'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='sidebar'>
                <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            
            <nav className={sidebar ? 'menu active' : 'menu'}>
                <ul className='menu-items' onClick={showSidebar}>
                    <li className='sidebar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar
