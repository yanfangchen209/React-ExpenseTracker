import React from 'react'
import './ChartBar.css';

//figure out bar height and label according to month cost and draw bar
//parent component: Chart.js
export const ChartBar = ({value, maxValue, label}) => {
    let barFillHeight = '0%';
    if(maxValue > 0){
        barFillHeight = Math.round((value/maxValue) * 100) + '%';
    }
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
