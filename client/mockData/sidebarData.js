import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdAdd, IoMdTime } from 'react-icons/io';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { SiSmartthings } from 'react-icons/si';

export const sidebarData = [
    {
        title: 'Create',
        path: '/create',
        icon: <IoMdAdd/>,
        className: 'nav-text create'
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Explore Data',
        path: '/explore',
        icon: <MdOutlineTravelExplore/>,
        className: 'nav-text'
    },
    {
        title: 'Things I Like',
        path: '/like',
        icon: <SiSmartthings/>,
        className: 'nav-text'
    }
];

export const sidebarFooterData = [
    {
        title: 'Recent',
        path: '/recent',
        icon: <IoMdTime/>,
        className: 'nav-text'
    }
]