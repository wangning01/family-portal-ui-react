import 'App.css';
import {Route, HashRouter} from 'react-router-dom';
// import SignIn from 'components/SignIn';
import LogIn from 'components/LogIn';


function App() {
  return (
    <div className="App">

      <HashRouter basename="family_portal">
        <Route path="/"  render={ ()=> <LogIn/>}/>
      </HashRouter>

    </div>
  );
}

export default App;
