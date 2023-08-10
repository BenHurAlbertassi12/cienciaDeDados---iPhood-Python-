import { Link } from 'react-router-dom';
import '../../styles/nav.css';

export const Nav = () => {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <p>A</p>
        </li>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <p>Link</p>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
