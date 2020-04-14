import React, { useState } from 'react';

function Form(props){
    const [user,setUser]=useState({email:'',password:''})
    const handleButton=(e)=>{
        e.preventDefault()
    }
    return(
        <div>
            <h2>Enter your details</h2>
            <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
    onChange={e=>setUser({...user,email:e.target.value})}
     aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"
    onChange={e=>setUser({...user,password:e.target.value})}
     id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleButton}>Submit</button>
    <h2>email-{user.email}</h2>
    <h2>password-{user.password}</h2>
</form>
</div>
    )
}

export default Form