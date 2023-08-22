import React, { Component } from 'react'
import axios from 'axios';
export class Register extends Component {

  constructor() {
    super();

    this.state = {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'message':''
    }

    this.eventHandler = this.eventHandler.bind(this);
    // this.handlesubmit=this.handlesubmit.bind(this);

  }


  eventHandler(event) {
    // ye form wala name hai 
    var item = event.target.name;

    this.setState({
      [item]: event.target.value
    })
  }


  handlesubmit(event) {
    event.preventDefault();
    // with the help of preventdefault hum form ko submit hone se rok rhe hai
    console.log(this.state.first_name);

    // distructuring use ki hai 
    // in place of this.state.first-name fir this.state.lastname

    const { first_name, last_name, email, password } = this.state;

    // ye data ka format api se backend developer send kr rha hai 
    var formdata = {
      'first_name': first_name,
      'last_name': last_name,
      'email': email,
      'password': password
    }
    // formdata object se hum fir se data api ko send krenge


    console.log(formdata);



     axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/register',formdata)
     .then((response)=>{
         console.log(response)
         this.setState({'message':'you have registered Successfully'})

     })


  }



  render() {
    return (
      <>
        <div className="container  ">
          <form className="form" onSubmit={this.handlesubmit.bind(this)}>
            <div className='card my-2'>
              <div className='card-header'>
                <h2>Register Here </h2>
                <h3 className='text-success'>{this.state.message}</h3>
                <p>Make the viewport larger than 768px wide to see that all of the form elements are inline, left aligned, and the labels are alongside.</p>
              </div>
              <div className='card-body text-left'>

                <div className="form-group">
                  <label className="" for="email">First Name:</label>
                  <input type="text" className="form-control" name="first_name" onChange={this.eventHandler.bind} value={this.state.first_name}></input>

                </div>
                <div className="form-group">
                  <label className="" for="email">Last Name:</label>
                  <input type="text" className="form-control" name="last_name" onChange={this.eventHandler} value={this.state.last_name}></input>
                </div>

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

export default Register