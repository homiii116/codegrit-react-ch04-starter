import React from 'react';
import PropTypes from 'prop-types';

const CardSwitcher = ({ chosenId, switchCard }) => (
  <ul className="theme-swither">
    <li>
      <a
        className={chosenId === 1 ? "chosen" : "default"}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </a>
    </li>
    <li>
      <a
        className={chosenId === 2 ? "chosen" : "default"}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </a>
    </li>
  </ul>
);

Comment.propTypes = {
  switchCard: PropTypes.func.isRequired,
  chosenId: PropTypes.number.isRequired
}

Comment.defaultProps = {
  chosenId: 1,
}

export default CardSwitcher;