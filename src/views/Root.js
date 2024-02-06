import logo from '../assets/logo.svg';
import './Root.css';
import UsersList from 'components/UsersList/UsersList';

function Root() {
  return (
    <div className="Root">
      <UsersList />
    </div>
  );
}

export default Root;
