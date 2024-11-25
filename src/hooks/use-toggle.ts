import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean = false) => {
    const [isOn, setIsOn] = useState(initialValue);

    const setOn = useCallback(() => {
        setIsOn(true);
    }, []);

    const toggle = useCallback(() => {
        setIsOn((prev) => !prev);
    }, []);

    const setOff = useCallback(() => {
        setIsOn(false);
    }, []);

    return {
        isOn,
        toggle,
        setOn,
        setOff,
    };
};
