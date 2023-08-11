import { Link } from 'react-router-dom';
import '../../styles/nav.css';

export const Nav = () => {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about' state={'Estate da About'}>
            About
          </Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/posts/10'>Posts 10</Link>
        </li>
        <li>
          <Link to='/redirect'>Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};
