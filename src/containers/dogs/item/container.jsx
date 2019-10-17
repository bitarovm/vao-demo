import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../../components/dogsItemToolbar';
import DogForm from '../../../components/dogForm';

import './styles.css';

class Container extends Component {
  componentDidMount() {
    const { fetchDogDataAction, location } = this.props;
    const dogChipId = location.pathname.substr(5);
    fetchDogDataAction(dogChipId);
  };

  handleGoBack = () => {
    const {
      history,
      dogsItemChangeModeToViewAction,
    } = this.props;

    dogsItemChangeModeToViewAction();
    history.push('/');
  };

  handleEditData = () => {
    const {
      isEditing,
      dogsItemChangeModeToEditAction,
      dogsItemChangeModeToViewAction,
    } = this.props;

    isEditing
      ? dogsItemChangeModeToViewAction()
      : dogsItemChangeModeToEditAction();
  };

  handleToolbarItemClick = ({ id }) => {
    switch (id) {
      case 'back':
        this.handleGoBack();
        break;

      case 'edit':
        this.handleEditData(this.props.isEditing);
        break;

      default:
        break;
    }
  };

  render() {
    const {
      dogData,
      isLoading,
      error,
      isEditing,
      fields,
      dogsItemChangeFieldValueAction,
    } = this.props;

    if (error) {
      return `Error: ${error}`;
    }

    return (
      <>
        <Toolbar isEditing={isEditing} onToolbarItemClick={this.handleToolbarItemClick}/>
        {
          isLoading
          ? <div className='loading'>loading...</div>
          : <DogForm
              dogData={dogData}
              isEditing={isEditing}
              fields={fields}
              onDataChange={dogsItemChangeFieldValueAction}
            />
        }
      </>
    );
  }
};

Container.propTypes = {
  dogData: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  isEditing: PropTypes.bool,
  savedCopy: PropTypes.object,
  fields: PropTypes.array,

  fetchDogDataAction: PropTypes.func,
  dogsItemChangeModeToViewAction: PropTypes.func,
  dogsItemChangeModeToEditAction: PropTypes.func,
  dogsItemChangeFieldValueAction: PropTypes.func,
};

export default Container;