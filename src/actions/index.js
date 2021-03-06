import axios from 'axios'

export const FETCH_DUCKS_START = 'FETCH_DUCKS_START'
export const FETCH_DUCKS_SUCCESS = 'FETCH_DUCKS_SUCCESS'
export const FETCH_DUCKS_FAILURE = 'FETCH_DUCKS_FAILURE'
export const fetchDucks = () => (dispatch) => {
    dispatch({type: FETCH_DUCKS_START})
    axios
        .get('https://www.ducks.com')
        .then(response => {dispatch({type: FETCH_DUCKS_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: FETCH_DUCKS_FAILURE, payload: error.response}))
}

export const POST_DUCKS_START = 'POST_DUCKS_START'
export const POST_DUCKS_SUCCESS = 'POST_DUCKS_SUCCESS'
export const POST_DUCKS_FAILURE = 'POST_DUCKS_FAILURE'
export const postDucks = (duck) => (dispatch) => {
    dispatch({type: POST_DUCKS_START})
    axios
        .post('https://www.ducks.com', duck)
        .then(response => {dispatch({type: POST_DUCKS_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: POST_DUCKS_FAILURE, payload: error.response}))
}

//----------------------\\

import axios from 'axios'

// "export const FETCH_DUCKS_START = 'FETCH_DUCKS_START'
// export const FETCH_DUCKS_SUCCESS = 'FETCH_DUCKS_SUCCESS'
// export const FETCH_DUCKS_FAILURE = 'FETCH_DUCKS_FAILURE'
// export const fetchDucks = () => (dispatch) => {
//     dispatch({type: FETCH_DUCKS_START})
//     axios
//         .get('https://www.ducks.com')
//         .then(response => {dispatch({type: FETCH_DUCKS_SUCCESS, payload: response.data})})
//         .catch(error => dispatch({type: FETCH_DUCKS_FAILURE, payload: error.response}))
// }

// export const POST_DUCKS_START = 'POST_DUCKS_START'
// export const POST_DUCKS_SUCCESS = 'POST_DUCKS_SUCCESS'
// export const POST_DUCKS_FAILURE = 'POST_DUCKS_FAILURE'
// export const postDucks = (duck) => (dispatch) => {
//     dispatch({type: POST_DUCKS_START})
//     axios
//         .post('https://www.ducks.com', duck)
//         .then(response => {dispatch({type: POST_DUCKS_SUCCESS, payload: response.data})})
//         .catch(error => dispatch({type: POST_DUCKS_FAILURE, payload: error.response}))
// }"