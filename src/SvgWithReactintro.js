import React, { Component } from 'react';


class SvgIntro extends Component {
//   constructor(props){
//     super(props)
//     this.createBarChart = this.createBarChart.bind(this)
//  }
//  componentDidMount() {
//     this.createBarChart()
//  }
//  componentDidUpdate() {
//     this.createBarChart()
//  }
//  createBarChart() {
//  }


  render() {
      console.log(this.props)
    return (
      <div className="App">
      <svg ref={node => this.node = node}
      width={700} height={300} style={{backgroundColor: "blue"}}>
        <rect x={0} y={0} width={50} height={50} fill="grey" stroke="green" strokeWidth={5}></rect>
        <circle cx={90} cy={25} r={10} fill="red"></circle>
        <line x1={10} y1={10} x2={200} y2={100} stroke="violet" strokeWidth={5} ></line>
        <text x={30} y={200} fontSize={30} fill={"orange"} textAnchor="middle">Hello world</text>
      </svg>

      </div>
    );
  }
}

export default SvgIntro;
