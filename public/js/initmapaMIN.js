function onLocationError(o){alert(o.message),console.log("Error al localizar")}function onLocationFound(o){markerGeoLoc=L.marker(o.latlng).addTo(mapa),latlngmap=L.latLng(o.latlng.lat,o.latlng.lng)}function onMapClick(o){var a="Estás en "+o.latlng.toString();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(o.latlng).bindPopup(a).addTo(mapa)}function loadMapa(){osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",osmAttrib=osmAttrib='Map data &copy <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',bounds=new L.LatLngBounds(SO,NE),baselayer=L.tileLayer(osmUrl,{attribution:osmAttrib,minZoom:2,maxZoom:50}),mapa=L.map("map",{zoomControl:!1,maxBounds:bounds,minZoom:2,inertia:!0,layers:[baselayer]}).setView([-34.9053694,-56.2072348],13),L.control.zoom({position:"bottomleft"}).addTo(mapa),mapa.locate({setView:!0,maxZoom:16}),mapa.on("click",onMapClick),mapa.on("locationfound",onLocationFound),mapa.on("locationerror",onLocationError)}var osmUrl="",osmAttrib="",mapa=null,latlngmap=-1,baselayer=null,SO=[-34.937505,-58.337328],NE=[-29.952313,-53.118822];