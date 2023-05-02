import AnimatedRoutes from "./AnimatedRoutes";
import Header from "./Components/Header/Header";
import { Provider } from 'react-redux';
import {store} from './redux/store'

import './Styles/global.css'

function App() {



  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <AnimatedRoutes />
      </Provider>

    </div>
  );
}

export default App;
