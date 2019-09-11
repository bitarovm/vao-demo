import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DogsListContainer from '../../containers/dogs/list';
import DogsItemContainer from '../../containers/dogs/item';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className='main-wrapper'>
        <Route path="/" exact component={DogsListContainer} />
        <Route path="/dog/:id" component={DogsItemContainer} />
      </div>
    </Router>
  );
}

export default App;
