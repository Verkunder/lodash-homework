const logScrollY = () => console.log(window.scrollY);

// debounce

const debounceLogScroll = _.debounce(logScrollY, 1000);

window.addEventListener('scroll', debounceLogScroll);

// throttle

// window.addEventListener('scroll', _.throttle(logScrollY, 1000));
