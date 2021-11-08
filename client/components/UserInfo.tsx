import React, { useContext } from 'react';
import Avatar from './Avatar';

import { userContext } from '../app/UserContext';

const UserInfo = () => {
    const info = useContext(userContext);

    return (
        <div className="user-info">
            <Avatar initials={info?.initials}/>
            <span className="text-content">{info?.name}</span>
        </div>
    );
};

export default UserInfo;