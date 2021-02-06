import { SET_ENCRYPTION } from './Actions/dataAction'

const initState = {
    Password: "",
    OrgKey: "",

    recent: [],
    pinned: [],
}
function dataReducer(state = initState, action) {
    switch (action.type) {
        case SET_ENCRYPTION:
            return { ...state, Password: action.Password, OrgKey: action.OrgKey }
        default:
            return state
    }
}

export default dataReducer;