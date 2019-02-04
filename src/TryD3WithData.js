import React, { Component } from 'react';
import * as d3 from "d3";


class TryD3WithData extends Component {
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
    const data = this.props.data
    data.forEach(d => {
      d.revenue = +d.revenue
      d.profit = +d.profit
    })
    
    const circles = d3.select(node)
        .selectAll('circle')
        .data(data)
        .enter()

        circles.append('circle')
          .attr('cx', (d, i) => (i*100) + 20)
          .attr('cy', 50)
          .attr('r', d => {
            console.log(d.profit)
            return 20
          });
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

export default TryD3WithData;
