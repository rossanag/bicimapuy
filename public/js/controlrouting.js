function convertirKM(o){var t="";return t=o>=1e3?(o/1e3).toString()+" km":o.toString()+" m"}function borrar(){null!==marker1&&(mapa.removeLayer(marker1),marker1=null),null!==marker2&&(mapa.removeLayer(marker2),marker2=null),waypoints.length=0,coords.length=0,null!==line&&mapa.removeLayer(line)}function borrarRuta(){routeControl.getPlan().setWaypoints([])}function esconderMostrar(){showControl?(routeControl.hide(),showControl=!1):(routeControl.show(),showControl=!0)}function displayRoutingControl(){null==routeControl&&(crearControlRouting(),showControl=!0)}function removeRouting(){null!=routeControl&&(mapa.removeControl(routeControl),routeControl=null)}function crearControlRouting(){routeControl=L.Routing.control({plan:L.Routing.plan([],{geocoder:L.Control.Geocoder.nominatim({geocodingQueryParams:{countrycodes:"uy"}}),reverseWaypoints:!0,city:"Montevideo",language:"sp"}),lineOptions:{styles:[{color:"black",opacity:.15,weight:9},{color:"white",opacity:.8,weight:6},{color:"red",opacity:1,weight:4}]},summaryTemplate:"<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}</h3>",language:"sp",routeWhileDragging:!0,waypointMode:"snap",collapsible:!0}).addTo(mapa)}function calcRoute(){waypoints.length=0,coords.length=0,waysp.length=0,null!==marker1&&null!==marker2?(waypoints.push({latLng:marker1.getLatLng()}),waypoints.push({latLng:marker2.getLatLng()}),router.route(waypoints,function(o,t){line&&map.removeLayer(line),o?alert(o):(coords=t[0].coordinates,waysp=t[0].waypoints,alert(t[0].summary.totalTime),alert(t[0].summary.totalDistance),line=L.Routing.line(t[0],{styles:[{color:"black",opacity:.15,weight:7},{color:"white",opacity:.8,weight:4},{color:"red",opacity:1,weight:4}]}).addTo(map))})):alert("Se necesita el par Origen-Destino para calcular la ruta")}function rutaAB(o,t){var e=[],n=[],a=[];if(e.length=0,n.length=0,a.length=0,null!=o&&null!=t){var r=L.Routing.waypoint(o),l=L.Routing.waypoint(t);e.push(r),e.push(l),r=null,r=L.Routing.osrm({addWaypoints:!1}),r.route(e,function(o,e){if(line&&mapa.removeLayer(line),o)console.log(o);else{n=e[0].coordinates,a=e[0].waypoints,line=L.Routing.line(e[0],{styles:[{color:"black",opacity:.15,weight:7},{color:"white",opacity:.8,weight:4},{color:"#1652F4",opacity:1,weight:3}]}).addTo(mapa),console.log(e[0].summary.totalDistance);var r=convertirKM(e[0].summary.totalDistance);popup=L.popup({offset:L.point(0,-30)}).setLatLng(t).setContent("<p>Distancia: <b>"+r+"</b></p>").openOn(mapa)}})}else alert("Se necesita el par Origen-Destino para calcular la ruta")}var routeControl=null,showControl=!1,line=null;