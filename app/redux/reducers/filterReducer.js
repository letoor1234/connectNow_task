const State = {name:' ', rate: 1, orderBy: 'name', orderDir:'up'}
  
  
function GamesReducer(state = State, action) {
    switch (action.type) {
        case 'SEARCH':{
        return action.payload    
        }
        default: return state
    }
}
export default GamesReducer;