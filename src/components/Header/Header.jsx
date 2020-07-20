import React, { Component } from 'react';
import magnifierIcon from '../../assets/magnifierIcon.png'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  handleChange = (e) => this.setState({ inputValue: e.target.value })

  searchUser = () => this.props.searchUser(this.state.inputValue)

    render() {
      return (
        <div className='Header'>
          <div className='header-container'>
            <div className='input-container'>
              <img className='magnifier-icon' alt='magnifierImage' src={magnifierIcon} />
              <input className='search' placeholder={'Search for users'} onChange={this.handleChange} />
            </div>
            <button className='search-button' onClick={this.searchUser}>Search</button>
          </div>
        </div>
      )
    }
  }

  export default Header