import React from 'react'
import './ExpenseFilter.css';

//parent component: Expenses
export const Filter = ({selected, onAddFilter}) => {

    const selectHandler = (event) => {onAddFilter(event.target.value)}
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          {/**two way binding: value={props.selected}  */}
          <select value={selected} onChange={selectHandler}>
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

