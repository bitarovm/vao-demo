import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import * as actions from './action-creators';

const mapStateToProps = (state) => ({
  dogsList: state.dogsState.dogsList,
  isLoading: state.dogsState.isLoading,
  error: state.dogsState.error,
});

const withConnect = connect(mapStateToProps, actions);

const DogsListContainer = compose(
  withRouter,
  withConnect,
)(Container);

export default DogsListContainer;