import React from 'react'
import DropDownItem from "./../DropDownItem/DropDownItem"

const Dropdown = ({list,onSelection}) => {
  const displayList = () => {
    return list.map((row,index)=>{
      return <React.Fragment key={index} >
        <DropDownItem title={row.title} value={row.value} />
      </React.Fragment>
    })
  }
  return (
    <React.Fragment>
        <div
          className="option"
          data-testid="flavours"
          id="flavours"
        >
          <label htmlFor="flavour">
            <select defaultValue="chocolate" id="flavour" data-testid="flavour" onChange={onSelection} >
             {displayList()}
            </select>
          </label>
        </div>
    </React.Fragment>
  )
}

export default Dropdown