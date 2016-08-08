var osmUrl = '';
var osmAttrib = '';
var mapa = null;
var latlngmap = -1;
var baselayer = null;

var SO = [-35.99578538642032, -60.66650390624999];
var NE = [-26.175158990178122,-49.482421875];



function onLocationError(e) {
    alert(e.message);
    mapa.setView([-34.9053694,-56.2072348],13);
    console.log("Error al localizar");
}


function onLocationFound(e) {
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    mapa.setView(e.latlng, 16);

}

function onMapClick(e) {

			var desc = "Estás en " + e.latlng.toString();

			// esto es nuevo usado para geolocalización
			 if (markerGeoLoc != null)
			 {
			 	mapa.removeLayer(markerGeoLoc);
			 }
			 markerGeoLoc = L.marker(e.latlng).bindPopup(desc).addTo(mapa);

		}


function loadMapa()
{
	osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	osmAttrib = osmAttrib='Map data &copy <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

	bounds = new L.LatLngBounds(SO, NE);

	baselayer = L.tileLayer(osmUrl, {  //antes no había baselayer, se agregó para el control de diferentes capas
				attribution: osmAttrib,
				minZoom: 2,
				maxZoom: 50
		});


	mapa = L.map('map',{zoomControl:false, maxBounds:bounds, minZoom: 2, inertia:true, layers: [baselayer]}).setView([-34.9053694,-56.2072348], 13);

	L.control.zoom({
     position:'bottomleft'
}).addTo(mapa);


	mapa.locate({setView: true, maxZoom: 16});
	//mapa.locate();


	mapa.on('click', onMapClick);

	mapa.on('locationfound', onLocationFound);

	mapa.on('locationerror', onLocationError);



};
