import apiInstance from "../../../../instances/api"
import { tasksActions, tasksTypes } from "."

const tasksFetch = () => {
  const params = {
    page: localStorage.getItem('page'),
    sortField: localStorage.getItem('sortField'),
    sortDirection: localStorage.getItem('sortDir')
  }

  return dispatch => {
    dispatch(tasksActions.tasksFetchStart())
    apiInstance.get('', {
      params
    }).then((res) => {
      dispatch(tasksActions.tasksFetchSuccess(res.data.message.tasks, +res.data.message.total_task_count))
    }).catch(err => {
      dispatch(tasksActions.tasksFetchError(err.message))
    })
  }
}

export {
  tasksFetch
}