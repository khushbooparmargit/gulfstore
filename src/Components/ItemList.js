import axios from 'axios';
import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata:[],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch data from API
    axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/user_list',
    ).then((response) => {

        const userData = response.data.responseData;
       
       this.setState({'userdata':userData})
       this.setState({'loading':false})

      console.log(this.state.userdata)
       
    });

  }

  render() {
 
    if(this.state.error){
      return(
        <>
        <h1>{this.state.error}</h1>
        </>
      )
    }

    if(this.state.loading){
      return(
        <>
        <h1>Please wait .......... loading</h1>
        </>
      )
    }


  var items=this.state.userdata;
  console.log(items);
   
  return(
      <>

      <h1 className='text-center my-5'>Users List</h1>

<table className='table my-3'>
  <tr>
    <th>Sr. No</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Password</th>
  </tr>
          {items.map(item => (
          <tr>
            {/* map function chal rha h jo array k item ko nikalta h */}
            <td key={item.id}>
              {item.id}
          
            </td>
            {/* item.first_name  ye api se aa rha hai */}
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            </tr>
          ))}
        </table>
     
      </>
    )
   
    
  }
}

export default ItemList;
