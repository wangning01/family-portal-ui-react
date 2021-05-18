import 'App.css';
import {useContext} from 'react';
import LogIn from 'components/LogIn';
import {PortalContext} from 'components/PortalContext';
import Home from 'components/Home';


function App() {
   const {portalState} = useContext(PortalContext);
  
  if(!portalState || !portalState.isLoggedIn){
    return (
      <LogIn />
    );
  }else{
    return (
        <Home />
    );
  }
}

export default App;
