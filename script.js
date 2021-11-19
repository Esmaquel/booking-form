console.log('Im linked');
const userSearch = document.querySelector('#userSearch');

const form = document.querySelector("form");
console.log(form.elements[1].name.type)
console.log(form.elements.email == form);


let map;
let markers = [];

function initMap() {
    let iceland = { latitude: 64.9631, longitude: -19.0208 };
    map = new google.maps.Map(document.getElementById('map'),{
            zoom: 5,
            center: iceland
    });
};
let acommodation = [
    {
        id: 101,
        name: 'hotel',
        type: 'hotel',
        price: 157,
        meal: ['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAduktGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        image: ['./img/hotel-01.jpg', './img/hotel-02.jpg', './img/hotel-011.jpg',
        './img/hotel-012.jpg', './img/hotel-013.jpg', './img/hotel-014.jpg'],
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
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAduktGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        image: ['./img/hotel-021.jpg', './img/hotel-023.jpg', './img/hotel-024.jpg',
        './img/hotel-031.jpg'],
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
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAduktGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        image: ['./img/hotel-01.jpg', './img/hotel-02.jpg', './img/hotel011.jpg',
        './img/hotel012.jpg', './img/hotel-013.jpg', './img/hotel-014.jpg'],
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
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests: 2,
        minAdultNights: 1,
        maxAdultNights: 5,
        minKidsGuests: 1,
        maxKidsGuests: 2,
        minKidsNights: 1,
        maxKidsNights: 5,
        image: ['./img/hotel-051.jpg', './img/hotel-052.jpg', './img/hotel-053.jpg',
        './img/hotel-054.jpg', './img/hotel-055.jpg', './img/hotel-014.jpg'],
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.60558712361096,
        longitude: -18.65329363247231,
        ShowAll: 'All'
},
    {
        id: 102,
        name: 'hostel',
        type: 'hostel',
        price: 30,
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:1,
        minAdultNights:1,
        maxAdultNights: 10,
        minKidsGuests: 1,
        maxKidsGuests:1,
        minKidsNights:1,
        maxKidsNights:10,
        image: './img/hotel-011.jpg',
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.78625698912022,
        longitude: -21.98442118600065,
        ShowAll: 'All'
    },
    {
        id: 103,
        name: 'motel',
        type: 'motel',
        price: 90,
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 2,
        maxAdultGuests:4,
        minAdultNights:3,
        maxAdultNights: 10,
        minKidsGuests: 2,
        maxKidsGuests:4,
        minKidsNights:3,
        maxKidsNights:10,
        image: './img/hotel-011.jpg',
        tag: ['hotel', 'hostel', 'motel', 'house', 'backpackers'],
        latitude: 65.06074936401986,
        longitude: -16.69548393975031,
        ShowAll: 'All'
    },
    {
        id: 102,
        name: 'house',
        type: 'house',
        price: 240,
        meal:['breakfast', 'lunch', 'dinner', 'kids meal'],
        minAdultGuests: 1,
        maxAdultGuests:4,
        minAdultNights:2,
        maxAdultNights: 15,
        minKidsGuests: 1,
        maxKidsGuests:4,
        minKidsNights:2,
        maxKidsNights: 15,
        image: './img/hotel-011.jpg',
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

    let numberOfPeople, numberOfkids, DropdownMenu = $('#numberOfPeople') + $("#numberOfkids") + $("#myDropdownMenu").val();
    console.log(numberOfPeople);
    console.log(numberOfkids);
    console.log(DropdownMenu);
    displayOptions(numberOfDays, numberOfPeople, DropdownMenu);


    function displayOptions(nights, guests, Addmeal) {
        reloadMarkers();
        console.log(nights);
        console.log(guests);
        console.log(Addmeal);
        $('#objectArrayModalInfo').empty();
        for (let i = 0; i < acommodation.length; i++) {
            if (((nights <= acommodation[i].maxAdultNights) && (nights >= acommodation[i].minAdultNights)) + ((nights <= acommodation[i].maxKidsNights) && (nights >= acommodation[i].minKidsNights))
                && ((guests <= acommodation[i].maxAdultGuests) && (guests >= acommodation[i].minAdultGuests)) + ((nights <= acommodation[i].maxKidsNights) && (nights >= acommodation[i].minKidsNights))) {
                generateCard(i);
                let location = { lat: acommodation[i].latitude, lng: acommodation[i].longitude };
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


function objectArrayCardInfo(){
    let i = 0;
    for(i = 0; i<acommodation.length; i++){
        $('#cardContent').append(
            `
            <div class="card" style="width: 15rem;">
            <img class="card-img-top" src="${acommodation[i].image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${acommodation[i].name}</h5>
                <p class="card-text">${acommodation[i].type}</p>
                <p class="card-text">NZD$ ${acommodation[i].price}</p>
                <button id="${acommodation[i].meal}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Meal Options
                </button>
            </div>
        </div>

            `
        );
    };
};


function objectsLoop(){
    objectArrayCardInfo();

$(".moreInformation").click(function(){
        console.log("clicked");
        let i = 0;
        for(i = 0; i< acommodation.length; i++){
            if(parseInt(this.id) === acommodation[i].id){
                $("#objectArrayModalInfo").empty().append(

                    `
                     <p>${acommodation[i].name}</p>
                     <p>We update our recipe weekly</p>
                     <img class="card-img-top" src="${acommodation[i].meal}" alt="Meal Options">

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
            for (i = 0; i < acommodation.length; i++) {
                //    start of if statement
                // check to see if fish is equal to kind of fish
                if (acommodation[i].type === 'hotel') {
                    let i = 0;
                    for (i = 0; i < acommodation.length; i++);
                    //    start of append
                    $('#cardContent').append(
                        `
                                    <div class="card card--style" style="width: 18rem;">
                                        <div class="img-container">
                                        <img class="card-img-top" src="${acommodation[i].image}" alt="Card image cap">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">${acommodation[i].name}</h5>
                                            <p class="card-text">${acommodation[i].type}</p>
                                            <p class="card-text">$${acommodation[i].price}</p>
                                            <button id="${acommodation[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
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
            for (i = 0; i < acommodation.length; i++) {
                //    start of if statement
                // check to see if salmon is equal to smoked salmon
                if (acommodation[i].type === 'motel') {
                    //    start of append
                    $('#cardContent').append(
                        `
                            <div class="card card--style" style="width: 18rem;">
                                <div class="img-container">
                                <img class="card-img-top" src="${acommodation[i].image}" alt="Card image cap">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${acommodation[i].name}</h5>
                                    <p class="card-text">${acommodation[i].type}</p>
                                    <p class="card-text">$${acommodation[i].price}</p>
                                    <button id="${acommodation[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
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
};
// end of selected loop

function generateCard(x){
  $('#acommodationCardContainer').append(
      `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${acommodation[x].image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${acommodation[x].name}</h5>
        <p class="card-text">price per night is $${acommodation[x].price}</p>
        <a href="#" class="btn btn-primary">Book</a>
        <button id="${acommodation[x].meal}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">Meal Option</button>
      </div>
    </div>
      `

  );
    };



userSearch.addEventListener('click',filterOptions);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}