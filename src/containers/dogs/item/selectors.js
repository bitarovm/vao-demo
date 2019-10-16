const dogDataSelector = (state) => state.dogData;

const isLoadingSelector = (state) => state.isLoading;

const errorSelector = (state) => state.error;

const isEditingSelector = (state) => state.isEditing;

const fieldsSelector = (state) => (
  state.fields.filter(field => field.visible)
);

const mapStateToProps = ({ dogsItemState: state }) => ({
  dogData: dogDataSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  isEditing: isEditingSelector(state),
  fields: fieldsSelector(state),
});

export default mapStateToProps;