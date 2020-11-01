import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';
import ImageOne from '../../images/image-one.jpg';

const Body = ({ theme, chosenId, data }) => {
  const { imageUrl } = data;
    return(
      <section className="card-body">
      <div className="card-image">
        <img alt="メイン画像" src={imageUrl} />
      </div>
      <BodyMain 
        theme={theme}
        chosenId={chosenId}
        data={data} 
      />
    </section>
  )  
};

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  chosenId: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired
}

Comment.defaultProps = {
  theme: "light",
  data: {
    imageUrl: ImageOne
  }
}

export default Body;