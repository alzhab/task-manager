import { connect } from 'react-redux';
import Main from './MainComponent';
import { tasksOptions, tasksActions } from './duck';
import { authActions } from '../authorization/duck';

const mapStateToProps = (state) => {
  let {
    isLoading,
    error,
    tasks,
    totalCount,
    activePagination,
    sortField,
    sortDirection,
    message
  } = state.tasks

  if (sortDirection === 'desc') {
    tasks = tasks.sort((taskA, taskB) => {
      console.log(sortField);

      if (taskA[sortField] < taskB[sortField]) { return -1; }
      if (taskA[sortField] > taskB[sortField]) { return 1; }
      return 0;
    })
  } else {
    tasks = tasks.sort((taskA, taskB) => {
      if (taskA[sortField] < taskB[sortField]) { return 1; }
      if (taskA[sortField] > taskB[sortField]) { return -1; }
      return 0;
    })
  }

  const { token } = state.auth

  return {
    isLoading,
    error,
    tasks,
    totalCount,
    activePagination,
    sortField,
    sortDirection,
    authToken: token,
    message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksFetch: (params) => { dispatch(tasksOptions.tasksFetch(params)) },
    changePagination: (number) => { dispatch(tasksActions.tasksPaginationChange(number)) },
    changeSortField: (field) => { dispatch(tasksActions.tasksSortChange(field)) },
    changeSortDir: (dir) => { dispatch(tasksActions.tasksSortDirectionChange(dir)) },
    addMessage: (message) => { dispatch(tasksActions.tasksAddMessage(message)) },
    logout: () => { dispatch(authActions.authLogout()) },
  };
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;