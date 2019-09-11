import React from 'react';
import Test from '../test';
import DogsListContainer from '../../containers/dogs/list';
import DogsItemContainer from '../../containers/dogs/item';
import './styles.css';

const App = () => {
  return (
    <>
      <Test />
      <DogsListContainer />
      <DogsItemContainer />
    </>
  );
}

export default App;
