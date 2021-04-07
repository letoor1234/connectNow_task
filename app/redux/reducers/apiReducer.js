const State = {
    loading: true,
    data: [] ,
    failure: false
}  
  
function GamesReducer(state = State, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':{
        return {data: action.payload, loading: false, failure:false}
        }
        case 'FETCH_FAILURE':{
        return {data:[], loading: false, failure: true}    
        }
        default: return state
    }
}
export default GamesReducer;