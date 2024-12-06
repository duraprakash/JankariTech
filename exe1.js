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
    `Name: ` + `${user.name},\n`,
    `Gender: ` + `${user.gender},\n`,
    `Address\nCountry:` + `${user.address.country},\n`,
    `Provience: ` + `${user.address.provience},\n`,
    `Vdc/Municipality: ` + `${user.address.vdc_municipality},\n`,
    `Geo\nLatitude: ` + `${user.address.geo.lat},\n`,
    `Longitute: ` + `${user.address.geo.lng},\n`,
);

