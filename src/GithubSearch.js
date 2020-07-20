import React, { Component } from 'react';
import Header from './components/Header/Header';
import UserInformation from './components/UserInformation/UserInformation';
import { getUser, getUserRepositories } from './apis/GithubAPI/GithubAPI'
import './GithubSearch.css';

class GithubSearch extends Component {
  constructor() {
    super()
    this.state = {
      userData: null,
      userRepositories: []
    }
  }

  render() {
    const { userData, userRepositories } = this.state
    return (
      <div className="GithubSearch">
        <div className='github-search-container'>
          <Header searchUser={this.searchUser} />
          <UserInformation userData={userData} userRepositories={userRepositories} />
        </div>
      </div>
    );
  }

  searchUser = async (user) => {
    let userRepositories = [];
    const userData = await getUser(user)
    if (!userData.error) {
      userRepositories = await getUserRepositories(user)
    }

    this.setState({ 
      userData: userData, 
      userRepositories: userRepositories.length > 0 && this.selectTop3MostRankedRepositories(userRepositories) 
    })
  }

  selectTop3MostRankedRepositories = (userRepositories) => {
    return userRepositories
      .sort((a,b) => (a.stargazers_count < b.stargazers_count) ? 1 : ((b.stargazers_count < a.stargazers_count) ? -1 : 0)) 
      .slice(0, 3) 
  }
}

export default GithubSearch;
