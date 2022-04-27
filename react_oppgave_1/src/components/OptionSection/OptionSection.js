import React from "react";

const OptionSection = ({children}) => {
    return(
        <React.Fragment>
            <section id="options" data-testid="options">
                {children}
            </section>    
        </React.Fragment>
    )
}

export default OptionSection