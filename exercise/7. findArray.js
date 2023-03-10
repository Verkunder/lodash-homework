import _ from 'lodash';

const fruits1 = [
    {
        type: 'apple',
        color: 'red',
        emoji: '๐',
    },
    {
        type: 'orange',
        color: 'orange',
        emoji: '๐',
    },
    {
        type: 'peach',
        emoji: '๐',
        color: 'orange',
    },
    {
        type: 'apple',
        color: 'green',
        emoji: '๐',
    },
];

const fruits2 = [
    {
        type: 'mango',
        color: 'yellow',
        emoji: '๐ฅญ',
    },
    {
        type: 'orange',
        color: 'orange',
        emoji: '๐',
    },
    {
        type: 'pineapple',
        emoji: '๐',
        color: 'brown',
    },
    {
        type: 'peach',
        emoji: '๐',
        color: 'orange',
    },
    {
        type: 'kiwi',
        emoji: '๐ฅ',
        color: 'green',
    },
    {
        type: 'peach',
        emoji: '๐',
        color: 'peach',
    },
];

const identicalObjects = _.intersectionWith(fruits1, fruits2, _.isEqual);

console.log({ identicalObjects });

/* 
ะะถะธะดะฐะตะผัะน ัะตะทัะปััะฐั 
[
  {
    type: "orange",
    color: "orange",
    emoji: "๐",
  },
  {
    type: "peach",
    color: "orange",
    emoji: "๐",
  },
]
*/

const intersectionBy = _.intersectionBy(fruits1, fruits2, 'type');

console.log({ intersectionBy });

/* 
ะะถะธะดะฐะตะผัะน ัะตะทัะปััะฐั

[
  {
    type: "orange",
    color: "orange",
    emoji: "๐",
  },
  {
    type: "peach",
    emoji: "๐",
    color: "orange",
  },
]

*/

const differenceWith = _.differenceWith(fruits1, fruits2, _.isEqual);

console.log({ differenceWith });
