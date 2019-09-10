import { connect } from "react-redux";
import Container from './container';
import * as actions from './action-creators';

const mapStateToProps = (state) => ({
  dogsList: state.dogsState.dogsList,
  isLoading: state.dogsState.isLoading,
  error: state.dogsState.error,
});

const DogsListContainer = connect(
  mapStateToProps,
  actions
)(Container);

export default DogsListContainer;