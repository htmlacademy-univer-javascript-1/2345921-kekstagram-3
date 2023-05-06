const simularPicsContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderPhoto = (posts) => {
  const inputFragment = document.createDocumentFragment();
  for (const post of posts){
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = post.url;
    newPicture.querySelector('.picture__likes').textContext = post.likes;
    newPicture.querySelector('.picture__img').textContext = post.comments;
    inputFragment.append(newPicture);
  }
  simularPicsContainer.append(inputFragment);
};
