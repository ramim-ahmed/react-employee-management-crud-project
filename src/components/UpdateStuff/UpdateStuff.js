import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import './UpdateStuff.css';
const UpdateStuff = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const designationRef = useRef();
    const branchRef = useRef();
    useEffect( () => {
        const url = `http://localhost:5000/employee/${id}`;
        fetch(url)
        .then( res => res.json())
        .then( data => {
            setEmployee(data)
        })
    }, [id]);


    const handleUpdateEmployee = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const designation = designationRef.current.value;
        const branch = branchRef.current.value;
        const UpdateEmployee = {
            name, 
            email,
            phone,
            designation,
            branch
        }
        const url = `http://localhost:5000/employee/${id}`;
        fetch(url, {
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(UpdateEmployee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Update Successfully');
                <Redirect to="/" />
            }
        })
    }

    const {name, email, phone, designation, branch} = employee;
    return (
        <div>
        <h1 style={{margin:'25px 0px'}}>Update Employee</h1>
        <form onSubmit={handleUpdateEmployee}>
            <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input defaultValue={name} ref={nameRef} type="text" class="form-control" id="name"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input defaultValue={email} ref={emailRef} type="email" class="form-control" id="email"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-10">
                    <input defaultValue={phone} ref={phoneRef} type="number" class="form-control" id="phone"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="designation" class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-10">
                    <input defaultValue={designation} ref={designationRef} type="text" class="form-control" id="designation"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="branch" class="col-sm-2 col-form-label">Branch</label>
                <div class="col-sm-10">
                    <input defaultValue={branch} ref={branchRef} type="text" class="form-control" id="branch"/>
                </div>
            </div>
            <input class="btn btn-outline-success" type="submit" value="Update" />
        </form>
    </div>
    );
};

export default UpdateStuff;