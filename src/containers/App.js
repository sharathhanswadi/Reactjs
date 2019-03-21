import React,{Component} from 'react';
import {connect}  from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import {setSearchField} from '../actions';


const mapStateToProps = state =>{
    return{
          
        searchField: state.searchField

    }
}


const mapDispatchProps = (dispatch) =>{

   return {
       onSearchChange:(event) =>dispatch(setSearchField(event.target.value))
    }
}


class  App extends Component{ded
    constructor() {
        
        super()
        this.state =  {

            robots:[],
        }   

    }     
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then (users => {this.setState({robots:users})});
       
    }

  
    render() {

        const {robots} = this.state;

        const {searchField,onSearchChange} = this.props;

        const filterrobots = robots.filter(robots =>{


            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?

             <h1>Loading</h1>:
        
        (
                <div className ='tc'>         
                  <h1>RoboFriends</h1>
                  <SearchBox  SearchChange= {onSearchChange} />
                  <Scroll>
                  <CardList  robots  = {filterrobots} />
                  </Scroll>
                  </div>
            );
        }
    }

export default connect(mapStateToProps,mapDispatchProps)(App);