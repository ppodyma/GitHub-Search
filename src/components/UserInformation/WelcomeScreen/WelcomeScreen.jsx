import React from 'react';
import HelloImage from '../../../assets/hello.png'
import './WelcomeScreen.css'

function WelcomeScreen() {
    return (
        <div className='WelcomeScreen'>
            <img className='hello-image' alt='helloImage' src={HelloImage} />
            Welcome to the app, start searching for users
        </div>
    )
  }

  export default WelcomeScreen