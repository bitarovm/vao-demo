import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DOGS_LIST_COLUMNS } from './constants';

import './styles.css';

const Toolbar = () => (
  <div className='toolbar'>
    <button>Sort by</button>
    <button>Group by</button>
    <button>Search</button>
  </div>
);

const DogsTable = ({ onRowClick, isLoading, dogsList }) => {

  const renderRow = (item) => {
    const handleClick = () => onRowClick({ id: item.id });

    return (
      <div className='dogs-table__row' onClick={handleClick} key={item.id}>
        {
          DOGS_LIST_COLUMNS
            .filter(field => field.visible)
            .map(field => <div className="dogs-table__cell">{item[field.id]}</div>)
        }
      </div>
    )
  }

  return (
    <div className='dogs-table'>
      <div className='dogs-table__row _head'>
        {
          DOGS_LIST_COLUMNS
            .filter(field => field.visible)
            .map(field => <div className="dogs-table__cell">{field.text}</div>)
        }
      </div>

      {
        isLoading 
          ? <div className='loading'>loading...</div>
          : dogsList.map(renderRow) // внуть renderRow придут 3 аргумента из метода .map() - item, index, array
      }      
    </div>
  )
};

class Container extends Component {
  componentDidMount() {
    this.props.fetchDogsListAction();
  };

  handleRowClick = ({ id }) => {
    const { history } = this.props;
    
    if (id) {
      history.push(`/dog/${id}`);
    }
  };
  
  render() {
    const { dogsList, isLoading } = this.props;
    
    return (
      <>
        <Toolbar />
        <DogsTable
          onRowClick={this.handleRowClick}
          isLoading={isLoading}
          dogsList={dogsList}
        />
      </>
    );
  }
};

Container.propTypes = {
  dogsList: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchDogsListAction: PropTypes.func,
};

export default Container;