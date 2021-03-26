import React, { useState } from 'react';

import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen((prev) => !prev);
    };
    const handleNavClick = () => {
        setIsOpen(false);
    };
    return (
        <AppContext.Provider
            value={{
                isOpen,
                handleBurgerClick,
                handleNavClick,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
