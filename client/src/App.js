import './App.css';
import {Routes , Route} from 'react-router-dom'
import Main from './pages/main'
import Cart from './pages/Cart'
import Panel from './pages/Panel'
function App() {
  return (
    <Routes>
      <Route  path={'/'} element={<Main/>} />
      <Route  path={'/cart'} element={<Cart/>} />
      <Route  path={'/panel'} element={<Panel/>} />
    </Routes>
  );
}

export default App;
