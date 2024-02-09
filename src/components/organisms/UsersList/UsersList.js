import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
