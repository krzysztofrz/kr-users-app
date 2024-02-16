import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { useState, useEffect } from 'react';
import Button from 'components/atoms/Button/Button';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
  return (
    <>
      <Wrapper>
        <StyledList>Add new student</StyledList>
        <FormField label="Label" name="name" id="id" type="text" />
        <FormField label="Attendance" name="name" id="id" type="text" />
        <FormField label="Average" name="name" id="id" type="text" />
        <Button>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledList>Students list</StyledList>
        <StyledList>
          {users.map((userData) => (
            <UserListItem
              deleteUser={deleteUser}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
