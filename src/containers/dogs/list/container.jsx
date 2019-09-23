import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../../components/dogsListToolbar';
import DogsGroup from '../../../components/dogsGroup';

import './styles.css';

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
        this.props.dogsListChangeSortAction(param.fieldValue);
        break;

      case 'group':
        this.props.dogsListChangeGroupAction(param.fieldValue);
        break;

      case 'search':
        this.props.dogsListChangeSearchAction(param.fieldValue);
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
      searchString,
    } = this.props;
    
    return (
      <>
        <Toolbar
          sortParams={sortParams}
          groupParams={groupParams}
          searchString={searchString}
          onParamsChange={this.handleToolbarParamsChange}
        />
        {
          isLoading
            ? <div className='loading'>loading...</div>
            : dogsGroups.map((group, index) => (
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
  searchString: PropTypes.string,

  fetchDogsListAction: PropTypes.func,
  dogsListChangeSortAction: PropTypes.func,
  dogsListChangeGroupAction: PropTypes.func,
  dogsListChangeSearchAction: PropTypes.func,
};

export default Container;