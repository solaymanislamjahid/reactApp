import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

     state = {posts: []};
    }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
 

    render() {
    	
      return console.log(this.state)
    }
  }
export default App;


