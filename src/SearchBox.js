import React, { Fragment } from 'react'

const SearchBox = () => {
    return(
        <Fragment>
            <form className='pa2'>
                <input
                    className='pa3 ba b--green bg-lightest-blue'
                    type="text" 
                    placeholder="search..." 
                />
            </form>
        </Fragment>
    )
}

export default SearchBox;