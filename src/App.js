import Home from './pages/home/home';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import Login from './pages/login/Login'

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
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
