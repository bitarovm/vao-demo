import { createSelector } from 'reselect';

import {
  filterDogsList,
  sortDogsList,
  groupDogsList,
} from './utils';

const dogsListSelector = state => state.dogsList;

const isLoadingSelector = state => state.isLoading;

const errorSelector = state => state.error;

const columnsSelector = state => Object.values(state.columns).filter(column => column.visible);

const sortParamsSelector = state => state.sortParams;

const groupParamsSelector = state => state.groupParams;

const searchSelector = state => state.searchString;

const dogsGroupReselector = createSelector(
  dogsListSelector,
  sortParamsSelector,
  groupParamsSelector,
  searchSelector,
  (dogsList, sortParams, groupParams, searchString) => {
    let result = dogsList;

    if (searchString) {
      result = filterDogsList(result, searchString);
    };

    result = sortDogsList(result, sortParams);

    result = groupDogsList(result, groupParams);

    return result;
  }
);

const mapStateToProps = ({ dogsListState: state }) => ({
  dogsGroups: dogsGroupReselector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  columns: columnsSelector(state),
  sortParams: sortParamsSelector(state),
  groupParams: groupParamsSelector(state),
  searchString: searchSelector(state),
});

export default mapStateToProps;