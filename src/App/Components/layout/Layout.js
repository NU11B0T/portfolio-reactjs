import React, { Component } from 'react';
import './Layout.css';
import contact from '../../Assets/Images/contact.svg';
import Search from '../search/Search';


const Conatctheader = () =>{
    return(
        <div className='Contactheader-container'>
            <img className='Contact-logo' src={contact} alt='contact logo'/>
            <div className='Contact-text-container'>
                <div className='Contact-text'>Contacts</div>
                <div  className='Welcome-text'>Welcome to CRM Contact Page</div>
            </div>
            <div className="Sortby-container">
                <div className="Sortby-text">Sort by: </div>
                <div className="Date-text">Date Created</div>
            </div>
        </div>
    );
}




export class Layout extends Component {
    render() {
        return (
            <div className='Main-container'>
                <Conatctheader />
                <Search />
            </div>
        )
    }
}

export default Layout
