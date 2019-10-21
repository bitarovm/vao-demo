const dogDataSelector = (state) => state.dogData;

const isLoadingSelector = (state) => state.isLoading;

const errorSelector = (state) => state.error;

const isEditingSelector = (state) => state.isEditing;

const savedCopySelector = (state) => state.savedCopy;

const fieldsSelector = (state) => state.fields;

const dictionariesSelector = (state) => state.dictionaries;

const mapStateToProps = ({ dogsItemState: state }) => ({
  dogData: dogDataSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  isEditing: isEditingSelector(state),
  savedCopy: savedCopySelector(state),
  fields: fieldsSelector(state),
  dictionaries: dictionariesSelector(state),
});

export default mapStateToProps;