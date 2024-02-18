import {Navigate, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import UserProvider from './context/UserProvider';

const MainApp = () => {

  return (
        <UserProvider>
          <h1>MainApp</h1>
          <hr/>
          <Navbar/>
          <Routes>
              <Route  path="/" element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/*" element={<Navigate to="/"/>}/>
          </Routes>
        </UserProvider>
  )
};

export default MainApp;