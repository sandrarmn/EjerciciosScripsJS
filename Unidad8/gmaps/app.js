var map;
var service;
const formBusqueda = document.getElementById('form-busqueda');
let infoWindow;

function iniMap() {
    var toledo = new google.maps.LatLng(39.87109, -4.02268);

    map = new google.maps.Map(
        document.getElementById('map'), { center: toledo, zoom: 15 });

    infoWindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
        position: toledo,
        map: map,
    });
}

function centraMap(lat, lng) {
    const positionGeo = new google.maps.LatLng(lat, lng);
    map.setCenter(positionGeo);
}

const buscarHandler = (e => {
    console.log(e.target);
    const busqueda = document.getElementById('busqueda').ariaValueMax;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=
        ${encodeURI(busqueda)}&region=ES&key=AIzaSyCnkTR_zPOUknwTlsinR5jHtr8_vbbuhb8`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error('Error consulta a la API:' + err)
    })
});

formBusqueda.addEventListener('submit', e => {
    e.preventDefault();
    buscarHandler(e);
})