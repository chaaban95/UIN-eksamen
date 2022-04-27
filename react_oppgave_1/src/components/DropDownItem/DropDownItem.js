import React from 'react'

const DropDownItem = ({title, value}) => {
  return (
    <React.Fragment>
        <option data-testid="option" value={value}>
            {title}
        </option>
    </React.Fragment>
  )
}

export default DropDownItem