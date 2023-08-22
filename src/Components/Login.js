import React, { Component } from 'react'
import axios from 'axios';
export class Login extends Component {

 constructor(){
     super();
 
     this.state={
         'first_name':'',
         'last_name':'',
         'email':'',
         'password':'',
         'message':''
     }
    
     this.eventHandler=this.eventHandler.bind(this);
    // this.handlesubmit=this.handlesubmit.bind(this);

 }


  eventHandler(event){
    var item=event.target.name;

   this.setState({
    [item]:event.target.value
   })
 } 


 handlesubmit(event){
     event.preventDefault();
     console.log(this.state.first_name);


     const {first_name,last_name,email,password}=this.state;

    var  formdata={
         'first_name':first_name,
         'last_name':last_name,
         'email':email,
         'password':password
     }
    

     console.log(formdata);



     axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/login',formdata)
     .then((response)=>{
         console.log(response)
         if(response.data.status){
           this.setState({'message':"Login Successfull"})
         }else{
          this.setState({'message':"Something Went Wrong"})
         }
     })
  
  
 }

 

  render() {
    return (
      <>
          <div className="container  ">
          <form className="form" onSubmit={this.handlesubmit.bind(this)}>
            <div className='card my-2'>
            <div className='card-header'>
            <h2>Login Here </h2>
            <h3 className='text-capitalize text-success'>{this.state.message}</h3>
            <p>Make the viewport larger than 768px wide to see that all of the form elements are inline, left aligned, and the labels are alongside.</p>
            </div>
            <div className='card-body text-left'>
            
                

                <div className="form-group">
                <label className="" for="email">Email:</label>
                <input type="email" className="form-control" name="email" onChange={this.eventHandler} value={this.state.email}></input>
                </div>


                <div className="form-group">
                <label className="" for="email">Password:</label>
                <input type="text" className="form-control" name="password" onChange={this.eventHandler} value={this.state.password}></input>
                </div>

                
              
               
           
            </div>
            <div className='card-footer'>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
            </div>
            </form>
            </div>
      </>
    )
  }
}

export default Login