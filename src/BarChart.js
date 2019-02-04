import React, { Component } from 'react';
import * as d3 from "d3";


class BarChart extends Component {
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
    this.state = {
      width: 700,
      height: 400
    }
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

    const margin = {
      top: 10,
      left: 100,
      bottom: 100,
      right: 10
    }

    const svg = d3.select(node).append("svg")
        .attr("width",this.state.width)
        .attr("height",this.state.height)


    const chartArea = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
        .style("background-color", "black")

    chartArea.append("text")
      .attr("class", "x axis-label")
      .text("coffe revenues")
      .attr("x", (this.state.width-margin.left-margin.right)/2)
      .attr("y", this.state.height-margin.top-margin.bottom + 75)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")

    chartArea.append("text")
      .attr("class", "y axis-label")
      .text("Revenue $")
      .attr("x", -(this.state.height-margin.top-margin.bottom) /2)
      .attr("y", -65)
      .attr("transform", "rotate(-90)")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")


    
    //SCALES
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, this.state.width-margin.left-margin.right])
      .paddingInner(0.3)
      .paddingOuter(0.2)

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.profit)])
      .range([this.state.height-margin.top-margin.bottom, 0])


    //AXIS
    const xAxis = d3.axisBottom(xScale);

    chartArea.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${this.state.height-margin.bottom-margin.top})`)
      .call(xAxis)
      .selectAll("text")
        .attr("y", 10)
        .attr("x", -5)
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-40)")


    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat(d => `${d}$`)

    chartArea.append("g")
      .attr("class", "y axis")
      .call(yAxis)


    
    const rects = chartArea.selectAll("rect")
        .data(data)
        .enter()

        rects.append('rect')
          .attr('x', d => xScale(d.month))
          .attr('y', d => yScale(d.profit))
          .attr('height', d => this.state.height-margin.bottom-margin.top - yScale(d.profit))
          .attr('width', xScale.bandwidth)
          .attr('fill', "grey")
 }


  render() {
    return (
      <div ref={node => this.node = node}>
      {/*<svg 
        ref={node => this.node = node}
        width={this.state.width} 
        height={this.state.height} 
        style={{backgroundColor: "blue"}}
      >
    </svg> */}

      </div>
    );
  }
}

export default BarChart;
