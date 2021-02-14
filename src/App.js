import {Route} from 'react-router-dom';

//Global style
import GlobalStyles from './components/GlobalStyles';

//Components and Pages
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', "/"]}>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
