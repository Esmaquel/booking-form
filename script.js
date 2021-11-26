console.log('Im linked');
const userSearch = document.querySelector('#userSearch');
const searchFilter = document.querySelector("#searchFilter");
const list = document.getElementById('list');


// const form = document.querySelector("form");
// console.log(form.elements[1].name.type)
// console.log(form.elements.email == form);
//

let map;
let markers = [];

function initMap() {
    let iceland = { latitude: 64.9631, longitude: -19.0208 };
    map = new google.maps.Map(document.getElementById('map'),{
            zoom: 5,
            center: iceland
    });
};
let objectArray = [
    {
        id: 101,
        name: 'Hilton Hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-01.jpg',
        image01: './img/hotel-02.jpg',
        image02: './img/hotel-011.jpg',
        image03: './img/hotel-012.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'Get the celebrity treatment with world-class service at Hilton Hotel Centrally located at CBD Wellington.',
        Facilities: '',
        minAdultGuests: 1,
        maxAduktGuests: 2,
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.60558712361096,
        longitude: -18.65329363247231,
        ShowAll: 'All'
    },


    {
        id: 102,
        name: 'hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-02.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.60558712361096,
        longitude: -18.65329363247231,
        ShowAll: 'All'


    },

    {
        id: 103,
        name: 'hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-011.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.60558712361096,
        longitude: -18.65329363247231,
        ShowAll: 'All'
},
    {
        id: 104,
        name: 'hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-012.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
},
    {
        id: 104,
        name: 'hotel',
        type: 'hotel',
        price: 30,
        image: './img/hotel-013.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:1,
        minAdultNights:1,
        maxAdultNights: 10,
        minKidsGuests: 1,
        maxKidsGuests:1,
        minKidsNights:1,
        maxKidsNights:10,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.78625698912022,
        longitude: -21.98442118600065,
        ShowAll: 'All'
    },
    {
        id: 105,
        name: 'hotel',
        type: 'hotel',
        price: 90,
        image: './img/hotel-014.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 2,
        maxAdultGuests:4,
        minAdultNights:3,
        maxAdultNights: 10,
        minKidsGuests: 2,
        maxKidsGuests:4,
        minKidsNights:3,
        maxKidsNights:10,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.06074936401986,
        longitude: -16.69548393975031,
        ShowAll: 'All'
    },
    {
        id: 106,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-021.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 107,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-023.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 108,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-024.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 109,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-031.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 110,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-041.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 111,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-042.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 112,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-044.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 113,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-051.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 114,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-052.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 115,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-053.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 116,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-054.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 117,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel-055.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 118,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel033.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 119,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel034.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'hotel',
        type: 'hotel',
        price: 240,
        image: './img/hotel043.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-01.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-02.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-03.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-04.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-012.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-013.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-014.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-021.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-022.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-023.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-024.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-031.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-032.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-033.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-034.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-035.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-041.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-042.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-043.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-044.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-045.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-051.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 240,
        image: './img/hostel-052.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-053.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-054.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-055.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-056.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-01.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-02.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-03.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-04.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-021.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-022.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-023.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-024.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-025.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-026.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-031.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-032.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-033.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-034.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-035.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-036.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-037.jpeg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-041.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-042.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-043.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-044.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-045.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-046.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-047.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-051.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-052.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-053.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-054.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-055.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-056.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'house',
        type: 'house',
        price: 240,
        image: './img/house-057.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-01.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-012.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-013.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-014.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-015.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-016.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-021.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-022.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-023.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-024.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-025.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-031.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-032.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-033.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-034.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-035.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-036.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-037.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-041.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-042.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-043.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-044.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-045.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-046.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-047.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-048.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-051.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-052.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-053.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-054.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-054.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-055.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },
    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-056.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-057.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },

    {
        id: 120,
        name: 'motel',
        type: 'motel',
        price: 90,
        image: './img/motel-058.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'
    },


];



function filterOptions(event) {
    event.preventDefault();
    console.log('clicked');

    let msday = 1000 * 3600 * 24;

    let checkInDate = new Date($('#checkInDate').val());
    let checkOutDate = new Date($('#checkOutDate').val());
    console.log(checkInDate);
    console.log(checkOutDate);

    let dateDifference = checkOutDate.getTime() - checkInDate.getTime();
    let numberOfDays = dateDifference / msday;
    console.log(numberOfDays);

    let numberOfPeople, numberOfkids, myDropdownMenu = $('#numberOfPeople') + $("#numberOfkids") + $("#myDropdownMenu").val();
    console.log(numberOfPeople);
    console.log(numberOfkids);
    console.log(myDropdownMenu);
    displayOptions(numberOfDays, numberOfPeople, myDropdownMenu);


    function displayOptions(nights, guests, addMeal) {
        reloadMarkers();
        console.log(nights);
        console.log(guests);
        console.log(addMeal);
        $('#acommodationCardContainer').empty();
        for (let i = 0; i < objectArray.length; i++) {
            if (((nights <= objectArray[i].maxAdultNights) && (nights >= objectArray[i].minAdultNights)) + ((nights <= objectArray[i].maxKidsNights) && (nights >= objectArray[i].minKidsNights))
                && ((guests <= objectArray[i].maxAdultGuests) && (guests >= objectArray[i].minAdultGuests)) + ((nights <= objectArray[i].maxKidsNights) && (nights >= objectArray[i].minKidsNights))) {
                generateCard(i);
                let location = { lat: objectArray[i].latitude, lng: objectArray[i].longitude };
                console.log(location);
                let marker = new google.maps.Marker({
                    position: location,
                    map: map

                });
                markers.push(marker);
            }
        }
    }
}
console.log(markers);



