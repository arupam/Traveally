import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Account',
        path: 'showAccount',
        icon: <FaIcons.FaUserShield />,
        cName: 'sidebar-text'
    },
    {
        title: 'Trips',
        path: 'showTrips',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sidebar-text'
    },
    {
        title: 'Blogs',
        path: 'showBlogs',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'sidebar-text'
    },
    {
        title: 'Reviews',
        path: 'showReviews',
        icon: <AiIcons.AiFillStar />,
        cName: 'sidebar-text'
    },
]