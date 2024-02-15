import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

//figure out max value of each year, pass month cost and lable to ChartBar component
//parent component: ExpenseChart.js
export const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map(item => item.value);
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
       {dataPoints.map(dataPoint => (
       <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
        />))}
    </div>
  )
}

export default Chart;
