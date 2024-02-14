import React from 'react'
import './ExpenseFilter.css';

export const Filter = (props) => {

    const selectHandler = (event) => {props.onAddFilter(event.target.value)}
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          {/**two way binding: value={props.selected}  */}
          <select value={props.selected} onChange={selectHandler}>
              <option value="All">All</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
          </select>
        </div>
    </div>
  )
}

export default Filter;

