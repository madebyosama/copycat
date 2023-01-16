import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div>
      <div className={Styles.flex}>
        <Link to='/copycat'>
          <img src={logo} />
        </Link>
      </div>
    </div>
  );
}
