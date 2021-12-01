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

    let wellington = { lat: -41.2924, lng: 174.7787 };
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 6,
        center: {lat:-40.9006, lng:174.8860},
        mapTypeId: 'satellite'
    });

    const marker = new google.maps.Marker({
        position: wellington,
        map:map,

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
        Facilities: './img/parking-solid.svg',
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
        latitude: 41.2841,
        longitude: -18.65329363247231,
        ShowAll: 'All'
    },


    {
        id: 102,
        name: 'Rydges Hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-021.jpg',
        image01: './img/hotel-023.jpg',
        image02: './img/hotel-024.jpg',
        image03: './img/hotel-011.jpg',
        info: 'This 4.5-star hotel features a fitness centre, on site restaurant and bar, room service and 24-hour front desk. Offering stylish and contemporary guest rooms, Rydges Wellington Airport provides free unlimited WiFi. It is a 20-minute drive from Wellington CBD.',
        heading: 'Conveniently located above the international terminal of Wellington Airport,',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Breakfast: '25',
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.77419993855042,
        longitude:  -41.26891266858434,
        ShowAll: 'All'

        


    },

    {
        id: 103,
        name: 'Sofitel Wellington',
        type: 'hotel',
        price: 157,
        image: './img/hotel-031.jpg',
        image01: './img/hotel033.jpg',
        image02: './img/hotel034.jpg',
        image03: './img/hotel043.jpg',
        info: 'It offers guests a city escape, just 450 m from the waterfront. Dine at Spring restaurant for breakfast, lunch or dinner, featuring Asian and European inspired cuisine.The property is close to several noted attractions, 60 m from Wellington Cable Car and 270 m from TSB Arena. The Te Papa Museum is 950 m away.',
        heading: 'Situated in Wellington CBD ',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.77460843873789,
        longitude: -41.27948936059789,
        ShowAll: 'All'

         
},
    {
        id: 104,
        name: 'Ohtel Wellington',
        type: 'hotel',
        price: 157,
        image: './img/hotel-051.jpg',
        image01: './img/hotel034.jpg',
        image02: './img/hotel-044.jpg',
        image03: './img/hotel-051.jpg',
        info: 'The rooms are individually furnished with mid-century elegance and fuse international class with urban chic. Adjacent to Wellington’s entertainment precinct and seaside promenade, Ohtel Wellington is close to major attractions and many theatres, restaurants and entertainment venues.',
        heading: 'Ohtel Wellington, located in Oriental Bay, offers guests a 5-star experience from the personalised service and luxurious accommodation. ',
        Facilities: '',
        image: './img/hotel-012.jpg',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.7866651689101,
        longitude: -41.292037144411495,
        mapIcon: './map-marker-alt-solid.svg',
        ShowAll: 'All'

         
},
    {
        id: 105,
        name: 'Bolton Hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-051.jpg',
        image01: './img/hotel-052.jpg',
        image02: './img/hotel-053.jpg',
        image03: './img/hotel-054.jpg',
        info: 'Bolton Hotel Wellington offers a choice of spacious studios and suites. Most rooms feature views of the Bolton Memorial Park Park or downtown Wellington. Every suite has a separate dining and living area, laundry facilities and a fully equipped kitchen.The in-house restaurant, Artisan, serves modern New Zealand cuisine and private dining is available. There is also a lobby café serving locally roasted coffee and home made light meals and treats.',
        heading: 'Bolton Hotel is an elegant, boutique, 5-star hotel offering free WiFi on multiple devices and in-room iPad minis',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests:1,
        minAdultNights:1,
        maxAdultNights: 10,
        minKidsGuests: 1,
        maxKidsGuests:1,
        minKidsNights:1,
        maxKidsNights:10,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude:  174.77504800567718,
        longitude:  -41.2790184824096, 
        ShowAll: 'All'

      
    },
    {
        id: 106,
        name: 'City Life Hotel',
        type: 'hotel',
        price: 157,
        image: './img/hotel-02.jpg',
        image01: './img/hotel-021.jpg',
        image02: './img/hotel-023.jpg',
        image03: './img/hotel-024.jpg',
        info: 'It features a fully equipped fitness centre and guests enjoy free unlimited WiFi access.Guests at CityLife Wellington Hotel can choose between studios with open-plan sleeping and living areas, or larger 1 and 2-bedroom apartments with separate living rooms and kitchens.',
        heading: 'Citylife Wellington offers modern 4-star accommodation in the heart of Wellington’s trendy shopping area of Lambton Quay.',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 2,
        maxAdultGuests:4,
        minAdultNights:3,
        maxAdultNights: 10,
        minKidsGuests: 2,
        maxKidsGuests:4,
        minKidsNights:3,
        maxKidsNights:10,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude:  174.7758506400737,
        longitude: -41.28452354070732, 
        ShowAll: 'All'

       
    },
    {
        id: 107,
        name: 'The Marion',
        type: 'hostel',
        price: 30,
        image: './img/hostel-04.jpg',
        image01: './img/hostel-01.jpg',
        image02: './img/hostel-02.jpg',
        image03: './img/hostel-03.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'The Marion is your beautiful hostel right in the heart of New Zealand capital, near Cuba Street and Courtenay Place, where the cultural and bohemian city life is happening.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.7775524763237,
        longitude:  -41.293969451574654,
        ShowAll: 'All'

        
    },

    {
        id: 108,
        name: 'Lodge In The City',
        type: 'hostel',
        price: 30,
        image: './img/hostel-024.jpg',
        image01: './img/hostel-022.jpg',
        image02: './img/hostel-023.jpg',
        image03: './img/hostel-021.jpg',
        info: 'Our large spacious lodge is located in central Wellington. We have a wide range of accommodation available from backpacker dorms to self contained units. We also provide long-term stays.The Lodge is in the heart of Wellington buzzing cafe bar club and theatre district. We are only minutes walk to the waterfront Te Papa Museum Cuba St with its mouth watering cuisine and Courtney Place with its fantastic nightlife.',
        heading: 'Lodge in the City is the cheapest Hostel in Wellington',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.77733901123779,
        longitude: -41.29549960011848,
        ShowAll: 'All'

         
    },
    {
        id: 109,
        name: 'Waterloo Hostel',
        type: 'hostel',
        price: 30,
        image: './img/hostel-031.jpg',
        image01: './img/hostel-034.jpg',
        image02: './img/hostel-033.jpg',
        image03: './img/hostel-031.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'Get the celebrity treatment with world-class service at Hilton Hotel Centrally located at CBD Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude:  174.78067333028892,
        longitude:  -41.280056613137866,
        ShowAll: 'All'

       
    },
    {
        id: 110,
        name: 'The Dwellington',
        type: 'hostel',
        price: 30,
        image: './img/hoStel-043.jpg',
        image01: './img/hostel-044.jpg',
        image02: './img/hostel-045.jpg',
        image03: './img/hostel-051.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'The Dwellington perfectly blends the homely, the cozy and the stylish within a backpackers property. We guarantee you will not stay in a hostel as luxurious as this anywhere in New Zealand.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.78000778425434,
        longitude:   -41.27322057288533,
        ShowAll: 'All'

      
    },
    {
        id: 111,
        name: 'The Cambridge',
        type: 'hostel',
        price: 30,
        image: './img/hotel-053.jpg',
        image01: './img/hostel-054.jpg',
        image02: './img/hostel-055.jpg',
        image03: './img/hostel-056.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'Get the celebrity treatment with world-class service at Hilton Hotel Centrally located at CBD Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.8279330267126,
        longitude:   -41.22891857818512,
        ShowAll: 'All'

       
    },
    {
        id: 112,
        name: 'Trek Global',
        type: 'hostel',
        price: 30,
        image: './img/hostel-045.jpg',
        image01: './img/hostel-044.jpg',
        image02: './img/hostel-045.jpg',
        image03: './img/hostel-051.jpg',
        info: 'Whether you are en-route to an adrenaline driven destination or fancy a few days to explore the culture capital of NZ come and stay with us at Trek and we will make it your home for the night or week Whether you are flying solo or travelling with friends our aim at Trek Global is to provide you with a memorable Wellington experience whilst giving you a homely and friendly base to explore from.',
        heading: 'Trek Global is the friendly, fun backpackers in the heart of Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude:  174.77411271123762,
        longitude: -41.28883605574653,
        ShowAll: 'All'

        
    },
    {
        id: 113,
        name: 'Capital View',
        type: 'motel',
        price: 90,
        image: './img/motel-01.jpg',
        image01: './img/motel-012.jpg',
        image02: './img/motel-013.jpg',
        image03: './img/motel-014.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'Get the celebrity treatment with world-class service at Hilton Hotel Centrally located at CBD Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.77218168240165,
        longitude:  -41.297250103237666, 
        ShowAll: 'All'

       
    },
    {
        id: 114,
        name: 'Apollo Lodge',
        type: 'motel',
        price: 90,
        image: './img/motel-021.jpg',
        image01: './img/motel-022.jpg',
        image02: './img/motel-023.jpg',
        image03: './img/motel-024.jpg',
        info: 'All rooms at Apollo Lodge Motel Wellington feature ironing facilities and a private bathroom. Tea/coffee making facilities, plus a microwave, refrigerator and toaster are provided.',
        heading: 'Situated in the heart of Wellington’s entertainment precinct, Apollo Lodge Motel offers free WiFi and free off-street parking, subject to availability. Each room includes heating and satellite TV.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.78688732287586,
        longitude:  -41.29456576636624,
        ShowAll: 'All'

       
    },
    {
        id: 115,
        name: 'Ascot Motor Lodge',
        type: 'motel',
        price: 90,
        image: './img/motel-031.jpg',
        image01: './img/motel-032.jpg',
        image02: './img/motel-033.jpg',
        image03: './img/motel-034.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'Get the celebrity treatment with world-class service at Hilton Hotel Centrally located at CBD Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.77864990938477,
        longitude:    -41.30925338040178,
        ShowAll: 'All'
      

        
    },
    {
        id: 116,
        name: 'Newlands Court',
        type: 'motel',
        price: 90,
        image: './img/motel-043.jpg',
        image01: './img/motel-044.jpg',
        image02: './img/motel-045.jpg',
        image03: './img/motel-046.jpg',
        info: 'Te Papa Museum, Westpac Stadium and Hutt Valley are all within 10 minutes’ drive from the property. The motel is located along the main bus route to Wellington where you will find a large variety of restaurants, shops and entertainment facilities. The Interisland Ferry Terminal is 11 minutes’ drive away.n',
        heading: 'Refurbished in 2016, Newlands Court Motel is located in Newlands, within 15 minutes’ drive from the centre of Wellington. Guests of this motel can enjoy gardens and free on-site parking.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.81833718610656,
        longitude: -41.229781000800855,
        ShowAll: 'All'

        
    },
    {
        id: 117,
        name: 'Halswell Lodge',
        type: 'motel',
        price: 90,
        image: './img/motel-021.jpg',
        image01: './img/motel-012.jpg',
        image02: './img/motel-022.jpg',
        image03: './img/motel-023.jpg',
        info: 'All rooms include satellite TV with 7 movie and sport channels. Free unlimited WiFi is provided. Guests have access to either private or shared kitchen facilities.Te Papa Museum and Wellington’s waterfront are less than 10 minutes’ walk away. It is a 5-minute drive to Westpac Stadium and 10 minutes’ drive to the Interislander Ferry Terminal',
        heading: 'Halswell Lodge is located next to Courtenay Place in central Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude:  174.7846122628323,
        longitude:  -41.294992745572614,
        ShowAll: 'All'

       
    },
    {
        id: 118,
        name: 'Victoria Court ',
        type: 'motel',
        price: 90,
        image: './img/motel-058.jpg',
        image01: './img/motel-057.jpg',
        image02: './img/motel-058.jpg',
        image03: './img/motel-059.jpg',
        info: 'It offers stylish accomodation with picturesque views of the hillsides and Botanic Garden',
        heading: 'Get the celebrity treatment with world-class service at Hilton Hotel Centrally located at CBD Wellington.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 174.77423838425491,
        longitude: -41.293347715178264,
        ShowAll: 'All'

        
    },
    {
        id: 119,
        name: 'Entire Home',
        type: 'house',
        price: 240,
        image: './img/house-01.jpg',
        image01: './img/house-02.jpg',
        image02: './img/house-03.jpg',
        image03: './img/house-04.jpg',
        info: 'The cosy ground floor guest suite has a separate entry providing guest privacy and comes with a carpark right outside.The CBD is within reach, a 10 minute walk will get you to a bus stop but if walking (uphill or downhill) is a concern access by car is best. It is approximately a 10 minute car ride to Te Pa',
        heading: 'Our house is situated in a friendly neighbourhood at the end of a private cul-de-sac.',
        Facilities: '',
        Facilities2: '',
        Facilities3: '',
        Facilities4: '',
        Facilities5: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
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
        name: 'City Apartment',
        type: 'Two Bedroom',
        price: 240,
        image: './img/house-022.jpg',
        image01: './img/house-023.jpeg',
        image02: './img/house-024.jpeg',
        image03: './img/house-025.jpeg',
        info: 'The perfect spot in the city. Get the best of Mount Victoria, Oriental Bay and the city centre with this perfectly located studio apartment at the end of busy Courtenay Place, however nestled at the base of the beautiful Mount Victoria. ',
        heading: 'This is a studio apartment, so is cute and small, but it has everything you need including laundry and cooking facilities. It is completely private.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
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
        id: 121,
        name: 'Apartment In CBD',
        type: 'One bedroom',
        price: 240,
        image: './img/house-034.jpeg',
        image01: './img/house-035.jpeg',
        image02: './img/house-036.jpeg',
        image03: './img/house-037.jpeg',
        info: 'Our cosy stylish apartment is very light & warm, well equipped for all your needs for a comfortable & relaxed stay.',
        heading: 'Perfect for couples, solo adventurers, and business travellers.',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
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
        id: 122,
        name: 'Gorgeous Apartment',
        type: ' Two Bedroom',
        price: 240,
        image: './img/house-041.jpg',
        image01: './img/house-042.jpg',
        image02: './img/house-043.jpg',
        image03: './img/house-044.jpg',
        info: 'Brand spanking new stunning renovation - Your own private space. 2 gorgeous bedrooms 1 queen & 1 double, own entry, lounge, bathroom/laundry, kitchen complete with fan oven & Induction Hobbs. Enjoy your own balcony.',
        heading: 'Lovely family home with separate downstairs for guests to enjoy with WIFI and 50" LCD TV with complimentary Netflix & Apple TV',
        Facilities: '',
        meal: ['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
        minAdultGuests: 1,
        maxAdultGuests: 4,
        minAdultNights: 2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests: 4,
        minKidsNights: 2,
        maxKidsNights: 15,
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 64.07384853513256,
        longitude: -21.485987309390673,
        ShowAll: 'All'

    },
    {
        id: 123,
        name: 'Sunny Apartment',
        type: 'One Bedroom',
        price: 240,
        image: './img/house-056.jpg',
        image01: './img/house-057.jpg',
        image02: './img/house-053.jpg',
        image03: './img/house-052.jpg',
        info: 'Our cosy stylish apartment is very light & warm, well equipped for all your needs for a comfortable & relaxed stay. Perfect for couples, solo adventurers, and business travellers.',
        heading: 'Easy walking to all central wellington attractions',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        LunchPrice: '30',
        DinnerPrice: '35',
        KidsMenuPrice: '20',
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
        id: 124,
        name: 'Studio Type',
        type: 'house',
        price: 240,
        image: './img/house-04.jpg',
        image01: './img/house-054.jpg',
        image02: './img/house-058.jpg',
        image03: './img/house-057.jpg',
        info: 'Inner-City gem and oasis of quiet, Park Apartments offers a place of rest after a full day at work or around Wellington sights, activities and fantastic range of hospitality and retail businesses. Super easy access and a compact kitchenette for a Supermarket meal or take aways.',
        heading: 'Welcome to the heart of Welly!',
        Facilities: '',
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        Lunch: '30',
        Dinner: '35',
        KidsMenu: '20',
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
                <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">More Info
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
                     <i class="fas fa-parking" ${objectArray[i].Facilities}></i>
                     <i class="fas fa-wifi" ${objectArray[i].Facilities2}></i>
                     <i class="fas fa-sink" ${objectArray[i].Facilities3}></i>
                     <i class="fab fa-accessible-icon" ${objectArray[i].Facilities4}></i>
                     <i class="fas fa-tv" ${objectArray[i].Facilities5}></i>


                        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="10000">
                            <img src="${objectArray[i].image03}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item" data-interval="2000">
                            <img src="${objectArray[i].image01}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${objectArray[i].image02}" d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
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
    // start of selected loop
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
                                            <button id="${objectArray[i].image}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
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

        
        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Book</a>

        
        <button id="${objectArray[x].id}" type="button" class="btn btn-secondary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Meal Option</button>
      </div>
    </div>


    
      `

  );
    };


    


//filter search

userSearch.addEventListener('click',filterOptions);





// filterSelection("all")
// function filterSelection(c) {
//   let y, i;
//   y = document.getElementsById("#objectArrayModalInfo");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
    // returnALl(x[i], "show");
    //   if (x[i].tag.indexOf(c) > -1) returnALl(x[i], "show");
//
//   }
// }
//
// function returnALl(element, name) {
    // let i, arr1, arr2;
    // arr1 = element.containerCategory.split(" ");
    // arr2 = name.split(" ");
    // for (i = 0; i < arr2.length; i++) {
    //   if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    // }
//   }
//
//   function returnALl(element, name) {
    // var i, arr1, arr2;
    // arr1 = element.containerCategory.split(" ");
    // arr2 = name.split(" ");
    // for (i = 0; i < arr2.length; i++) {
    //   while (arr1.indexOf(arr2[i]) > -1) {
        // arr1.splice(arr1.indexOf(arr2[i]), 1);
    //   }
    // }
    // element.containerCategory = arr1.join(" ");
//   }
//
//
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel)
//