import { connect } from 'react-redux';
import Container from './container';
import * as actions from './action-creators';

const mapStateToProps = (state) => ({
  dogData: state.dogState.dogData,
  isLoading: state.dogState.isLoading,
  error: state.dogState.error,
});

const DogsItemContainer = connect(
  mapStateToProps,
  actions
)(Container);

export default DogsItemContainer;