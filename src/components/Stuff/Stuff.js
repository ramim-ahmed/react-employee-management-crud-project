import React, { useContext } from 'react';
import { EmployeesContext } from '../../App';
import Employee from '../Employee/Employee';
import './Stuff.css';
const Stuff = () => {
    const [employees] = useContext(EmployeesContext);
    console.log(employees);
    return (
        <div>
            <h1 style={{textAlign:'center', margin:'25px 0px'}}>Total Employee: {employees.length}</h1>
           <div style={{backgroundColor:'white', padding:'15px'}}>
               <table class="table">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>Designation</th>
                           <th>Branch</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                        {
                            employees.map(employee => <Employee key={employee._id} employee={employee} />)
                        }
                   </tbody>
               </table>
           </div>
        </div>
    );
};

export default Stuff;