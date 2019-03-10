import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';





class  App extends Component{

    constructor() {
        
        super()
        this.state =  {

            robots:[],
            searchfiled: ''
        }
     

    }
     
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then (users => {this.setState({robots:users})});
       
    }
      

    
    onSearchChange =(event) => {


        this.setState({searchfiled: event.target.value})


        console.log(event.target.value);


  
    



    }
    render() {

        const {robots,searchfiled} = this.state;

        const filterrobots = robots.filter(robots =>{


            return robots.name.toLowerCase().includes(searchfiled.toLowerCase());
        })


    

        if(!robots.length){

            return <h1>Loading</h1>
        }

        else
        
        {


            return (
                <div className ='tc'>         
                  <h1>RoboFriends</h1>
                  <SearchBox  SearchChange= {this.onSearchChange} />
                  <Scroll>
                  <CardList  robots  = {filterrobots} />
                  </Scroll>
                </div>
        
            );

        }


 
    }
}


export default App;