import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton.js';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles.js';

const UserListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => {
  const averageNumber = parseFloat(average.replace(',', '.'));
  return (
    <>
      <Wrapper>
        <StyledAverage value={averageNumber}>{average}</StyledAverage>
        <StyledInfo>
          <p>
            {name}
            <DeleteButton onClick={() => deleteUser(name)} />
          </p>
          <p>attendance: {attendance}</p>
        </StyledInfo>
      </Wrapper>
    </>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
