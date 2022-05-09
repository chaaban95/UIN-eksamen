import React from "react";

const OptionSection = ({children}) => {
    return(
            <section id="options" data-testid="options">
                {children}
            </section>    
    )
}

export default OptionSection