import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button.js';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles.js';

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const averageNumber = parseFloat(average.replace(',', '.'));
  return (
    <>
      <Wrapper>
        <StyledAverage value={averageNumber}>{average}</StyledAverage>
        <StyledInfo>
          <p>
            {name}
            <Button />
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
