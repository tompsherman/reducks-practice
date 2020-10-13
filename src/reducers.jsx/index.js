import { FETCH_DUCKS_START, FETCH_DUCKS_SUCCESS, FETCH_DUCKS_FAILURE, POST_DUCKS_START, POST_DUCKS_SUCCESS, POST_DUCKS_FAILURE } from '../actions'

const initialState = {
    ducks: '',
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DUCKS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DUCKS_SUCCESS:
            return {
                ...state,
                ducks: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_DUCKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_DUCKS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_DUCKS_SUCCESS:
            return {
                ...state,
                ducks: action.payload,
                isLoading: false,
                error: ''
            }
        case POST_DUCKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer

//-----------//

// "const initialState = {\n\tducks: '',\n\tisLoading: false,\n\terror: ''\n}\n\nconst reducer = (state = initialState, action) => {\n\tswitch(action.type){\n\t\tcase FETCH_START:\n\t\t\treturn {\n\t\t\t\t...state,\n\t\t\t\tisLoading: true,\n\t\t\t\terror: ''\n\t\t\t}\n\t\tdefault:\n\t\t\treturn state\n\t}\n}\n\nexport default reducer"

