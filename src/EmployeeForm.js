import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './components/common';
import { connect } from 'react-redux';
import { employeeUpdate } from './actions'

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        placeholder="Full Name"
                        label="Name"
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="555-555-5555"
                        label="Phone"
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection style={styles.sectionStyle}>
                    <Text style={styles.pickerStyle} >Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value=> this.props.employeeUpdate({prop: 'shift', value}) }>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    sectionStyle: {
        flexDirection: 'column'
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.emp;
    return {
        name, phone, shift
    }
}

export default connect(mapStateToProps,{
    employeeUpdate
})(EmployeeForm);

