import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AddStuff from "./components/AddStuff/AddStuff";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Stuff from "./components/Stuff/Stuff";
import UpdateStuff from "./components/UpdateStuff/UpdateStuff";

export const EmployeesContext = createContext()
export const EmployeeMethodContext = createContext()
function App() {

  const [employees, setEmployees] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/employee')
    .then(res => res.json())
    .then(data => {
      setEmployees(data)
    })
  }, []);

  const handleDeleteEmployee = id => {
    console.log(id);
    const url = `http://localhost:5000/employee/${id}`;
    const proceed = window.confirm('Are you sure delete employe??');
    if(proceed) {
        fetch(url,{
          method:'DELETE'
        })
        .then( res => res.json())
        .then( data => {
          if(data.deletedCount > 0) {
            alert('delete Successfully!');
            const deleteAfterUser = employees.filter( employee => employee._id !== id);
            setEmployees(deleteAfterUser);
          }
        })
    }
    
  }
  
  return (
    <div>
      <EmployeeMethodContext.Provider value={handleDeleteEmployee}>
      <EmployeesContext.Provider value={[employees]}>
     <Router>
       <Header />
          <Layout>
            <Switch>
                <Route exact path='/'>
                  <Stuff />
                </Route>
                <Route exact path='/employee'>
                  <Stuff />
                </Route>
                <Route exact path='/add'>
                  <AddStuff />
                </Route>
                <Route exact path='/employee/update/:id'>
                  <UpdateStuff />
                </Route>
            </Switch>
          </Layout>
     </Router>
     </EmployeesContext.Provider>
     </EmployeeMethodContext.Provider>
    </div>
  );
}

export default App;
