import { SET_USER_DATA } from './types'
import { initialValues } from '../initials'


export default (state = initialValues, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    
        default:
            return state
    }
}