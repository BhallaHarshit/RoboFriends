import React, { Fragment, Component } from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList'
import {robots} from './robots'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return(
            <Fragment>
                <div className='tc pa4'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <CardList robots={ filteredRobots } />
                </div>
            </Fragment>
        );
    }
}

export default App;