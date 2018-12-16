import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Confirm, Button } from './components/common';
import { connect } from 'react-redux';
import {  } from './actions';
import EmployeeForm from './EmployeeForm';
import { 
    employeeUpdate, 
    employeeSave, 
    employeeDelete } from './actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.employee, (value, prop)=> {
            this.props.employeeUpdate({prop,value});
        })
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid });
    }
    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your next shift is ${shift}`);
    }
    onDeletePress() {
        this.setState({showModal: !this.state.showModal});
    }
    onAccept() {
        this.props.employeeDelete(this.props.employee);
        this.setState({showModal: false});
    }
    onDecline() {
        this.setState({showModal: false});
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save</Button>                    
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text</Button>                    
                </CardSection>
                <CardSection>
                    <Button onPress={this.onDeletePress.bind(this)}>Delete</Button>                    
                </CardSection>
                <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.emp;
    return { name, phone, shift };
}

export default connect(
    mapStateToProps,{
        employeeUpdate,
        employeeSave,
        employeeDelete
})(EmployeeEdit);
