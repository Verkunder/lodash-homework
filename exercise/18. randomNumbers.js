import _ from 'lodash';

const numbers = _.random(0, 100);

const floatNumbers = _.random(0, 1, 0.1).toFixed(2);

console.log(numbers, floatNumbers);
