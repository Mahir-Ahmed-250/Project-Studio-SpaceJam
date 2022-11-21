import './App.css';
import { Navigate, Route, Routes, useLocation, } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import { useContext, useLayoutEffect } from 'react';
import { ThemeContext } from './context';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Footer from './shared/Footer/Footer';
import Portfolios from './pages/Portfolio/Portfolios/Portfolios';




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

  return (
    <Wrapper>
      <div style={{ backgroundColor: darkMode ? "#161616" : "#fff", color: darkMode && "#fff", transition: "0.5s" }}>

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path='/portfolio' element={<Portfolios />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />

      </div>
    </Wrapper>

  );
}

export default App;
