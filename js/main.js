function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1,5));

function checkCommentLen (commentLen, maxCommentLen) {
  if (commentLen > maxCommentLen) {
    return false;
  }
  return true;
}
if (checkCommentLen(1,5)) {
  console.log('norm');
}
