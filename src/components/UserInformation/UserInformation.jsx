import React from 'react'
import UserDescription from './UserDescription/UserDescription'
import UserRepositoriesList from './UserRepositoriesList/UserRepositoriesList'
import WelcomeScreen from './WelcomeScreen/WelcomeScreen'
import ProblemScreen from './ProblemScreen/ProblemScreen'
import './UserInformation.css'

function UserInformation(props) {
    const { userData, userRepositories } = props
    return (
        <div className='UserInformation'>
            {userData ?
                userData.error ?
                    <ProblemScreen error={userData.error} />
                :
                    <div className='user-container'>
                        <UserDescription userData={userData} />
                        <UserRepositoriesList userRepositories={userRepositories} />
                    </div>
            :   
                <WelcomeScreen />
            }
        </div>
    )
  }
  
export default UserInformation