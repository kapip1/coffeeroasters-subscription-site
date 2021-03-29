import React, { useState } from 'react';

import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [currentStep, setCurrentStep] = useState(1);

    const [preferences, setPreferences] = useState({
        open: true,
        option: 0,
        block: false,
    });
    const [bean, setBean] = useState({ open: false, option: 0, block: false });
    const [quality, setQuality] = useState({
        open: false,
        option: 0,
        block: false,
    });
    const [grind, setGrind] = useState({
        open: false,
        option: 0,
        block: false,
    });
    const [deliveries, setDeliveries] = useState({
        open: false,
        option: 0,
        block: false,
    });

    const handleBurgerClick = () => {
        setIsOpen((prev) => !prev);
    };
    const handleNavClick = () => {
        setIsOpen(false);
    };
    const getOption = (option, id) => {
        switch (id) {
            case 1:
                if (option === 1)
                    setGrind({ ...grind, block: true, option: 0 });
                setPreferences({ ...preferences, option });
                break;
            case 2:
                setBean({ ...bean, option });
                break;
            case 3:
                setQuality({ ...quality, option });
                break;
            case 4:
                setGrind({ ...grind, option });
                break;
            case 5:
                setDeliveries({ ...deliveries, option });
                break;
            default:
                console.log('error');
        }
    };
    const setOpen = (id) => {
        console.log(id);
        switch (id) {
            case 1:
                setPreferences({ ...preferences, open: true });
                setCurrentStep(1);
                break;
            case 2:
                setBean({ ...bean, open: true });
                setCurrentStep(2);
                break;
            case 3:
                setQuality({ ...quality, open: true });
                setCurrentStep(3);
                break;
            case 4:
                if (!grind.block) setGrind({ ...grind, open: true });
                setCurrentStep(4);
                break;
            case 5:
                setDeliveries({ ...deliveries, open: true });
                setCurrentStep(5);
                break;
            default:
                console.log('error');
        }
    };
    console.log(preferences);
    console.log(bean);
    console.log(quality);
    console.log(grind);
    console.log('---------------------');
    return (
        <AppContext.Provider
            value={{
                isOpen,
                handleBurgerClick,
                handleNavClick,
                getOption,
                setOpen,
                preferences,
                bean,
                quality,
                grind,
                deliveries,
                currentStep,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
