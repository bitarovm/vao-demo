const dogsListSelector = (state) => {
  return state.dogsListState.dogsList;
};

const isLoadingSelector = state => state.dogsListState.isLoading;

const errorSelector = state => state.dogsListState.error;

const columnsSelector = state => (
  state.dogsListState.columns.filter(column => column.visible)
);

const mapStateToProps = (state) => ({
  dogsList: dogsListSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  columns: columnsSelector(state),
});

export default mapStateToProps;