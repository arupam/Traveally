import React, {useRef, useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Sidebar.css'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const accountRef = useRef()
    const tripRef = useRef()
    const blogRef = useRef()
    const reviewRef = useRef()

    function showAccount() {
        accountRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function showTrips() {
        tripRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function showBlogs() {
        blogRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function showReviews() {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' })
    }

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
                    <li className="sidebar-text">
                        <Link to='/#'>
                            <AiIcons.AiFillHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    {/* {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link onClick={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })} */}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar
