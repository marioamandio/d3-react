import React, { Component } from 'react'
import BarChart from './BarChart'
//import D3Intro from './D3Intro'
// import TryD3WithData from './TryD3WithData'
// import SvgWithReactintro from './SvgWithReactintro'
import * as data from './data/revenues.json'


class App extends Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      <h2>d3 dashboard</h2>
      </div>
      <div>
      <BarChart data={data.default}/>
      </div>
      </div>
   )
   }
}
export default App