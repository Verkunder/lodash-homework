import _ from 'lodash';

const fruits1 = [
    {
        type: 'apple',
        color: 'red',
        emoji: '🍎',
    },
    {
        type: 'orange',
        color: 'orange',
        emoji: '🍊',
    },
    {
        type: 'peach',
        emoji: '🍑',
        color: 'orange',
    },
    {
        type: 'apple',
        color: 'green',
        emoji: '🍏',
    },
];

const fruits2 = [
    {
        type: 'mango',
        color: 'yellow',
        emoji: '🥭',
    },
    {
        type: 'orange',
        color: 'orange',
        emoji: '🍊',
    },
    {
        type: 'pineapple',
        emoji: '🍍',
        color: 'brown',
    },
    {
        type: 'peach',
        emoji: '🍑',
        color: 'orange',
    },
    {
        type: 'kiwi',
        emoji: '🥝',
        color: 'green',
    },
    {
        type: 'peach',
        emoji: '🍑',
        color: 'peach',
    },
];

const identicalObjects = _.intersectionWith(fruits1, fruits2, _.isEqual);

console.log({ identicalObjects });

const intersectionBy = _.intersectionBy(fruits1, fruits2, 'type');

console.log({ intersectionBy });

const differenceWith = _.differenceWith(fruits1, fruits2, _.isEqual);

console.log({ differenceWith });
