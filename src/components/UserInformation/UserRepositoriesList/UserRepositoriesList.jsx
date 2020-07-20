import React from 'react'
import UserRepository from './UserRepository/UserRepository'
import './UserRepositoriesList.css'

function UserRepositoriesList(props) {
    const { userRepositories } = props
    return (
        <div className='UserRepositoriesList'>
            <div className='respositories-title'>
                Top repositories:
            </div>
            {userRepositories.length > 0 ? 
                userRepositories.map((repository) => {
                    return (
                        <UserRepository repository={repository} key={repository.name} />
                    )})
            : 
                <div className='no-repositories'>
                    Sorry but this user hasn`t any repositories
                </div>
            }
        </div>
    )
  }

  export default UserRepositoriesList