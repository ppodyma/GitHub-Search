import React from 'react';
import './UserRepository.css'

function UserRepository(props) {
    const { name, html_url } = props.repository
    return (
        <div className='UserRepository'>
            <a target="_blank" href={html_url} rel="noopener noreferrer">{name}</a>
        </div>
    )
  }

export default UserRepository