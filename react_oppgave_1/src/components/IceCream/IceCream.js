import React from "react";

const IceCream = ({css}) => {
    return(
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
    )
}

export default IceCream