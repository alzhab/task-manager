import { connect } from 'react-redux';
import Main from './MainComponent';
import { tasksOptions, tasksActions } from './duck';

const mapStateToProps = (state) => {
  const {
    isLoading,
    error,
    tasks,
    totalCount,
    activePagination
  } = state.tasks

  return {
    isLoading,
    error,
    tasks,
    totalCount,
    activePagination
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tasksFetch: (params) => { dispatch(tasksOptions.tasksFetch(params)) },
  };
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;