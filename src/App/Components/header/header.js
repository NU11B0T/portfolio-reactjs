import React, { Component } from 'react';
import search from '../../Assets/Images/search.svg';
import './header.css';
import mail from '../../Assets/Images/mail.svg';
import notification from '../../Assets/Images/notification.svg';

export class Header extends Component {
    render() {
        return (
            <div className="Header-container" >
                <img src={search} alt='' />
                <div class="main-nav">
                    <div>+Add</div>
                    <img src={mail} alt='' />
                    <div>Mark Henry</div>
                    <img src={notification} alt='' />
                </div>
            </div>
        )
    }
}

export default Header
