import {
  filterDogsList,
  sortDogsList,
  groupDogsList,
} from './utils';

const dogsGroupsSelector = (state) => {
  const {
    dogsList,
    searchString,
    sortParams,
    groupParams,
  } = state;

  let result = dogsList;

  if (searchString) {
    result = filterDogsList(result, searchString);
  };

  result = sortDogsList(result, sortParams);

  result = groupDogsList(result, groupParams);

  return result;
};

const isLoadingSelector = state => state.isLoading;

const errorSelector = state => state.error;

const columnsSelector = state => (
  state.columns.filter(column => column.visible)
);

const sortParamsSelector = (state) => state.sortParams;

const groupParamsSelector = (state) => state.groupParams;

const searchSelector = (state) => state.searchString;

const mapStateToProps = ({ dogsListState: state }) => ({
  dogsGroups: dogsGroupsSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  columns: columnsSelector(state),
  sortParams: sortParamsSelector(state),
  groupParams: groupParamsSelector(state),
  searchString: searchSelector(state),
});

export default mapStateToProps;