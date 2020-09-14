import React ,{useState} from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom'


const AddBirth =()=>{
  

 const goBackToDashBoard =()=>{
   return  (<div className="mt-5">
         <Link to="/user/dashboard" className="text-warning"> Back to Dashboard</Link> 
          </div>)
      
    }

    return (
        <Layout title="Add New Birth Certificate"
         description= {`Make sure the application is for the first time`} 
        
         >
       <div className="row">
        <div className="col-md-8 offset-md-2">
        {goBackToDashBoard()}
        </div>
       </div>

        </Layout>
    );

};

export default AddBirth;