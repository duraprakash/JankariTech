const user = {
    'name': 'Prakash Dura',
    'gender': 'Male',
    'address': {
        'country': 'Nepal',
        'provience': 'Gandaki Provience',
        'vdc_municipality': 'Sundarbazar',
        'geo': {
            'lat': '123552',
            'lng': '546523'
        }
    },
    'contact': '9845652156'
}

console.log(
    `User Detail Information\nName: ` + `${user.name},\n`,
    `Gender: ` + `${user.gender},\n`,
    `Address\nCountry:` + `${user.address.country},\n`,
    `Provience: ` + `${user.address.provience},\n`,
    `Vdc/Municipality: ` + `${user.address.vdc_municipality},\n`,
    `Geo\nLatitude: ` + `${user.address.geo.lat},\n`,
    `Longitute: ` + `${user.address.geo.lng},\n`,
);


// 1. Destruction
// 1.1 Object desctructuring
const {name, gender, address} = user; // now object element can be accessed without using user
const userObjDest = { 
    name: 'Sunila', 
    gender: 'Female', 
    address: {
        country: 'Nepal',
        provience: address.provience, // user.address.provience not need 
        vdc_municipality: address.vdc_municipality,
        geo: {
            lat: address.geo.lat,
            lng: address.geo.lng
        }
    },
    contact: '9856256341'
};
console.log(userObjDest);

// 1.2 Renaming
