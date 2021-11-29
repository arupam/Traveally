import React, {useRef, useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { AccountData } from '../AccountData'
import Trips from '../Dashboard/Trips'
import Blogs from '../Dashboard/Blogs'
import { Container } from '@mui/material'
import '../Sidebar.css'
import '../Dashboard.css'

export default function Dashboard2() {
    const accountRef = useRef()
    const tripRef = useRef()
    const blogRef = useRef()
    const reviewRef = useRef()
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

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
                    <li className="sidebar-text">
                        <a onClick={showTrips}>
                        <FaIcons.FaCartPlus />
                            <span>Trips</span>
                        </a>
                    </li>
                    <li className="sidebar-text">
                        <a onClick={showBlogs}>
                        <FaIcons.FaEnvelopeOpenText />
                            <span>Blogs</span>
                        </a>
                    </li>
                    <li className="sidebar-text">
                        <a onClick={showReviews}>
                        <AiIcons.AiFillStar />
                            <span>Reviews</span>
                        </a>
                    </li>
                    <li className="sidebar-text">
                        <a onClick={showAccount}>
                        <FaIcons.FaUserShield />
                            <span>Account</span>
                        </a>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        
        <div>
            <div ref={tripRef}>
            <br /><br />
                <div className="tripCard">
                    <h1>Trips</h1>
                    <br />
                    <Container maxWidth="xl">
                        <Trips />
                    </Container>
                </div>
            </div>
            <div ref={blogRef}>
            <br /><br /><br />
                <div className="blogCard">
                    <h1>Blogs</h1>
                    <br />
                    <Container maxWidth="xl">
                        <Blogs />
                    </Container>
                </div>
            </div>
            <div ref={reviewRef}>
            <br /><br /><br />
            <h1>Reviews</h1>
                <br />
                <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam provident odio ullam explicabo dolorem doloremque consequatur, molestiae sit tempore quos ipsa maxime nihil sequi aspernatur veritatis reiciendis illum dolorum quis! Temporibus autem quibusdam quidem, incidunt deserunt, necessitatibus cupiditate, repellat labore eos mollitia eligendi. Error adipisci temporibus sapiente recusandae quod sit et eveniet laboriosam facere! Libero autem cumque accusamus qui dolores blanditiis perferendis, consectetur nisi ex odio ducimus recusandae delectus maiores a hic eum corporis veritatis atque, asperiores deleniti dicta reprehenderit, ut explicabo totam? Maiores cumque quod, suscipit sunt eaque facilis exercitationem quas optio quam molestias laborum vero, id eos.</h3>
            </div>
            <div ref={accountRef}>
            <br /><br /><br />
            <div className='accountCard'>
                <h1>Account info</h1>
                <br />
                {/* <h3>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam provident odio ullam explicabo dolorem doloremque consequatur, molestiae sit tempore quos ipsa maxime nihil sequi aspernatur veritatis reiciendis illum dolorum quis! Temporibus autem quibusdam quidem, incidunt deserunt, necessitatibus cupiditate, repellat labore eos mollitia eligendi. Error adipisci temporibus sapiente recusandae quod sit et eveniet laboriosam facere! Libero autem cumque accusamus qui dolores blanditiis perferendis, consectetur nisi ex odio ducimus recusandae delectus maiores a hic eum corporis veritatis atque, asperiores deleniti dicta reprehenderit, ut explicabo totam? Maiores cumque quod, suscipit sunt eaque facilis exercitationem quas optio quam molestias laborum vero, id eos.</h3> */}
                
                    pepega
                    {AccountData.map((a) => {
                        return (
                            <span>{a.name}</span>
                        )
                    })}
                </div>

            </div>
        </div>
        </>
    );
}
