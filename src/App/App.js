import React, {Component} from 'react';
import './App.css';
import Nav from './Components/nav/Nav';
import Layout from './Components/layout/Layout';
import Header from './Components/header/header';


class App extends Component {
  render(){
    return(
      <div>
      <Nav />
      <Header />
      <Layout />
      </div>
    );
  }
}



export default App;
