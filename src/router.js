import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene 
                    rightTitle="Add"
                    onRight={()=> Actions.createEmployee() }
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees"
                    initial
                    />
                    <Scene key="createEmployee"
                    title="Create Employee"
                    component={EmployeeCreate}
                    />
                    <Scene key="editEmployee"
                    title="Edit Employee"
                    component={EmployeeEdit}
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
