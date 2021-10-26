import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { EmployeeMethodContext } from '../../App';

const Employee = ({employee}) => {
    const {_id, name, email, phone, designation, branch} = employee;
    const handleDeleteEmployee = useContext(EmployeeMethodContext);
    const history = useHistory();
    const handleUpdatePage = id => {
        history.push(`/employee/update/${id}`)
    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{designation}</td>
                <td>{branch}</td>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={ () => handleDeleteEmployee(_id)} type="button" class="btn btn-outline-primary"><i className="far fa-trash-alt"></i></button>
                    <button onClick={ () => handleUpdatePage(_id)} type="button" class="btn btn-outline-primary"><i className="fas fa-edit"></i></button>
                </div>
            </tr>
        </>
    );
};

export default Employee;