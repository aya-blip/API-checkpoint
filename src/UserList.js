import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './UserList.css';

export const UserList = () => {
    //listOfUSer
    /*state = {
        persons: {}
    }*/  
    
    const [listOfUSer, setListOfUSer] = useState([])
    const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
        
        function fetchData() {
            axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              const users = res.data;
              setListOfUSer( users );
            }) 
           
            .catch(function (error) {
                // handle error
                console.log("erreur msg : ",error);
              })
         
        }
     
        fetchData();
      });
   

    return (
        <div className="box">
              {listOfUSer.map(el=>
              <div> <span className='name'>Name:</span>  {el.name} <br/> <span className='name'>Username:</span> {el.username} <br/> <span className='name'>Email:</span>  {el.email} <br/> <hr/>
              
              
              </div>
              

              )}
        </div>
    )
}