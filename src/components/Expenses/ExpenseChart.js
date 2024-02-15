import React from 'react'
import Chart from '../Chart/Chart';

//parent component: expenses
export const ExpenseChart = ({expenses}) => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'June', value: 0},
        {label: 'July', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    //within same year, get total cost for each month, then pass data to Chart component
    for(const expense of expenses){
        const expenseMonth = expense.date.getMonth(); //new Date(2019, 8, 14) represents september, getMonth() return 8 and represent September.
        chartDataPoints[expenseMonth].value += expense.cost;
    }

  return (
    <Chart  dataPoints={chartDataPoints}/>
  )
}

export default ExpenseChart;
