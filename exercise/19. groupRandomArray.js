import _ from 'lodash';

const array = _.range(0, 100, 5);

const arrayGroup = _.chunk(array, 5);

console.log(arrayGroup);
