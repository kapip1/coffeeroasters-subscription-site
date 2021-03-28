import React, { useState } from 'react';

import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [step, setStep] = useState(1);
    const [disable, setDisable] = useState(false); //if this is true grind option is disable
    const handleBurgerClick = () => {
        setIsOpen((prev) => !prev);
    };
    const handleNavClick = () => {
        setIsOpen(false);
    };
    const handlePanelClick = (num) => {
        switch (num) {
            case 1:
                setStep(num);
                break;
            case 2:
                setStep(num);
                break;
            case 3:
                setStep(num);
                break;
            case 4:
                if (!disable) setStep(num);
                break;
            case 5:
                setStep(num);
                break;
            default:
                throw Error('error');
        }
    };
    return (
        <AppContext.Provider
            value={{
                isOpen,
                handleBurgerClick,
                handleNavClick,
                handlePanelClick,
                step,
                disable,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
