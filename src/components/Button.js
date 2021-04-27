import React from 'react'

const StarWarsApp = ({fetching, setNextFetching}) => {
    return (
        <div className='mt-5'>
        <button type='button' className='mb-5 btn btn-primary btn-lg btn-block' onClick={() => setNextFetching(!fetching)}>Next</button>
        </div>
    )
}

export default StarWarsApp
