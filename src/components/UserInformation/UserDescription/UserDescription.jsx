import React from 'react';
import './UserDescription.css'

function UserDescription(props) {
    const { userData } = props
    return (
        <div className='UserDescription'>
            <div className='user-main-information'>
                <img alt='userImage' className='user-image' src={userData.avatar} />
                <div className='username'>
                    {userData.name}
                </div>
            </div>
            <div className='user-description'>
                {userData.bio}
            </div>
        </div>
    )
  }

  export default UserDescription