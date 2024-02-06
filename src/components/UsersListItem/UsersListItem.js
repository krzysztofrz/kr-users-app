import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <>
      <li>
        <div>{average}</div>
        <div>
          <p>{name}</p>
          <p>{attendance}</p>
        </div>
        <button>x</button>
      </li>
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
