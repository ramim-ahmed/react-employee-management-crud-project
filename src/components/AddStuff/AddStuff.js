import React, { useRef } from 'react';
import './AddStuff.css';
const AddStuff = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const designationRef = useRef();
    const branchRef = useRef();
     
    const handleAddUser = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const designation = designationRef.current.value;
        const branch = branchRef.current.value;
        const newUser = {
            name, 
            email,
            phone,
            designation,
            branch
        }
      fetch('http://localhost:5000/employee',{
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(newUser)
      })
      .then( result => result.json())
      .then( data => {
          if(data.insertedId){
              alert('Employee Successfully Added');
              e.target.reset();
          } else {
              alert('wrong!! please try again later')
          }
      })
    }
  return (
    <div>
        <h1 style={{margin:'25px 0px'}}>Add New Employee</h1>
        <form onSubmit={handleAddUser}>
            <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input ref={nameRef} type="text" class="form-control" id="name"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input ref={emailRef} type="email" class="form-control" id="email"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-10">
                    <input ref={phoneRef} type="number" class="form-control" id="phone"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="designation" class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-10">
                    <input ref={designationRef} type="text" class="form-control" id="designation"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="branch" class="col-sm-2 col-form-label">Branch</label>
                <div class="col-sm-10">
                    <input ref={branchRef} type="text" class="form-control" id="branch"/>
                </div>
            </div>
            <input class="btn btn-outline-success" type="submit" value="ADD EMPLOYEE" />
        </form>
    </div>
    );
};

export default AddStuff;