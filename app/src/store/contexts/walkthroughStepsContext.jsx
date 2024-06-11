import React, { createContext, useMemo, useState } from 'react';
export const WalkthroughStepsContext = createContext();

export default function WalkthroughStepsProvider({ children }) {
    const [walkthroughStep, setWalkthroughStep] = useState(0)
    const [completed, setCompleted] = useState(false)

    const contextValue = useMemo(() => {
        return {
            walkthroughStep,
            setWalkthroughStep,
            setCompleted,
            completed
        };
    }, [walkthroughStep, setWalkthroughStep, setCompleted, completed]);

    return (
        <WalkthroughStepsContext.Provider value={contextValue}>
            {children}
        </WalkthroughStepsContext.Provider>
    );
}
