import React,{useState,createContext} from 'react'

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Condition from './Condition';
import Dashbord from './Dashbord';
import Reg from './Reg';
import Fcompage from './Fcompage'
import Main from './Main';
import Login from './Login';
export const store = createContext();
function App() {
 
  const [token,setToken] = useState(null);
  return (
    <div>
 <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
<Route path='/Dashbord' element={<Dashbord/>}/>
<Route path='/Fcompage' element={<Fcompage/>}/>
<Route path='/Condition' element={<Condition/>}/>
<Route path='/Reg' element={<Reg/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Main' element={<Main/>}/>

      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App