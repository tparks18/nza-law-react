import './App.css';
// import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
// import Contact from './views/Contact/Contact'

function App() {
  return (
    <div>
    <Home />
    {/* <main className="container">

          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/contact' render={() => <Contact />} />
            <Route exact path='/where' render={() => <Where />} />
          </Switch>

        </main> */}

    </div>
  );
}

export default App;
