import './App.css';
import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './containers/Landing/Landing';
import Home from './containers/Home/Home';
import CreateBreed from './containers/CreateBreed/CreateBreed';
import { useDispatch } from 'react-redux';
import { getBreeds, setLoading } from './Redux/Actions/index';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getBreeds());
  }, [dispatch])
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Landing} />

        <Route path='/'>
          <Navbar />
          <Route exact path='/home' component={Home} />
          <Route exact path='/createBreed' render={() => <CreateBreed />} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
