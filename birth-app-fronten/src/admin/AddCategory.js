import React ,{useState} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth'
import { Link } from 'react-router-dom'
import { createCategory } from './apiAdmin';

const AddCategory =()=>{
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    //destructure user and info from localStorage

    const {user,token}=isAuthenticated();

    const handleChange= (e)=>{
        setError('')
        setName(e.target.value)
    }   

    const clickSubmit=(e)=>{
        e.preventDefault(); 
        setError('')
        setSuccess(false)

        //making request to api to create category
        createCategory(user._id,token,{name})
        .then(data=>{
            if(data.error){
                setError(true)
            }else{
                setError('')
                setSuccess(true)

            }
        });
    };


    const newCategoryForm=()=>(
       <form onSubmit={clickSubmit}>
         <div className="form-group ">
           <label className="text-muted">Name</label> 
           <input type="" className="form-control mb-5"
            onChange={handleChange}
            value={name}
            autoFocus
            required
            />
        </div>  
        <button className="btn btn-outline-primary">
            Create Category</button>
       </form> 
    );
   
    const showSuccess =()=>{
        if(success){
        return <h3 className="text-success">
            Category <b>{name}</b> created successfully
            </h3>
        }
    }

    const showError =()=>{
        if(error){
        return <h3 className="text-danger">
          {error}
         Category  {name} already exists
            </h3>
        }
    }


    const goBackToDashBoard =()=>{
   return  (<div className="mt-5">
         <Link to="/admin/dashboard" className="text-warning"> Back to Dashboard</Link> 
          </div>)
      
    }

    return (
        <Layout title="Add New Category"
         description= {`Create a non-existing category`} 
        
         >
       <div className="row">
        <div className="col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
        {newCategoryForm()}
        {goBackToDashBoard()}
        </div>
       </div>

        </Layout>
    );

};

export default AddCategory;