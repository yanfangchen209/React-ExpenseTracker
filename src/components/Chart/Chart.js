import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

//figure out max value of each year, pass month cost and lable to ChartBar component
export const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(item => item.value);
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
       {props.dataPoints.map(dataPoint => (
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
