import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'
import { tasksReducer } from '../app/routes/main/duck';


const rootReducer = combineReducers({
  tasks: tasksReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store