import {createStore, combineReducers, applyMiddleware} from 'redux'
import GamesReducer from './reducers/apiReducer'
import FilterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'
const reducers=combineReducers({
    games: GamesReducer,
    filters: FilterReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store
