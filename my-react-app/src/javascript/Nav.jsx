import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';

function Nav() {
  const [currentPage, setCurrentPage] = useState('home');

  const switchPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <div>
          <button onClick={() => setCurrentPage('home')}> Home </button>
          <button onClick={() => setCurrentPage('about')}> About </button>
          <a 
            href="https://github.com/MikeLitse" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>

      <main>
        {switchPage()}
      </main>
    </div>
  );
}

export default Nav;