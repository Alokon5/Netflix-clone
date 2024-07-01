import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="">
      <AuthContextProvider>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
