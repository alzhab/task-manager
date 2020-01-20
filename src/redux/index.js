import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'
import { tasksReducer } from '../app/routes/main/duck';
import { authReducer } from '../app/routes/authorization/duck';


const rootReducer = combineReducers({
  tasks: tasksReducer,
  auth: authReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store