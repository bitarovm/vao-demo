import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './toolbar';

import './styles.css';

const DogsTable = ({ onRowClick, isLoading, dogsList, columns }) => {

  const renderRow = (item) => {
    const handleClick = () => onRowClick({ id: item.chipId });

    return (
      <div className='dogs-table__row' onClick={handleClick} key={item.chipId}>
        {
          columns.map((field, index) => (
            <div className="dogs-table__cell" key={index}>{item[field.id]}</div>
          ))
        }
      </div>
    )
  }

  return (
    <div className='dogs-table'>
      <div className='dogs-table__row _head'>
        {
          columns.map((field, index) => (
            <div className="dogs-table__cell" key={index}>{field.text}</div>
          ))
        }
      </div>

      {
        isLoading 
          ? <div className='loading'>loading...</div>
          : dogsList.map(renderRow) // внутрь renderRow придут 3 аргумента из метода .map() - item, index, array
      }      
    </div>
  )
};

const DogsGroup = (props) => {
  const {
    title,
    items,
    isLoading,
    columns,
    onItemClick
  } = props;
  
  return (
    <div className="group">
      {title && <div className="title">{title}</div>}

      <DogsTable
        dogsList={items}
        isLoading={isLoading}
        columns={columns}
        onRowClick={onItemClick}
      />
    </div>
  );
};

class Container extends Component {
  componentDidMount() {
    this.props.fetchDogsListAction();
  };

  handleItemClick = ({ id }) => {
    const { history } = this.props;
    
    if (id) {
      history.push(`/dog/${id}`);
    }
  };
  
  handleToolbarParamsChange = (param) => {
    switch (param.fieldId) {
      case 'sort':
        this.props.dogsListChangeSort(param.fieldValue);
        break;

      case 'group':
        this.props.dogsListChangeGroup(param.fieldValue);
        break;

      default:
        break;
    };
  };

  render() {
    const {
      dogsGroups,
      isLoading,
      columns,
      sortParams,
      groupParams,
    } = this.props;
    
    return (
      <>
        <Toolbar
          sortParams={sortParams}
          groupParams={groupParams}
          onParamsChange={this.handleToolbarParamsChange}
        />
        {
          dogsGroups.map((group, index) => (
            <DogsGroup
              key={index}
              {...group}
              isLoading={isLoading}
              columns={columns}
              onItemClick={this.handleItemClick}
            />
          ))
        }
      </>
    );
  }
};

Container.propTypes = {
  dogsGroups: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array,
  })),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  columns: PropTypes.array,
  sortParams: PropTypes.object,
  groupParams: PropTypes.object,

  fetchDogsListAction: PropTypes.func,
  dogsListChangeSort: PropTypes.func,
  dogsListChangeGroup: PropTypes.func,
};

export default Container;