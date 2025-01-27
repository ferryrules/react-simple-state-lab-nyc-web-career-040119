import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals =>
      <div className="row">{this.genRow(rowVals)}</div>
    )
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

//create one red row, fill in an array with that row 10 times
Matrix.defaultProps = {
  values: (() => {
    const redRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return new Array(10).fill(redRow)
  })()
}
