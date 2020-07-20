import React from 'react';
import ProblemImage from '../../../assets/problem.png'
import './ProblemScreen.css'

function ProblemScreen(props) {
    const { error } = props
    return (
        <div className='ProblemScreen'>
            <img src={ProblemImage} alt='problemImage' className='problem-image' />
            {displayError(error)}
        </div>
    )
}

const displayError = (error) => {
    if (error === 404) return 'Sorry but this user does not exist'
    if (error === 403) return 'Sorry but API rate limit exceeded'
    if ('/^5'.test(error)) return 'Sorry there is a problem with Github service'
}

export default ProblemScreen