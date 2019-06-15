import React,{Component} from 'react';

import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      data:"",
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
    fetch('https://cors-anywhere.herokuapp.com/http://siesgst.edu.in/agnostech/login',
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
        isLoggedIn:true,
        items:data.items
        
      })
      }
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  render() {
    const {password,username,isLoggedIn,data}=this.state
    
   if(isLoggedIn){
     data.map=(()=>{
      
      this.setState({
        data
      })
     return(
       <div>  
          {data}
       </div>
     )
   },10)
   }
   else
   
   {
    return(

      <div>
      <input onChange={this.onChgtxt} placeholder={"user"} value={username} ></input>
      <input onChange={this.onPswdTxtChg} type={"password"} placeholder={"reactjs"} value={password}></input>
      <button onClick={this.Onclick}>.:CLICK HERE:.</button>  
      </div>  
 
    )
    
    
  }

}
}
export default App;
