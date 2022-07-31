import './App.css';
import RouteComponent from './Routes/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './ReudxStorage/store/store';

function App() {


  return (
    <>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>           
    <RouteComponent />
  </PersistGate>
 </Provider>
 </>
  );
}

export default App;
