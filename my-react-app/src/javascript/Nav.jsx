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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav>
        <div>
          <button className="btn" onClick={() => setCurrentPage('home')}><i className="fa fa-home fa-2x"></i></button>
          <button className="btn" onClick={() => setCurrentPage('about')}><i className="fa fa-info fa-2x"></i></button>
          <button className="btn" onClick={() => setCurrentPage('links')}><i className="fa fa-link fa-2x"></i></button>
        </div>
      </nav>

      <main>
        {switchPage()}
      </main>
    </div>
  );
}

export default Nav;