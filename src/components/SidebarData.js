import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Account',
        path: '/dashboard',
        icon: <FaIcons.FaUserShield />,
        cName: 'sidebar-text'
    },
    {
        title: 'Trips',
        path: '/trips',
        icon: <FaIcons.FaCartPlus />,
        cName: 'sidebar-text'
    },
    {
        title: 'Blogs',
        path: '/blogs',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'sidebar-text'
    },
    {
        title: 'Reviews',
        path: '/reviews',
        icon: <AiIcons.AiFillStar />,
        cName: 'sidebar-text'
    },
]