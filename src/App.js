import './App.css';
import {Routes , Route} from 'react-router-dom'
import Main from './pages/main'
import Cart from './pages/Cart'
function App() {
  return (
    <Routes>
      <Route  path={'/'} element={<Main/>} />
      <Route  path={'/cart'} element={<Cart/>} />
    </Routes>
  );
}

export default App;
