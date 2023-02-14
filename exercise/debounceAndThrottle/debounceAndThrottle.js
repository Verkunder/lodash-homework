import * as _ from 'lodash';
const logScrollY = () => console.log(window.scrollY);

// debounce

const debounceLogScroll = _.debounce(logScrollY, 100);

window.addEventListener('scroll', debounceLogScroll);

// throttle

window.addEventListener('scroll', _.throttle(logScrollY, 100));
