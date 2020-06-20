import React, { Fragment } from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList'
import {robots} from './robots'

const App = () => {
    return(
        <Fragment>
            <div className='tc pa4'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        </Fragment>
    );
}

export default App;