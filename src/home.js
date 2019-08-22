import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
    return (
    <div>
        <strong>{this.props.response}</strong>!
        <p><a href="javascript:;" onClick={this.props.onSignOut}>Sign out</a></p>
    </div>
    );
  }
}
  
