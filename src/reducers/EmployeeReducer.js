import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVED,
    EMPLOYEE_DELETED
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVED:
            return INITIAL_STATE;
        case EMPLOYEE_DELETED:
            return state;
        default:
            return state;
    }
}

