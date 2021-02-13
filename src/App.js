import React from 'react';
import {useDispatch} from 'react-redux';
import {loadGames} from './actions/gamesAction';
import {Route} from 'react-router-dom';

//Global style
import GlobalStyles from './components/GlobalStyles';

//Components and Pages
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Route path={['/game/:id', "/"]}>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
