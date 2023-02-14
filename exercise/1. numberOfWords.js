import _ from 'lodash';

// вариант 1

const str =
    'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла»). Более конкретно, проход, как полагают, происходит из секций 1.10.32 - 33 из его текста, с наиболее заметным часть извлечена ниже:';
const ch = ' ';

const count = _.countBy(str)[ch];

console.log({ count });

// вариант 2

const countTwo = _.words(str).length;

console.log({ countTwo });

// какого хуя https://w6p.ru/YmU4MTd.png
