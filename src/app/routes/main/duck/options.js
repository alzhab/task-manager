import apiInstance from "../../../../instances/api"
import { tasksActions } from "."

const defaultTasksFetchParams = {
  page: 1
}

const tasksFetch = (params = defaultTasksFetchParams) => {
  console.log(params);

  return dispatch => {
    dispatch(tasksActions.tasksFetchStart())
    apiInstance.get('', {
      params
    }).then((res) => {
      dispatch(tasksActions.tasksFetchSuccess(res.data.message.tasks, +res.data.message.total_task_count))
      dispatch(tasksActions.tasksPaginationChange(params.page))
    }).catch(err => {
      dispatch(tasksActions.tasksFetchError(err.message))
    })
  }
}

export {
  tasksFetch
}