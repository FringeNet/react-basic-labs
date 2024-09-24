import { useState } from 'react';

export default function useStateCached(key, defaultValue) {
    const [state, setState] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue);
    const setCachedState = (newState) => {
        setState(newState);
        localStorage.setItem(key, JSON.stringify(newState));
    }
    return [state, setCachedState];
}