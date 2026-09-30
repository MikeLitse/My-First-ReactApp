import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Links from './Links.jsx';

function Nav() {
  const [currentPage, setCurrentPage] = useState('home');

  const switchPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home/>;
      case 'about':
        return <About/>;
      case 'links':
        return <Links/>;
      default:
        return <Home/>;
    }
  };

  return (
    <div>
      <nav>
        <div>
          <button onClick={() => setCurrentPage('home')}> Home </button>
          <button onClick={() => setCurrentPage('about')}> About </button>
          <button onClick={() => setCurrentPage('links')}> Links </button>
        </div>
      </nav>

      <main>
        {switchPage()}
      </main>
    </div>
  );
}

export default Nav;