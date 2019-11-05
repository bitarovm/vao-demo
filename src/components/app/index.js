import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DogsListContainer from '../../containers/dogs/list';
import DogsItemContainer from '../../containers/dogs/item';

import { Wrapper } from './styles.js';

const App = () => (
  <Wrapper>
    <Router>
      <Route path="/" exact component={DogsListContainer} />
      <Route path="/dog/:id" component={DogsItemContainer} />
    </Router>
  </Wrapper>
);

export default App;