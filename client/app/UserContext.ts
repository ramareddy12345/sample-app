import React from 'react';

interface IUserDetails {
    name: string;
    initials: string;
}

export const userContext = React.createContext<IUserDetails | null>(null);
