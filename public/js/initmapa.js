var osmUrl = '';
var osmAttrib = '';
var mapa = null;
var latlngmap = -1;
var baselayer = null;

var SO = [-34.93661, -56.31711];
var NE = [-34.56312, -55.8078];


function onLocationError(e) {
    alert(e.message);
    console.log("Error al localizar");
}


function onLocationFound(e) {
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    //console.log(e.latlng);    
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



  function success(position) {
    lat  = position.coords.latitude;
    lng = position.coords.longitude;
    if (markerGeoLoc != null)
			 {
			 	mapa.removeLayer(markerGeoLoc);			 
			 }
			 var desc = "Estás en " + lat.toString() + "  " + lng.toString();
			 markerGeoLoc = L.marker([lat,lng]).bindPopup(desc).addTo(mapa);	
    
  };

  function error() {
    alert("No es posible establecer tu ubicación");
  };

  
  navigator.geolocation.getCurrentPosition(success, error);

function loadMapa()
{		
	lat = -1;
	lng = -1;
	osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';	
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

	
	//mapa.locate({setView: true, maxZoom: 16});	
	
	if (!navigator.geolocation){
		alert("El navegador no tiene soporte para Geolocalización");
    
    }	
    else
    {
		var timeoutVal = 10 * 1000 * 1000;
		navigator.geolocation.getCurrentPosition(success, error,
			{ enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 });
	}
    						
    mapa.options.maxZoom = 16;																	
	mapa.setView([lat,lng]);
					
	mapa.on('click', onMapClick);	

	mapa.on('locationfound', onLocationFound);
	
	mapa.on('locationerror', onLocationError);
		
			

};   














