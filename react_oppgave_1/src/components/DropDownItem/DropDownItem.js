import React from 'react'

const DropDownItem = ({title, value}) => {
  return (
        <option data-testid="option" value={value}>
            {title}
        </option>
  )
}

export default DropDownItem