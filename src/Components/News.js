import axios from 'axios';
import React, { Component } from 'react'

export class News extends Component {


    constructor(props) {
        super(props);
        this.state = {
            'userdata': '',
            'heading': 'Users List'
        }
    }


    componentDidMount() {

        
        axios.post('https://upnext1.com/Dev/aanganvadi_project/Api/user_list',
        ).then((response) => {

            
            const userData = response.data.responseData;


            this.setState({'userdata':userData})


           


        });
     
   


        




    }


    render() {

       const userlist=this.state.userdata;
       
       if(userlist!=""){

        for(var i=0;i<userlist.length;i++){ 
           return(<td>{userlist[i].first_name}</td>)
            

            
        }
           
       }else{
         
        return (
            <div><h1 className='text-center mt-5'>{this.state.heading}</h1>
                <table className='table'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>

                    </tr>
                    <tr>
                        <td colspan="3">No Record found</td>
                    </tr>
                    
                </table>
                
                
                
                </div>
        )
       }

       
    }
}

export default News