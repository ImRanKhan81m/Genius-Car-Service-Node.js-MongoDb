
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Checkout from './components/Pages/Checkout/Checkout';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import NotFound from './components/Pages/NotFound/NotFound';
import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;