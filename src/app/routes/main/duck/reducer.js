import { tasksTypes } from "."

const initialState = {
  isLoading: false,
  error: '',
  tasks: [],
  totalCount: 0,
  activePagination: 1
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksTypes.TASKS_FETCH_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
        totalCount: action.totalCount,
        error: ''
      }
    case tasksTypes.TASKS_FETCH_ERROR:
      return {
        ...state,
        tasks: [],
        isLoading: false,
        totalCount: 0,
        error: action.payload
      }
    case tasksTypes.TASKS_FETCH_START:
      return {
        ...state,
        tasks: [],
        isLoading: true,
        totalCount: 0,
        error: ''
      }
    case tasksTypes.TASKS_PAGINATION_CHANGE:
      return {
        ...state,
        activePagination: action.payload
      }
    default:
      return state
  }
}

export default tasksReducer