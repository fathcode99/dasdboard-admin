import Home from './pages/home';
import Single from './pages/Single';
import New from './pages/New';
import List from './pages/List';
import Login from './pages/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path='new' element={<New title="Add New User" />} />
              <Route path='detail' element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
