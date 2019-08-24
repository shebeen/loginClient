import React from 'react';
import Login from './login';
import Home from './home';

class App extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {response: null}
  }

  handleSubmit = async function(event){
    event.preventDefault();
    let cred = {"username":event.target.username.value,
                "password":event.target.password.value
              }
    await fetch('http://localhost:8080/login/', {
      method: 'POST',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(cred)
      })
    .then(res => res.json())
    .then(async (data) => {
      if(data.response == 'failed'){
        await this.setState({"failure":true});
      }
      else{
        await this.setState({"failure":false});
      }
      await this.setState({"response":data.response});
    })        
  }
  
  signOut() {
    this.setState({response: null})
  }
  
  render() {
    return (
      <div>
        { 
          (this.state.response!=null && this.state.response!='failed') ? 
            <Home response={this.state.response} onSignOut={this.signOut.bind(this)}/>
          : <Login handleSubmit={this.handleSubmit.bind(this)} failure={this.state.failure}/>
        }
      </div>
    )
    
  }
  
}
export default App;
