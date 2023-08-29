import { Link } from 'react-router-dom';
import Logo from '../../assets/shared/logo.svg'

const Header = () => {
  return (
    <header>
        <div>
        <img src={Logo} />
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
