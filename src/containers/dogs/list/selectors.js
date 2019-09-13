const dogsGroupsSelector = (state) => {
  return [
    {
      title: '',
      items: state.dogsListState.dogsList,
    }
  ];
};

const isLoadingSelector = state => state.dogsListState.isLoading;

const errorSelector = state => state.dogsListState.error;

const columnsSelector = state => (
  state.dogsListState.columns.filter(column => column.visible)
);

const sortParamsSelector = (state) => state.dogsListState.sortParams;

const mapStateToProps = (state) => ({
  dogsGroups: dogsGroupsSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  columns: columnsSelector(state),
  sortParams: sortParamsSelector(state),
});

export default mapStateToProps;