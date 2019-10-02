import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import * as actions from './action-creators';

const mapStateToProps = (state) => ({
  dogData: state.dogsItemState.dogData,
  isLoading: state.dogsItemState.isLoading,
  error: state.dogsItemState.error,
  fields: state.dogsItemState.fields,
});

const withConnect = connect(mapStateToProps, actions);

const DogsItemContainer = compose(
  withRouter, 
  withConnect,
)(Container);

export default DogsItemContainer;