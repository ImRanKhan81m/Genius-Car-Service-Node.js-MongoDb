
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import AddService from './components/Pages/AddService/AddService';
import Checkout from './components/Pages/Checkout/Checkout';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './components/Pages/ManageServices/ManageServices';
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
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } />
        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        } />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
