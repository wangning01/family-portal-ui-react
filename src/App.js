import 'App.css';
import {Route, HashRouter} from 'react-router-dom';
// import SignIn from 'components/SignIn';
import LogIn from 'components/LogIn';
import {useState} from 'react';

function App() {
  const [token, setToken] = useState();
  if(!token){
    return (
      <LogIn setToken={setToken}/>
    );
  }else{
    return <></>;
  }
}

export default App;
