import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DogsListContainer from '../../containers/dogs/list';
import DogsItemContainer from '../../containers/dogs/item';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className='main-wrapper'>
        <div className=''>
          <Link to="/">Index</Link>
          <Link to="/dog">Dog</Link>
        </div>
        <Route path="/" exact component={DogsListContainer} />
        <Route path="/dog/:id" component={DogsItemContainer} />
      </div>
    </Router>
  );
}

export default App;
