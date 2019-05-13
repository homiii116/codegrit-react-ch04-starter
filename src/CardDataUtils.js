import imageOne from './images/image-one.jpg';
import imageTwo from './images/image-two.jpg';
import avatarOne from './images/avatar-one.png';
import avatarTwo from './images/avatar-two.png';

const cardDataOne = {
  id: 1,
  poster: "posteruser1",
  posterAvatar: avatarOne,
  imageUrl: imageOne,
  commentOne: {
    poster: "commenter1",
    body: "This is the insta-card"
  },
  commentTwo: {
    poster: "commenter2",
    body: "So cool!"
  }
}

const cardDataTwo = {
  id: 2,
  poster: "posteruser2",
  posterAvatar: avatarTwo,
  imageUrl: imageTwo,
  commentOne: {
    poster: "commenter3",
    body: "Nice photo!"
  },
  commentTwo: {
    poster: "commenter4",
    body: "Cute cat!"
  }
}

export const fetchData = (id = 1) => {
  return new Promise(function (resolve) {
    const data = id === 1 ? cardDataOne : cardDataTwo;
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}