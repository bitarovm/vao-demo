import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import * as actions from './action-creators';
import mapStateToProps from './selectors';

const withConnect = connect(mapStateToProps, actions);

const DogsListContainer = compose(
  withRouter,
  withConnect,
)(Container);

export default DogsListContainer;