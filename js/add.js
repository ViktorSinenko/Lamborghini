
const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu--open');
});




const swiper = new Swiper('.swiper', {
   loop: true,

   navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
   },
   breakpoints: {
      0: {
         slidesPerView: 1 
      },
      772: {
         slidesPerView: 2,
         spaceBetween: 20
      }
   }
});

let map;

async function initMap() {
   const { Map } = await google.maps.importLibrary("maps");

   map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 14,
      styles: [
         {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#444444"
               }
            ]
         },
         {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
               {
                  "color": "#f2f2f2"
               }
            ]
         },
         {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
               {
                  "saturation": -100
               },
               {
                  "lightness": 45
               }
            ]
         },
         {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
               {
                  "visibility": "simplified"
               }
            ]
         },
         {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
               {
                  "color": "#9c9c9c"
               },
               {
                  "visibility": "on"
               }
            ]
         }
      ]
   });
}

initMap();