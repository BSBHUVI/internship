
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import {Usercontext} from "./context/Usercontext"
import Login from './components/Login';
import Protectedroutes from './components/Protectedroutes'


function App() {
  return (
    <>
    
<Usercontext>
      <Routes>
      <Route path='/internship' element={ <Signup />} />
      <Route path='/internship/login' element={ <Login />} />
      <Route path='/internship/Navbar' element={<Protectedroutes> <Header /></Protectedroutes>} >
      
        <Route path='/internship/Navbar/Home' element={<Protectedroutes> <Home /></Protectedroutes>} />
        <Route path='/internship/Navbar/Register' element={<Protectedroutes> <Register /></Protectedroutes>} />
        </Route>
       
      </Routes>
      </Usercontext>
    </>
  );
}

export default App;
