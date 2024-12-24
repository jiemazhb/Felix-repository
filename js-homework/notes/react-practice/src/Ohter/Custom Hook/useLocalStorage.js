import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        console.log("useState");
        
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;

        } catch (error) {
            console.warn("Error reading localStorage key:", key, error);
            return initialValue;
        }
    });


    const setValue = (value) => {        
        console.log("setValue");
        
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn("Error setting localStorage key:", key, error);
        }
    };

    useEffect(() => {

        console.log(`useEffect`);
        
        const handleStorageChange = (event) => {
            console.log("handleStorageChange");
            
            if (event.key === key) {
                try {
                    setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
                } catch (error) {
                    console.warn("Error parsing localStorage event data:", error);
                }
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [key, initialValue]);


    return [storedValue, setValue];

}
