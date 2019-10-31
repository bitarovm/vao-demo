import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DogsListContainer from '../../containers/dogs/list';
import DogsItemContainer from '../../containers/dogs/item';

import './styles.css';

const App = () => (
  <div className='main-wrapper'>
    <Router>
      <Route path="/" exact component={DogsListContainer} />
      <Route path="/dog/:id" component={DogsItemContainer} />
    </Router>
  </div>
  );

export default App;