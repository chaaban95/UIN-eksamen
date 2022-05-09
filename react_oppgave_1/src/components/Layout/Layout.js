import React from "react";

const Layout = ({children}) => {
    return(
        <React.Fragment>
            <div className="layout" data-testid="layout">
                {children}
            </div>
        </React.Fragment>
    )
}

export default Layout