import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../../components/dogsItemToolbar';
import DogForm from '../../../components/dogForm';

import './styles.css';

class Container extends Component {
  componentDidMount() {
    const { fetchDogData, location } = this.props;
    const dogChipId = location.pathname.substr(5);
    fetchDogData(dogChipId);
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleToolbarItemClick = ({ id }) => {
    switch (id) {
      case 'back':
        this.handleGoBack();
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
    } = this.props;

    if (error) {
      return `Error: ${error}`;
    }

    return (
      <>
        <Toolbar onToolbarItemClick={this.handleToolbarItemClick}/>
        {
          isLoading
          ? <div className='loading'>loading...</div>
          : <DogForm
              dogData={dogData}
              isEditing={isEditing}
              fields={fields}
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
  fields: PropTypes.array,

  fetchDogData: PropTypes.func,
};

export default Container;