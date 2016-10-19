var routeControl = null;
var showControl = false;

var line = null;

function convertirKM(distancia)
{
    var distanciaConvertida = '';
    if (distancia >= 1000)
    {
        distancia = distancia/1000;
        distanciaConvertida = distancia.toString() + ' km';
    }
    else
        distanciaConvertida = distancia.toString() + ' m';

    return distanciaConvertida;
}

function borrar()
{
    if (marker1 !== null)
    {
        mapa.removeLayer(marker1);
        marker1 = null;
    }

    if (marker2 !== null)
    {
        mapa.removeLayer(marker2);
        marker2 = null;
    }

    waypoints.length = 0;
    coords.length = 0;

    if (line !== null)
        mapa.removeLayer(line);

}

function borrarRuta()
{
    routeControl.getPlan().setWaypoints([]);
}

function esconderMostrar()
{
    if (showControl)  // control despleagdo
        {
            routeControl.hide();
            showControl = false;
            /*$(".btnBorrar").css({
                       'right': '11px', //antes 37% 6
                      'top': '70px' //antes 13%*  5
                       });    */
        }
        else
        {
            routeControl.show();
            showControl = true;
            /*$(".btnBorrar").css({
                      'right': '27%', //antes 37% 6
                      'top': '70px' //antes 13%*  5
                       }); */
        }
}


function displayRoutingControl()
{

    if (routeControl == null)
    {

        crearControlRouting();

         /*$(".btnBorrar").css({
                       'display': 'inline',
                       'right': '37%', //antes 37% 6
                      'top': '70px' //antes 13%*  5
                       });        */
        showControl = true;
    }

}


function removeRouting()
{
    if (routeControl != null)
    {
        mapa.removeControl(routeControl);  //remueve el camino tb
        routeControl = null;
        /*$(".btnBorrar").css({
                       'display': 'none',
                       'right': '-44px', //antes 37% 6
                       'left': 'auto',
                      'top': '70px' //antes 13%*  5
                       });     */
    }
}

// function crearControlRouting() {
//
//       routeControl = L.Routing.control({
//
//
//         router: L.Routing.mapzen('mapzen-3indRB', {
//             costing: 'bicycle',
//             directions_options: {
//               language: 'es'
//             }
//         }),
//
//         plan: L.Routing.plan([], {
//                 geocoder: L.Control.Geocoder.nominatim({
//                 geocodingQueryParams: { countrycodes: 'uy'}
//               }),
//               reverseWaypoints: true,
//               city:'Montevideo',
//               language: 'sp'
//             }),
//         lineOptions: {
//             styles:
//                 [
//                     {color: 'black', opacity: 0.15, weight: 9}, //sombra
//                     {color: 'white', opacity: 0.8, weight: 6}, // Contorno
//                     {color: 'red', opacity: 1, weight: 4}] // Centro
//        },
//        summaryTemplate:  '<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}</h3>',
//        language: 'sp',
//         //city: 'Montevideo',   //si no va plan, debe agregarse si se desea afinar búsquedas.
//         routeWhileDragging: true,
//         waypointMode:  'snap',
//         collapsible: true  //nuevo
//     }).addTo(mapa);
//
// }

function crearControlRouting() {
var control = L.Routing.control({
    routeLine: function (route, options) { return L.Routing.mapzenLine(route, options); },
  //  waypoints: routingData.waypoints,
  // You can get your own Mapzen turn-by-turn & search API key from the Mapzen developer portal (https://mapzen.com/developers/)

    geocoder: L.Control.Geocoder.mapzen('mapzen-3indRB'),
    reverseWaypoints: true,
    router: L.Routing.mapzen('mapzen-3indRB', {
                 costing: 'bicycle',
                 directions_options: {
                 language: 'es'
                 }
    }),

    collapsible: true,    
    formatter: new L.Routing.mapzenFormatter(),
    lineOptions: {
                 styles:
                     [
                         {color: 'black', opacity: 0.15, weight: 9}, //sombra
                         {color: 'white', opacity: 0.8, weight: 6}, // Contorno
                         {color: 'red', opacity: 1, weight: 4}] // Centro
            },
    summaryTemplate:'<div class="start">{name}</div><div class="info {costing}">{distance}</div>'
    //summaryTemplate:  '<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}</h3>',
}).addTo(map);

L.Routing.errorControl(control).addTo(map);

// to show where waypoints are even if there is no routing data
control.on('routingerror', function () {
  var waypoints = control.getWaypoints();
  map.fitBounds([
    waypoints[0].latLng,
    waypoints[waypoints.length-1].latLng
  ]);
})
}

function calcRoute()  // esto para cuando no se usa el control
{
    waypoints.length = 0;
    coords.length = 0;
    waysp.length = 0;
    if ((marker1 !== null)  && (marker2 !== null))
    {
        waypoints.push({latLng: marker1.getLatLng()});
        waypoints.push({latLng: marker2.getLatLng()});
        router.route(waypoints, function(err, routes) {
         if (line) {
             map.removeLayer(line);
         }

         if (err) {
             alert(err);
         } else {
             coords = routes[0].coordinates;
             waysp = routes[0].waypoints;
             alert(routes[0].summary.totalTime);
             alert(routes[0].summary.totalDistance);
             line = L.Routing.line(routes[0],{styles:[{color: 'black', opacity: 0.15, weight: 7}, {color: 'white', opacity: 0.8, weight: 4}, {color: 'red', opacity: 1, weight: 4}]}).addTo(map);

         }
     });

    }
    else
        alert("Se necesita el par Origen-Destino para calcular la ruta");
}

function rutaAB(latA, latB)  // esto para cuando no se usa el control
{
    var waypoints = [];
    var coords = [];
    var waysp = [];


    waypoints.length = 0;
    coords.length = 0;
    waysp.length = 0;
    if ((latA != null) && (latB != null))
    //if ((marker1 !== null)  && (marker2 !== null))
    {

        //var router = L.Routing.osrm();

        var latlngA = L.Routing.waypoint(latA);
        var latlngB = L.Routing.waypoint(latB);
        // waypoints.push({latLng: latA});
        // waypoints.push({latLng: latB});
        waypoints.push(latlngA);
        waypoints.push(latlngB);

        var routes = null;

        //routes = L.Routing.osrmv1({addWaypoints: false});
        router: L.Routing.mapzen('mapzen-3indRB', {
            addWaypoints: false,
            costing: 'bicycle'
        }),


        routes.route(waypoints, function(err, routes) {
             if (line) {
                 mapa.removeLayer(line);
             }

             if (err) {
                 console.log(err);
             }
             else {

                 coords = routes[0].coordinates;
                 waysp = routes[0].waypoints;
                 line = L.Routing.line(routes[0],{styles:[{color: 'black', opacity: 0.15, weight: 7}, {color: 'white', opacity: 0.8, weight: 4}, {color: '#1652F4', opacity: 1, weight: 3}]}).addTo(mapa);

                 var distanciaCerc = convertirKM(routes[0].summary.totalDistance);
                 popup = L.popup({offset: L.point(0, -30)})
                        .setLatLng(latB)
                        .setContent('<p>Distancia: <b>' + distanciaCerc + '</b></p>')
                        .openOn(mapa);

             }
       });

    }
    else
    {
        alert("Se necesita el par Origen-Destino para calcular la ruta");

    }

}
