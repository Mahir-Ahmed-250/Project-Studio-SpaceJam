import './App.css';
import { Navigate, Route, Routes, useLocation, } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { ThemeContext } from './context';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Portfolios from './pages/Portfolio/Portfolios/Portfolios';
import AdminLogin from './adminPanel/pages/AdminLogin/AdminLogin';
import useFirebase from './adminPanel/hooks/useFirebase';
import AdminHome from './adminPanel/pages/AdminHome/AdminHome';
import loadingImg from './assets/logo/logo.png'
import AdminHomeBanner from './adminPanel/pages/AdminHomeBanner/AdminHomeBanner';
import AdminServiceCounter from './adminPanel/pages/AdminServiceCounter/AdminServiceCounter';
import AdminHomePortfolio from './adminPanel/pages/AdminHomePortfolio/AdminHomePortfolio';
import AdminTeam from './adminPanel/pages/AdminTeam/AdminTeam';
import AdminPortfolio from './adminPanel/pages/AdminPortfolio/AdminPortfolio';
import { useState } from 'react';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const { user } = useFirebase()
  const [counter, setCounter] = useState([])
  useEffect(() => {
    fetch(`https://firestore.googleapis.com/v1/projects/studio-space-jam/databases/(default)/documents/serviceCounter`)
      .then((res) => res.json())
      .then((data) => setCounter(data));
  }, [])

  const { loading } = useFirebase()
  if (loading) {
    return (
      <>
        <div className='loading-gif'>
          <img src={loadingImg} alt="" />
        </div>
      </>
    )
  }
  return (
    <Wrapper>
      <div style={{ backgroundColor: darkMode ? "#1f2227" : "#f2f3f6", color: darkMode && "#fff", transition: "0.5s" }}>
        <Routes >
          {
            user ?
              <>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path='/portfolio' element={<Portfolios />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<AdminHome />} />
                <Route path="/admin/homeBanner" element={<AdminHomeBanner />} />
                <Route path="/admin/counter" element={<AdminServiceCounter counter={counter
                } />} />
                <Route path="/admin/homePortfolio" element={<AdminHomePortfolio />} />
                <Route path="/admin/team" element={<AdminTeam />} />
                <Route path="/admin/portfolio" element={<AdminPortfolio />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
              :
              <>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path='/portfolio' element={<Portfolios />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
          }
        </Routes>
      </div>
    </Wrapper>
  );
}

export default App;
