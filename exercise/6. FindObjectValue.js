import _ from 'lodash';

const obj = {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: [
            {
                lat: '-31.8129',
                lng: '62.5342',
            },
            {
                lat: '-15.89',
                lng: '57.08',
            },
        ],
    },
    contactInfo: {
        email: 'Lucio_Hettinger@annie.ca',
        phone: '(254)954-1289',
        website: ['demarco.info', 'jacynthe.com'],
    },
    company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
    },
};

const oneQuestion = _.get(obj, 'address.geo.1.lng');

console.log({ oneQuestion });

_.set(obj, 'address.geo.3', { lat: '0', lng: '0' });

console.log(obj.address.geo[3]);

console.log(obj.contactInfo.website[1]);

_.unset(obj, 'contactInfo.website.1');

console.log(obj.contactInfo.website);
