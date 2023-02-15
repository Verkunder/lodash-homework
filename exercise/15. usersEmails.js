import _ from 'lodash';

const users = [
    {
        id: 0,
        username: 'Zero',
        isActive: 'N',
    },
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Antonette',
        isActive: 'Y',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Bret',
        email: 'Sincere@april.biz',
        isActive: 'Y',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        isActive: 'N',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        isActive: 'N',
    },
];

const result = {
    false: 0,
    true: 0,
};

_.map(users, function (user) {
    user.isActive === 'N' ? result.false++ : result.true++;
});

console.log(result);
