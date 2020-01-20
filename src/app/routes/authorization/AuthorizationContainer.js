import { connect } from 'react-redux';
import Authorization from './AuthorizationComponent';

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const AuthorizationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorization);

export default AuthorizationContainer;