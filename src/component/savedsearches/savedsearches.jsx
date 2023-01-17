import React from 'react'
import "./savedsearches.css"

const SavedSearches = ({ saved }) => {


    const savedResult = saved.map((el) => {
        return (
            <div className="saved-box">
                <div className="card">
                    <a>{el}</a>
                </div>

            </div>
        )
    })

    return (
        <>
            <div className='title'>
                <h1>saved <span>Searches</span></h1>
            </div>
            <div className='container'>
                {savedResult}
            </div>
        </>);
}

export default SavedSearches;