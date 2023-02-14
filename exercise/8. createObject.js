import _ from 'lodash';

const obj = {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
            lat: '-31.8129',
            lng: '62.5342',
        },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
    },
};

const omitObject = _.omit(obj, ['address', 'company', 'website']);

console.log(omitObject);

const pickObject = _.pick(obj, ['address', 'company', 'website']);

console.log({ pickObject });
