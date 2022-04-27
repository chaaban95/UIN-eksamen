import React from "react";

const IceCream = ({css}) => {
    return(
        <React.Fragment>
            <main>
            <div className="ice-cream" data-testid="ice-cream">
          <div className="stick" />
          <div className="vanilla" />
          <div
            data-testid="ice-cream-flavour"
            className="flavour"
            data-css={css}
          >{""}</div>
            </div> 
            </main>
        </React.Fragment>
    )
}

export default IceCream