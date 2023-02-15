import _ from 'lodash';

const randomString = _.times(10, () => _.random(35).toString(36)).join('');

console.log(randomString);
