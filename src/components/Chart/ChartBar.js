import React from 'react'
import "ChartBar.css"

function ChartBar(props) {
  let barFillHeight = '0%'

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"
  }


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barFillHeight}}>{props.value} </div>
      </div>
      <label className="char-bar__label">{props.label}</label>
    </div>
  )
}

export default ChartBar
