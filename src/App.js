import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/Countrydetail';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path="/:countryId" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
