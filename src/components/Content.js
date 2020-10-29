import React from 'react';
import axios from 'axios';

export default class Content extends React.Component {
    state = {
        contentList: {},
    }
     
    
    componentDidMount(){
        axios.get('/data/Pro_12633.json')
        .then(response => {
           if ( response !== "undefined" ) {
            console.log(response.data.Standard.StandardName)
            this.setState({contentList: response.data});
           }

          });
        
    }

    render() {
        return(
            
            <div> {this.state.contentList.Standard.StandardName} </div>
        )

    }

}

