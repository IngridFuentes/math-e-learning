import React from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login.js';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Content from './components/Content.js';


class App extends React.Component {

  // state ={
  //   content: [],
  // };
  
  // componentDidMount() {
  //     axios.get('/data/Pro_12633.json')
  //       .then(response => {
  //         console.log(response.data);
  //         this.setState({content: response.data });
  //       });
        
  // }
  render() {
    // const { content } = this.props
    // console.log(content)
    return(
      <div>Hello there
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/content" component={Content}/>
      </div>
    ) 
    
  }
}

export default App;
