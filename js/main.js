function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min <= 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1,5);

function checkCommentLength (userComment, maxCommentLength) {
  return (userComment.length <= maxCommentLength);
}
checkCommentLength('qwe', 5);

const descriptionString = 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах. На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука. Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в грустное настроение. «Хорошо бы еще немного поспать и забыть всю эту чепуху». Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты.';
const DESCRIPTIONS = descriptionString.split('. ');

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const createComment = function (i) {
  const newComment = {
    id: i,
    avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`,
    message:  MESSAGES[getRandomNumber(1, MESSAGES.length) - 1],
    name: NAMES[getRandomNumber(1, NAMES.length) - 1],
  };
  return newComment;
};

const COMMENTS = [];
for (let i = 1; i <= getRandomNumber(1, 15); i++) {
  COMMENTS.push(createComment(i));
}

const createPhoto = function (i) {
  const newPhoto = {
    id: i,
    url: `photos/${  i  }.jpg`,
    description: DESCRIPTIONS[getRandomNumber(1, DESCRIPTIONS.length) - 1],
    likes: getRandomNumber(15, 200),
    comments: '',
  };
  return newPhoto;
};
const PHOTOS = [];
for (let i = 1; i <= 25; i++) {
  PHOTOS.push(createPhoto(i));
}

PHOTOS();

