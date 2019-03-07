import React,{Component} from 'react';
import CardList from './CardList';
import robots from './robot';
import  SearchBox from './SearchBox'
import 'tachyons';
import 'tachyons/css/tachyons.css'


class App extends Component{
    state ={
        myRobots:robots,
    }
    onChange =({target}) =>{
        // filter robots based on value
        const {value} = target;
        console.log(value)
        const newRobots = robots.filter( robot =>{
            if(robot.name.indexOf(value) != -1) return robot
        });
        console.log(newRobots)
        this.setState({myRobots:newRobots})
    }

    render(){
        return (
            <div className ='tc'>         
              <h1>RoboFriends</h1>
              <SearchBox onChange={this.onChange}/>
              <CardList  robots ={this.state.myRobots}/>
              {this.state.myRobots.length == 0 ? <span>No Results Found</span> : ''}
            </div>
        )
    }
}

export default App;