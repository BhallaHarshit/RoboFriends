import React, { Fragment, Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
        console.log("in constructor");
    }

    componentDidMount() {
        console.log("in componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then( userData => {
                this.setState({ robots: userData });
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        console.log("in render");
        if( this.state.robots.length === 0) {
            return(
                <h1 className="tc">Loading...</h1>
            )
        }
        else {
            return(
                <Fragment>
                    <div className='tc'>
                        <h1 className="f1">ROBOFRIENDS</h1>
                        <SearchBox searchChange={ this.onSearchChange }/>
                        <Scroll>
                            <CardList robots={ filteredRobots } />
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    }
}

export default App;