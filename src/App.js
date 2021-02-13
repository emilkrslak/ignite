import React from 'react';
import {useDispatch} from 'react-redux';
import {loadGames} from './actions/gamesAction';

//Global style
import GlobalStyles from './components/GlobalStyles';

//Components and Pages
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
