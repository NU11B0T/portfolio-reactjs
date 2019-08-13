import React, {Component} from 'react';
import './Nav.css'
import logo from '../../Assets/Images/speed.svg';
import home from '../../Assets/Images/home.svg';
import person from '../../Assets/Images/person.svg';
import sheet from '../../Assets/Images/sheet.svg';
import clock from '../../Assets/Images/clock.svg';
import database from '../../Assets/Images/database.svg';
import setting from '../../Assets/Images/setting.svg';

class Nav extends Component {
  render(){
    return(
      <div className='Nav-container' >
        <img src={logo} className="Nav-logo" alt="logo" />
        <img src={home} className="Nav-home icon-size" alt="home" />
        <img src={person} className="Nav-person icon-size" alt="person" />
        <img src={sheet} className="Nav-sheet icon-size" alt="sheet" />
        <img src={clock} className="Nav-clock icon-size" alt="clock" />
        <img src={database} className="Nav-database icon-size" alt="database" />
        <img src={setting} className="Nav-setting icon-size" alt="setting" />
      </div>
    );
  }
}



export default Nav;
