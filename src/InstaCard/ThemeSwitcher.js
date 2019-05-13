import React from 'react';
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul className="theme-swither">
    <li>
      <a 
        className={theme === 'light' ? "chosen" : "default"}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </a>
    </li>
    <li>
      <a 
        className={theme === 'dark' ? "chosen" : "default"}
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </a>
    </li>
  </ul>
);

Comment.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default ThemeSwitcher;