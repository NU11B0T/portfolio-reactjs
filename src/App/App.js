import React, {Component} from 'react';
import './App.css';
import Nav from './Components/nav/Nav';
import Layout from './Components/layout/Layout';
// import Buttom from 'react-bootstrap/Button';


class App extends Component {
  render(){
    return(
      <div>
      <Nav />
      <Layout />
      </div>
    );
  }
}



export default App;
