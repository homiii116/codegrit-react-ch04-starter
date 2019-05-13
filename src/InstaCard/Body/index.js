import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';
import MainImg from '../../images/image-one.jpg';

const Body = ({ theme }) => (
  <section className="card-body">
    <div className="card-image">
      <img alt="メイン画像" src={MainImg} />
    </div>
    <BodyMain theme={theme} />
  </section>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default Body;