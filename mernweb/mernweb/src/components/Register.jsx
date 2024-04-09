import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
const Register = () => {
  
  const history = useHistory()
  const [user,setUser] = useState({
    username : "",
    email : "",
    password : ""
  });

  const handleInput = (event)=>{
    let name = event.target.name;
    let value=event.target.value;

    setUser({...user, [name]:value});
  }
  
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const {username,email, password} = user;
    try{

      const res = await fetch('/register', {
        method:"POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          username,email,password
        })
      })
      if(res.status === 400 || !res){
        window.alert("Already Used Details")
      }
      else{
        window.alert("Registered Successfully");
        history.push('/login')
      }
    }catch(error){
      console.log(error);
    }
  }
    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
            <div className="container">
                <div className="row ">
                    <div className="col-6 shadow p-5 mx-auto" style={{ backgroundColor: "white" }}>
                        <h1 className="display-6 fw-bolder mb-5">Register</h1>
                        <form onSubmit={handleSubmit} method='POST'>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Username</label>
                          <input type="text" class="form-control" id="name"
                            name="username"
                            value={user.username}
                            onChange={handleInput}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="email"
                            value={user.email}
                            onChange={handleInput}/>
    
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"
                            name="password"
                            value={user.password}
                            onChange={handleInput}/>
                        </div>
                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                        </div>
                        <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                        <button type="submit" class="btn btn-outline-primary w-100 mt-4">Register</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;