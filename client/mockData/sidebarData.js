import React from 'react';
import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome';
import { IoMdAdd } from '@react-icons/all-files/io/IoMdAdd';
import { IoMdTime } from '@react-icons/all-files/io/IoMdTime';
import { MdExplore } from '@react-icons/all-files/md/MdExplore';
import { SiSmartthings } from '@react-icons/all-files/si/SiSmartthings';

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
        icon: <MdExplore/>,
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