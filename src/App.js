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
      if(data.status)
      { this.setState({
        isLoggedIn:true,
        data:data.data

      })
      }
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  render() {
    const {password,username,isLoggedIn,data}=this.state
    
   if(isLoggedIn){
     return(
       <div>
         {data.map((value)=>{
      const{branch,created_at,description,file_location,id,image_location,status,sub_type,title,type,updated_at,year}=value
     return(
       <div>  
          <p>{branch}</p>
          <p>{created_at}</p>
          <p>{description}</p>
         <p>{file_location}</p>
         <p>{id}</p>
         <p>{image_location}</p>
         <p>{status}</p>
         <p>{sub_type}</p>
         <p>{title}</p>
         <p>{type}</p>
         <p>{updated_at}</p>
         <p>{year}</p>
       </div>
     )
        }
        )  
        }
       </div>
     )
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
