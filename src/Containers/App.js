import React, { Fragment, Component } from 'react';
import CardList from '../Components/CardList'
import './App.css'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    };

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
        console.log(e.target.value)

    }

    // REWATCH THE END OF VIDEO 210 //

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <Fragment>
                <header>
                    <h1>Robot Prisoner List</h1>
                </header>
                <main>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </main>
            </Fragment>
        )

    }
}


export default App;