function getRandomNaturalNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min <= 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntegerPositiveNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCommentLength (userComment, maxCommentLength) {
  return (userComment.length <= maxCommentLength);
}

export {getRandomNaturalNumber, getRandomIntegerPositiveNumber, checkCommentLength};
