/* eslint-disable no-restricted-globals */
import React,{useState} from 'react';
import Layout from '../core/Layout';
import {Link} from 'react-router-dom';
import {signup} from '../auth'

const Signup=()=>{

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false

    })

    const {name,email,password,error,success}=values

    const handleChange=name=>event=>{
         setValues({...values,error:false,[name]:event.target.value})
    }

   

    const clickSubmit=event=>{
        event.preventDefault();
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
            if(data.error){
                console.log(data.error)
               setValues({...values,error:data.error,success:false})  
            }else{
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    success:true
                }) 
            }

        })
    };
 

    const signUpForm=()=>(
        <form >
            <div className="form-group">
                <label htmlFor="text-muted">Name</label>
                <input onChange={handleChange('name')}
                 type="text"
                  className="form-control"
                  value={name}
                  />

            </div>

            <div className="form-group">
                <label htmlFor="text-muted">Email</label>
                <input onChange={handleChange('email')} 
                type="email" 
                className="form-control"
                value={email}
                />
            </div>

            <div className="form-group">
                <label htmlFor="text-muted">Password</label>
                <input onChange={handleChange('password')} 
                type="password" 
                className="form-control"
                value={password}
                />
            </div>
           <button onClick={clickSubmit} className="btn btn-primary">Signup</button>
        </form>
    );

const showError=()=>
   (<div className="alert alert-danger" 
    style={{display:error?'':'none'}}>
        {error}
    </div>)



const showSuccess=()=>
    (<div className="alert alert-info" 
    style={{display:success?'':'none'}}>
       Account successfully created.Please <Link to="/signin">Signin</Link>
    </div>)



  return( 
       <Layout title="Signup" 
                 description="Sign up to Birth Registration System "
                 className="container col-md-8 offset-md-2"
                 >
    {showSuccess()}
    {showError()}
    {signUpForm()}
    
    
    </Layout>
    )
};

export default Signup;