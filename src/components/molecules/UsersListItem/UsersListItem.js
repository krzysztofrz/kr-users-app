import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Button from 'components/atoms/Button/Button';
import Button from '../../atoms/Button/Button.js';

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

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <>
      <Wrapper>
        <div>{average}</div>
        <div>
          <p>{name}</p>
          <p>{attendance}</p>
        </div>
        <Button />
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
