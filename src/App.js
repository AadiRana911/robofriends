import React, {Component} from 'react';
import Searchbox from './searchbox';
import CardList from './CardList';
import {robots} from './robots'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange(event){
        console.log(event.target.value);
    }
    render(){
        return(
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchChange = {this.onSearchChange} />
                <CardList robots = {this.state.robots}/>
            </div>
            
        );
    }
}

export default App;