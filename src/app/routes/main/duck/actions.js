import { tasksTypes } from "."

// TASKS_FETCH_START,
// TASKS_FETCH_SUCCESS
// TASKS_FETCH_ERROR

const tasksFetchStart = () => {
  return { type: tasksTypes.TASKS_FETCH_START }
}

const tasksFetchSuccess = (tasks, totalCount) => {
  return { type: tasksTypes.TASKS_FETCH_SUCCESS, payload: tasks, totalCount }
}

const tasksFetchError = (err) => {
  return { type: tasksTypes.TASKS_FETCH_ERROR, payload: err }
}

const tasksPaginationChange = (number) => {
  localStorage.setItem('page', number)
  return { type: tasksTypes.TASKS_PAGINATION_CHANGE, payload: number }
}

const tasksSortChange = (sort) => {
  localStorage.setItem('sortField', sort)
  return { type: tasksTypes.TASKS_SORT_CHANGE, payload: sort }
}

const tasksSortDirectionChange = (sortDir) => {
  localStorage.setItem('sortDir', sortDir)
  return { type: tasksTypes.TASKS_SORTDIRECTION_CHANGE, payload: sortDir }
}

const tasksAddMessage = (message) => {
  return { type: tasksTypes.TASKS_ADD_MESSAGE, payload: message }
}

export {
  tasksFetchStart,
  tasksFetchSuccess,
  tasksFetchError,
  tasksPaginationChange,
  tasksSortChange,
  tasksSortDirectionChange,
  tasksAddMessage
}