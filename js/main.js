function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min || max === min || min <= 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1,5);

function checkCommentLength (userComment, maxCommentLength) {
  return (userComment.length <= maxCommentLength);
}
checkCommentLength('qwe', 5);
