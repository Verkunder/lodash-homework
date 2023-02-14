import _ from 'lodash';

const multiplyArray = _.memoize(numbersArray =>
    numbersArray.reduce((result, number) => result * number)
);

console.log(multiplyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

multiplyArray([1]);

multiplyArray([1, 2, 3, 4]);

console.log('before', multiplyArray.cache);

multiplyArray.cache = new _.memoize.Cache();

console.log('after', multiplyArray.cache);
