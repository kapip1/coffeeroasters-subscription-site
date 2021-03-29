import React, { useEffect, useState } from 'react';

import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [price, setPrice] = useState(0);
    const [isDisable, setIsDisable] = useState(true);

    const [currentStep, setCurrentStep] = useState(1);

    const [preferences, setPreferences] = useState({
        open: true,
        option: 0,
        block: false,
        name: '',
    });
    const [bean, setBean] = useState({
        open: false,
        option: 0,
        block: false,
        name: '',
    });
    const [quantity, setQuantity] = useState({
        open: false,
        option: 0,
        block: false,
        name: '',
    });
    const [grind, setGrind] = useState({
        open: false,
        option: 0,
        block: false,
        name: '',
    });
    const [deliveries, setDeliveries] = useState({
        open: false,
        option: 0,
        block: false,
        name: '',
    });

    const handleIsAlert = () => {
        setIsAlert((prev) => !prev);
    };
    const handleBurgerClick = () => {
        setIsOpen((prev) => !prev);
    };
    const handleNavClick = () => {
        setIsOpen(false);
    };
    const getOption = (name, option, id) => {
        switch (id) {
            case 1:
                setBean({ ...bean, open: true });
                setCurrentStep(1);
                if (option === 1)
                    setGrind({ ...grind, block: true, option: 0 });
                else {
                    setGrind({ ...grind, block: false });
                }
                setPreferences({ ...preferences, option, name });
                break;
            case 2:
                setQuantity({ ...quantity, open: true });
                setCurrentStep(2);
                setBean({ ...bean, option, name });
                break;
            case 3:
                if (!grind.block) setGrind({ ...grind, open: true });
                else if (grind.block)
                    setDeliveries({ ...deliveries, open: true });
                setCurrentStep(3);
                setQuantity({ ...quantity, option, name });
                break;
            case 4:
                setDeliveries({ ...deliveries, open: true });
                setCurrentStep(4);

                setGrind({ ...grind, option, name });
                break;
            case 5:
                setDeliveries({ ...deliveries, option, name });
                setCurrentStep(5);
                break;
            default:
                throw Error();
        }
    };
    const setOpen = (id) => {
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
                setQuantity({ ...quantity, open: true });
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
                throw Error();
        }
    };
    const calulateSubscription = () => {
        switch (quantity.option) {
            case 1: //250
                switch (deliveries.option) {
                    case 1:
                        setPrice('28.80');
                        break;
                    case 2:
                        setPrice('19.20');
                        break;
                    case 3:
                        setPrice('12.00');
                        break;
                    default:
                        break;
                }
                break;
            case 2: // 500
                switch (deliveries.option) {
                    case 1:
                        setPrice('52.00');
                        break;
                    case 2:
                        setPrice('34.00');
                        break;
                    case 3:
                        setPrice('22.00');
                        break;
                    default:
                        break;
                }
                break;
            case 3: // 1000
                switch (deliveries.option) {
                    case 1:
                        setPrice('88.00');
                        break;
                    case 2:
                        setPrice('64.00');
                        break;
                    case 3:
                        setPrice('42.00');
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        if (grind.block) {
            if (
                preferences.option &&
                bean.option &&
                quantity.option &&
                deliveries.option
            ) {
                setIsDisable(false);
            }
        } else if (!grind.block) {
            if (
                preferences.option &&
                bean.option &&
                quantity.option &&
                deliveries.option &&
                grind.option
            ) {
                setIsDisable(false);
            }
        }
    }, [currentStep]);
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
                quantity,
                grind,
                deliveries,
                currentStep,
                isAlert,
                handleIsAlert,
                calulateSubscription,
                price,
                isDisable,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
