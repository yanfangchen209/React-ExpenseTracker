import React from 'react'

export const Filter = (props) => {

    const selectHandler = (event) => {props.onAddFilter(event.target.value)}
  return (
    <div>
        <span>Filter by year： </span>
        {/**two way binding: value={props.selected}  */}
        <select value={props.selected} onChange={selectHandler}>
            <option value="All">All</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>

    </div>
  )
}

export default Filter;

