import _ from 'lodash';

const users1 = [
    { id: 0, username: 'Zero' },
    { id: 1, name: 'Leanne Graham', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 2, name: 'Ervin Howell', username: 'Bret', email: 'Sincere@april.biz' },
];

const users2 = [
    { id: 1, name: 'Leanne Graham', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 2, name: 'Ervin Howell', username: 'Bret', email: 'Sincere@april.biz' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
];

const user3 = _.concat(users2, users1);

const user3Group = _.groupBy(user3, 'id');

const user3Flatten = _.map(user3Group, item =>
    _.reduce(
        item,
        (result, value) => {
            const data = _.merge(result, value);

            console.log(result, value);

            return data;
        },
        {}
    )
);

console.log({ user3Flatten });
