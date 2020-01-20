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
  return { type: tasksTypes.TASKS_PAGINATION_CHANGE, payload: number }
}

export {
  tasksFetchStart,
  tasksFetchSuccess,
  tasksFetchError,
  tasksPaginationChange
}