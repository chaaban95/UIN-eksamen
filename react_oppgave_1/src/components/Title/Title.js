import React from "react";

const Title = ({value}) => {
    return(
        <React.Fragment>
            <h1 data-testid="title"> {value} </h1>
        </React.Fragment>
    )
}

export default Title