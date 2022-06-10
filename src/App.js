import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import Home from './Page/Home/Home';
import Footer from './Page/Sheard/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Page/Home/About';
import Nabvar from './Page/Sheard/Nabvar';
import Projects from './Page/Home/Projects';


function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
      <div className='font-inter bg:white dark:bg-slate-900'>
        <div className="max-w-5xl mx-auto w-11/12">
          <Nabvar></Nabvar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/project' element={<Projects></Projects>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
