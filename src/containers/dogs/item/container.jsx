import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  
  componentDidMount() {
    this.props.fetchDogData();
  };
  
  render() {
    const { dogData, isLoading, error } = this.props;

    if (isLoading) {
      return 'loading...'
    };

    if (error) {
      return `Error: ${error}`;
    }

    return (
      <table>
        <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{dogData.name}</td>
            <td>{dogData.age}</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

Container.propTypes = {
  dogData: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default Container;