import React from 'react';

interface IAvatarProps {
    initials: string;
}

const Avatar = (props: IAvatarProps) => {
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
