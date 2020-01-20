import { connect } from 'react-redux';
import Authorization from './AuthorizationComponent';
import { authOptions } from './duck';

const mapStateToProps = (state) => {
  const { message, isLoading, token } = state.auth
  return {
    message,
    isLoading,
    token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFetch: (data) => dispatch(authOptions.authLogin(data))
  };
};

const AuthorizationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorization);

export default AuthorizationContainer;