import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Sidebar } from '../components/Sidebar';
import { sidebarData, sidebarFooterData } from '../mockData/sidebarData';
import { userContext } from './UserContext';

// pages
// import Create from './views/Create';
import Insights from './views/Insights';
import Explore from './views/Explore';
import ThingsLike from './views/ThingsLike';
import Recent from './views/Recent';

const Create = React.lazy(() => import(/*webpackChunkName: "Createchunk"*/ './views/Create'));
// const Create = import('./views/Create');

export function App() {
    return (
        <div className="app">
            <userContext.Provider value={{name: 'Alex Hamelton', initials: 'AH'}}>
                <Sidebar name="Compass" items={sidebarData} footerItems={sidebarFooterData}/>

                <main className="page-content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Insights/>}/>
                            <Route path="/create" element={<Create/>}/>
                            <Route path="/explore" element={<Explore/>}/>
                            <Route path="/like" element={<ThingsLike/>}/>
                            <Route path="/recent" element={<Recent/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </userContext.Provider>
        </div>
    );
}