function reloadMarkers(){
    // loop through our array and set the map to null value
    for(let i =0; i<markers.length; i++){
        markers[i].setMap(null);
    }
    markers=[];
}

//start modal---


function objectArrayCardInfo(x){
    let i = 0;
    for(i = 0; i<objectArrayCardInfo.length; i++){
        $('#acommodationCardContainer').append(
            `
            <div class="card" style="width: 15rem;">
            <img class="card-img-top" src="${objectArray[x].image}" alt="Card image cap">
            <div class="card-body">
                <i class="fas fa-map-marker-alt"> ${objectArray[x].mapIcon}</i>
                <h5 class="card-title">${objectArray[x].name}</h5>
                <p class="card-text">${objectArray[x].type}</p>
                <p class="card-text">NZD$ ${objectArray[x].price}</p>
                <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Meal Options
                </button>
            </div>
        </div>

            `
        );
    };
};


function objectsLoop(){
    for(let i = 0; i< objectArray.length; i++){
        objectArrayCardInfo(i);
    }


$(".moreInformation").click(function(){
        console.log("clicked");
        let i = 0;
        for(i = 0; i< objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                $("#objectArrayModalInfo").empty().append(

                    `

                     <h4>${objectArray[i].heading}</h4>
                     <p>${objectArray[i].name}</p>
                     <p>${objectArray[i].info}</p>


                     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${objectArray[i].image01}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${objectArray[i].image02}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${objectArray[i].image03}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        </div>


                    `
                );

            }
        }
    });
}

//end of modal


objectsLoop();

function TypeAcomodation(event){
    $('#cardContent').empty();
    event.preventDefault();
    let selected = [];
    // start of value check
    console.log(selectedAcomodation);
    $('input[name="acomodation"]:checked').each( function(){
       selectedAcomodation.push(this.value);
    });
    console.log(selectedAcomodation);
    // end of value check

    let i = 0;
    // start of selcted loop
    for (i = 0; i < selectedAcomodation.length; i++) {

        if (selectedAcomodation[i] === 'hotel') {
            let i = 0;
            for (i = 0; i < objectArray.length; i++) {
                //    start of if statement
                // check to see if hotel is equal to kind of hotel
                if (objectArray[i].type === 'hotel') {
                    let i = 0;
                    for (i = 0; i < objectArray.length; i++);
                    //    start of append
                    $('#cardContent').append(
                        `
                                    <div class="card card--style" style="width: 18rem;">
                                        <div class="img-container">
                                        <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">${objectArray[i].name}</h5>
                                            <p class="card-text">${objectArray[i].type}</p>
                                            <p class="card-text">$${objectArray[i].price}</p>
                                            <button id="${objectArray[i].meal}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                                more info
                                            </button>
                                        </div>
                                    </div>
                            `
                    );
                    // end of append
                };
                //    end of of statement
            }
        }

        if (selectedAcomodation[i] === 'motel') {
            let i = 0;
            for (i = 0; i < objectArray.length; i++) {
                if (objectArray[i].type === 'motel') {
                    //    start of append
                    $('#cardContent').append(
                        `
                            <div class="card card--style" style="width: 18rem;">
                                <div class="img-container">
                                <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${objectArray[i].name}</h5>
                                    <p class="card-text">${objectArray[i].type}</p>
                                    <p class="card-text">$${objectArray[i].price}</p>
                                    <button id="${objectArray[i].meal}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                        more info
                                    </button>
                                </div>
                            </div>
                    `
                    );
                    // end of append
                };
                //    end of of statement
            }
        }
    }

    if(selectedAcomodation[i] === 'hotel'){
        console.log('is equal to hotel');
    }
    if(selectedAcomodation[i] === 'hostel'){
        console.log('is equal to hostel');
    }

    if(selectedAcomodation[i] === 'motel'){
    console.log('is equal to motel');
    }

    if(selectedAcomodation[i] === 'house'){
    console.log('is equal to house');
    }
};
// end of selected loop

function generateCard(x){
  $('#acommodationCardContainer').append(
      `
      <div class="card" style="width: 18rem;">

      <img class="card-img-top" src="${objectArray[x].image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${objectArray[x].name}</h5>
        <p class="card-text">price per night is $${objectArray[x].price}</p>
        <a href="#" class="btn btn-primary">Book</a>
        <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">More Info</button>
      </div>
    </div>
      `

  );
    };

//filter search

userSearch.addEventListener('click',filterOptions);



filterSelection("all")
function filterSelection(c) {
  let y, i;
  y = document.getElementsById("#objectArrayModalInfo");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    returnALl(x[i], "show");
      if (x[i].tag.indexOf(c) > -1) returnALl(x[i], "show");

  }
}

function returnALl(element, name) {
    let i, arr1, arr2;
    arr1 = element.containerCategory.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

  function returnALl(element, name) {
    var i, arr1, arr2;
    arr1 = element.containerCategory.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.containerCategory = arr1.join(" ");
  }


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
