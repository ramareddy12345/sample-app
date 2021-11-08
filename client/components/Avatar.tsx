import React from 'react';

const Avatar = (props) => {
    return (
        <div className="avatar-icon sm">
            <div className="avatar-container">
                <div className="initials">
                    {props.initials}
                </div>
            </div>
        </div>
    );
}

export default Avatar;
