import React, { Component } from 'react';
import {jsonResponse} from '../../Api/Data';
import plus from '../../Assets/Images/plus.svg';
import whiteplus from '../../Assets/Images/plus-white.svg';
import search from '../../Assets/Images/search.svg';
import Profile from '../profile/profile';
import './Search.css';
import Avatar,{ ConfigProvider } from 'react-avatar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export class Search extends Component {

    state = {
        query: "",
        data: [],
        filteredData: [],
        selectedData: ''
      };

    handleInputChange = event => {
        const query = event.target.value;
    
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });
    
          return {
            query,
            filteredData
          };
        });
      };


      getData = () => {


          const { query } = this.state;
          const filteredData = jsonResponse.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });

          this.setState({
            data: jsonResponse ,
            filteredData,
            selectedData: filteredData[0]
          });
      };

      componentWillMount() {
        this.getData();
      }


    render() {
        return (
          <div className='Contact-container'>
            <div>
                <div className='SA-container'>
                    <div className='Search-container'>
                        <input className='Search-input' type='text' id='filter' placeholder='Search Contacts' 
                            value={this.state.query}
                            onChange={this.handleInputChange} />
                        <img src={search} alt='search-icon'/>
                    </div>
                    <Button  bsPrefix='Add-button'>
                        <img src={whiteplus} alt=''/>
                        Add Contact 
                    </Button>
                </div>
                <div className='List-header'>
                    <img className='Plus-logo' src={plus} alt='plus-icon' />
                    <div className='BasicInfo-text'>Basic info</div>
                    <div className='Company-text'>Company</div>
                </div>
                <div>
                    {
                        this.state.filteredData.map(e => 
                            <div className="Contact-card" onClick={()=> this.setState({ selectedData:e })}>
                                <input className='Checkbox-input' type="checkbox" />
                                <div className='CustomerInfo-conatiner'>
                                    <ConfigProvider colors={[ '#fff200', '#FE6C99', '#FF8075', ]}>
                                        <Avatar className='avatar' size="40" round="20px"  name={e.name} />
                                    </ConfigProvider>
                                    <div className='CustomerInfo'>
                                        <div className='Contact-name'>{e.name}</div>
                                        <div className='Contact-email'>{e.email}</div>
                                    </div>
                                </div>
                                <div className='Contact-company'>{e.company}</div>
                            </div>
                            )
                    }
                </div>
            </div>
            <Profile profileData={this.state.selectedData} />
          </div>
        )
      }
    }

export default Search
