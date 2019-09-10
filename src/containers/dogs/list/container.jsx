import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  componentDidMount() {
    this.props.fetchDogsList();
  }
  
  render() {
    const { dogsList, isLoading } = this.props;
    
    if (isLoading) {
      return '...loading'
    };

    return (
      <div className="DogsListContainer">
        {dogsList.map(item => (
          <div>{item.name} - {item.age}</div>
        ))}
      </div>
    );
  }
};

Container.propTypes = {
  dogsList: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchDogsList: PropTypes.func,
};

export default Container;