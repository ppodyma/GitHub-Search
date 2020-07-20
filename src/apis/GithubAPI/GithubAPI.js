import axios from 'axios'

const API = 'https://api.github.com/users/'

export function getUser(user) {
    return axios.get(`${API}${user}`)
        .then(response => {
            const { data } = response

            const userData = {
                avatar: data.avatar_url,
                name: data.name || data.login,
                bio: data.bio
            }
            return userData
        })
        .catch((error) => {
            const userData = {
                error: error.response.status
            }
            return userData
        })
}

export function getUserRepositories(user) {
    return axios.get(`${API}${user}/repos`)
        .then((response) => response.data)
        .catch((error) => console.log('Error', error))
}