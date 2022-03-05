function getRandomNaturalNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min <= 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNaturalNumber(1,5);

function getRandomIntegerPositiveNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntegerPositiveNumber(0,1);


function checkCommentLength (userComment, maxCommentLength) {
  return (userComment.length <= maxCommentLength);
}
checkCommentLength('qwe', 5);

const DESCRIPTIONS_STRING = 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах. На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука. Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в грустное настроение. «Хорошо бы еще немного поспать и забыть всю эту чепуху». Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты.';
const DESCRIPTIONS =  DESCRIPTIONS_STRING.split('. ');

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

const createCommentsList = function() {
  const commentsList = [];
  for (let i = 1; i <= getRandomNaturalNumber(1, 15); i++) {
    const newComment = {
      id: Date.now() + Math.random(),
      avatar: `img/avatar-${  getRandomNaturalNumber(1, 6)  }.svg`,
      message:  MESSAGES[getRandomIntegerPositiveNumber(0, MESSAGES.length-1)],
      name: NAMES[getRandomIntegerPositiveNumber(0, NAMES.length-1)],
    };
    commentsList.push(newComment);
  }
  return commentsList;
};

const createPhotoDescription = function (i=1) {
  const newPhotoDescription = {
    id: i,
    url: `photos/${  i  }.jpg`,
    description: DESCRIPTIONS[getRandomIntegerPositiveNumber(0, DESCRIPTIONS.length-1)],
    likes: getRandomNaturalNumber(15, 200),
    comments: createCommentsList(),
  };
  i += 1;
  return newPhotoDescription;
};

const photosDescriptionList = Array.from({length: 25}, createPhotoDescription);

photosDescriptionList();

