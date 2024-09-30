import { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

function App() {

    //fetch('https://jsonplaceholder.typicode.com/users')
    const { robots, setRobots } = useState([]);
    const { searchField, setSearchField} = useState('');
    const { count, setCount} = useState(0); 

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1> :
            (
            <div className="tc">
                <h1>RoboFriends</h1>
                <button onClick={setCount(count + 1)}>Click Me</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
        
}

export default App;