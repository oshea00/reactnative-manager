import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from './actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    }

    renderItem(employee) {
        return <ListItem employee={employee.item}/>;
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={(employee)=>employee.uid}
            />
        );
    }
};

const mapStateToProps = state => {
    const employees = _.map(state.emps, (val,uid) => {
        return { ...val, uid };
    });
    return { employees };
}
export default connect(mapStateToProps,{
    employeesFetch
})(EmployeeList);