import React, { createContext, useState, useEffect } from "react";
export const PortalContext = createContext();

const PortalContextProvider = props => {
    const [portalState, setPortalState] = useState(() => {
        return JSON.parse(localStorage.getItem('portalState'));
    });


    useEffect(() => {
        if(portalState)
            localStorage.setItem('portalState', JSON.stringify(portalState));
        else
            localStorage.removeItem('portalState')
    });

    return (
        <PortalContext.Provider value={{ portalState, setPortalState }}>
            {props.children}
        </PortalContext.Provider>
    );
};

export default PortalContextProvider;
