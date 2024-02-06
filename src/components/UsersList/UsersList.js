import UserListItem from 'components/UsersListItem/UsersListItem';
import { users } from 'data/users';
// import PropTypes from 'prop-types';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
