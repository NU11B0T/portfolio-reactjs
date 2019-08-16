import React, { Component } from 'react';
import './profile.css';
import Avatar,{ ConfigProvider } from 'react-avatar';

export class profile extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='Profile-container'>
                <ConfigProvider colors={[ '#fff200', '#FE6C99', '#FF8075', ]}>
                    <Avatar className='avatar' size="70" round="40px"  name={this.props.profileData.name} />
                </ConfigProvider>
                <div className='Name-label' >{this.props.profileData.name}</div>
                <div className='Email-label'>{this.props.profileData.email}</div>
                <div>
                    <div className='Fullname-container'>
                        <div className='Field-label'>Full name: </div>
                        <div className='Value-label'>{this.props.profileData.name}</div>
                    </div>
                    <div className='Email-container'>
                        <div className='Field-label'>Email: </div>
                        <div className='Value-label'>{this.props.profileData.email}</div>
                    </div>
                    <div className='Phone-container'>
                        <div className='Field-label'>Phone: </div>
                        <div className='Value-label'>{this.props.profileData.phone}</div>
                    </div>
                    <div className='Company-container'>
                        <div className='Field-label'>Company: </div>
                        <div className='Value-label'>{this.props.profileData.company}</div>
                    </div>
                    <div className='Address-container'>
                        <div className='Field-label'>Address: </div>
                        <div className='Value-label'>{this.props.profileData.address}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default profile
