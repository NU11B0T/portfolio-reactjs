import React, { Component } from 'react';
import Geo from './Components/Geo/Geo';
import './App.css';
import Records from './Components/Records/Records';



export default class App extends Component {
  constructor(props){
    super(props);
    this.geo = React.createRef();
  }

  recordToGeo(row){

    // Structuring Data for Chart
    const structuredRow = {
      data: row
    }

    this.geo.current.openBubble(structuredRow);
  }


  render() {
      return(
        <div className='App'>
        <Geo ref={this.geo} />
        <Records sendRecord={(row) => this.recordToGeo(row)}/>
      </div>
    );
      
    }
}

