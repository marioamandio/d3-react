import React, { Component } from 'react';
import * as d3 from "d3";


class D3Intro extends Component {
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
 }
 componentDidMount() {
    this.createBarChart()
 }
 componentDidUpdate() {
    this.createBarChart()
 }
 createBarChart() {
    const node = this.node
    d3.select(node)
        .append('rect')
          .attr('x', 25)
          .attr('y', 0)
          .attr('width', 150)
          .attr('height', 60)
          .attr('fill', "green")
 }


  render() {
    return (
      <div className="App">
      <svg 
        ref={node => this.node = node}
        width={700} 
        height={300} 
        style={{backgroundColor: "blue"}}
      >
      </svg>

      </div>
    );
  }
}

export default D3Intro;
