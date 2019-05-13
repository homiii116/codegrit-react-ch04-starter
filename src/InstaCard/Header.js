import React from 'react';
import avatar from '../images/avatar-one.png'

const Header = () => (
  <section className="card-header">
    <div className="poster-avatar">
      <img alt="アバター" src={avatar} />
    </div>
    <div className="poster-name">
      testuser
    </div>
  </section>
);

export default Header;