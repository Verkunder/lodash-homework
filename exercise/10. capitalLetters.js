import _ from 'lodash';

const misha = 'михаил';

const loren =
    'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. TU QUIDEM REDDES; NAM ANTE ARISTIPPUS, ET ILLE MELIUS. DUO REGES: CONSTRUCTIO INTERRETE.';

const upperMisha = _.upperFirst(misha);

const upperLoren = _.capitalize(loren);

console.log('====================================');
console.log({ upperMisha, upperLoren });
console.log('====================================');
