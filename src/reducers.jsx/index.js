const initialState = {
    ducks: "",
    isLoading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        default:
            return state
    }
}

export default reducer

//-----------//

// "const initialState = {\n\tducks: '',\n\tisLoading: false,\n\terror: ''\n}\n\nconst reducer = (state = initialState, action) => {\n\tswitch(action.type){\n\t\tcase FETCH_START:\n\t\t\treturn {\n\t\t\t\t...state,\n\t\t\t\tisLoading: true,\n\t\t\t\terror: ''\n\t\t\t}\n\t\tdefault:\n\t\t\treturn state\n\t}\n}\n\nexport default reducer"

