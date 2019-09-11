import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DogsListContainer from '../../containers/dogs/list';
import DogsItemContainer from '../../containers/dogs/item';
import './styles.css';

const App = () => {
  return (
    <Router>
      <>
        <Link to="/">Index</Link>
        <Link to="/dog">Dog</Link>
      </>
      <Route path="/" exact component={DogsListContainer} />
      <Route path="/dog/" component={DogsItemContainer} />
    </Router>
  );
}

export default App;
