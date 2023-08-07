import _ from 'lodash';

const numbers = _.random(0, 100);

const floatNumbers = _.random(true).toFixed(2);

console.log(numbers, floatNumbers);
