import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../../src/assets/icons/deleteIcon.svg';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: lightgray;
    }
  }
`;

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #c0c7d6;
  border-radius: 50%;
  border: none;
  color: white;
  display: flex;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <>
      <Wrapper>
        <div>{average}</div>
        <div>
          <p>{name}</p>
          <p>{attendance}</p>
        </div>
        <StyledButton>
          <DeleteIcon />
        </StyledButton>
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
