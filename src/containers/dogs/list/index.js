import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import * as actions from './action-creators';

const mapStateToProps = (state) => ({
  dogsList: state.dogsListState.dogsList,
  isLoading: state.dogsListState.isLoading,
  error: state.dogsListState.error,
});

const withConnect = connect(mapStateToProps, actions);

const DogsListContainer = compose(
  withRouter,
  withConnect,
)(Container);

export default DogsListContainer;