import React from 'react';
import { GiPegasus } from '@react-icons/all-files/gi/GiPegasus';
import { Link, NavLink } from 'react-router-dom';
import { IconContext } from '@react-icons/all-files';

import UserInfo from './UserInfo';
import Search from './Search';

export type SidebarItem = {
    title: string;
    path: string;
    icon: React.ReactElement;
    className: string;
}

export interface ISidebarProps {
    name: string;
    items: Array<SidebarItem>,
    footerItems?: Array<SidebarItem>
}

export const Sidebar = (props: ISidebarProps) => {
    const getItem = (item, idx, className='') => {
        return (
            <li key={idx} className={`${item.className} ${className} ${idx === 0 ? 'section-start' : ''}`}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                    {item.icon}
                    <span className="text-content">{item.title}</span>
                </NavLink>
            </li>
        )
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className="nav-menu">
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <GiPegasus/>
                                <span className="text-content">{props.name}</span>
                            </Link>
                        </li>
                        <li>
                            <Search/>
                        </li>
                        {
                            props.items.map((item, idx) => {
                                return getItem(item, idx);
                            })
                        }
                        {
                            props.footerItems && props.footerItems.map((item, idx) => {
                                return getItem(item, idx, 'move-down');
                            })
                        }
                        <UserInfo/>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};
