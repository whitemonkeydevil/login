import React,{Component} from 'react';

import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      isLoggedIn:false
    }
  }

  onChgtxt=(e)=>{
    this.setState({
      username:e.target.value
      
    })
    console.log(e.target.value)
  }
  onPswdTxtChg=(e)=>{
    this.setState({
      password:e.target.value
      
    })
    console.log(e.target.value)
  }

  
  Onclick=(e)=>{
    const{username,password}=this.state;
    fetch('https://cors-anywhere.herokuapp.com/https://us-central1-plusbeat-a5425.cloudfunctions.net/submitResponse',
    {   
       method:'POST',
       headers:{
         'Content-Type' : 'application/json'
        },
      body:JSON.stringify({
          email:username,
          password:password
       })
    })
    
    .then(res => res.json())
    .then((data) => { 
      if(data.status==="success")
      { this.setState({
        isLoggedIn:true
      })
      }
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  render() {
    const {password,username,isLoggedIn}=this.state
   if(isLoggedIn){
     return(
       <div><h1>HOLY COW!</h1></div>
     )
   }
   else
   {
    return(

      <div>
      <input onChange={this.onChgtxt} placeholder={"naam"} value={username} ></input>
      <input onChange={this.onPswdTxtChg} type={"password"} placeholder={"pawswad"} value={password}></input>
      <button onClick={this.Onclick}>Low budget Button</button>  
      </div>
 
    )
    
  }

}
}
export default App;
