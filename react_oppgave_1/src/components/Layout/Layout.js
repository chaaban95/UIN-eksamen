import React from "react";

const Layout = ({children}) => {
    return(
            <div className="layout" data-testid="layout">
                {children}
            </div>
    )
}

export default Layout