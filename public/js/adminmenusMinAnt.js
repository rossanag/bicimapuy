var routing=!1;function borrarPath(){null!=circulo&&(mapa.removeLayer(circulo),circulo=null);null!=line&&(mapa.removeLayer(line),line=null);null!=popup&&(mapa.removeLayer(popup),popup=null)}function onMapClicked(a){var c="Est\u00e1s en "+a.latlng.toString();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).bindPopup(c).addTo(mapa)}
function loadPOI(){routing=!1;var a=$('input[name="bic"]');a.click(function(){fn_actual=onMapClicked;borrarPath();mapa.off("click",fn_ant);mapa.on("click",fn_actual);var b=$('input:radio[id="bsrb"] ');a.is(":checked")?b.is(":checked")||loadBiciSendas():(mapa.removeLayer(geoBS),b.prop("checked",!1));fn_ant=onMapClicked});var c=$('input[name="ciclov"]');c.click(function(){borrarPath();var b=$('input:radio[id="cvrb"] ');c.is(":checked")?b.is(":checked")||loadCicloVias():(mapa.removeLayer(geoCV),b.prop("checked",
!1))});var d=$('input[name="z30"]');d.click(function(){borrarPath();var b=$('input:radio[id="z30rb"] ');d.is(":checked")?b.is(":checked")||loadZona30():(mapa.removeLayer(geoz30),b.prop("checked",!1))});var e=$('input[name="sec"]');e.click(function(){borrarPath();var b=$('input:radio[id="serb"] ');e.is(":checked")?b.is(":checked")||(loadSeccionales(),mapa.addLayer(lmarkersS)):(mapa.removeLayer(lmarkersS),b.prop("checked",!1))});var f=$('input[name="ba"]');f.click(function(){borrarPath();var b=$('input:radio[id="barb"] ');
f.is(":checked")?b.is(":checked")||(loadBiciAmigos(),mapa.addLayer(geoBiciAmigos)):(mapa.removeLayer(geoBiciAmigos),b.prop("checked",!1))});var g=$('input[name="gas"]');g.click(function(){borrarPath();var b=$('input:radio[id="gasrb"] ');g.is(":checked")?b.is(":checked")||(loadEstacionesDeServicio(),mapa.addLayer(inflamarkers)):(mapa.removeLayer(inflamarkers),b.prop("checked",!1))});var h=$('input[name="bp"]');h.click(function(){borrarPath();var b=$('input:radio[id="bprb"] ');h.is(":checked")?b.is(":checked")||
(loadBiciPuntos(),mapa.addLayer(geoBiciPuntos)):(mapa.removeLayer(geoBiciPuntos),b.prop("checked",!1))});var k=$('input[name="pm"]');k.click(function(){borrarPath();var b=$('input:radio[id="pmrb"] ');k.is(":checked")?b.is(":checked")||(cargarEstaciones(),obtenerDatos(5E3),mapa.addLayer(lmarkersE)):(mapa.removeLayer(lmarkersE),b.prop("checked",!1))});var l=$('input[name="bicv"]');l.click(function(){borrarPath();var b=$('input:radio[id="bvrb"] ');l.is(":checked")?b.is(":checked")||(loadBicicleterias(),
mapa.addLayer(geoBicis)):(console.log("NOOOO biciiiis"),mapa.removeLayer(geoBicis),b.prop("checked",!1))});var m=$('input[name="bicic"]');m.click(function(){borrarPath();var b=$('input:radio[id="bcrb"] ');m.is(":checked")?b.is(":checked")||(loadBicicletarios(),mapa.addLayer(geoBicicletarios)):(mapa.removeLayer(geoBicicletarios),b.prop("checked",!1))});var n=$('input[name="be"]');n.click(function(){borrarPath();var b=$('input:radio[id="berb"] ');n.is(":checked")?b.is(":checked")||(loadBebederos(),
mapa.addLayer(geoBebederos)):(mapa.removeLayer(geoBebederos),b.prop("checked",!1))});var p=$('input[name="bicr"]');p.click(function(){borrarPath();var b=$('input:radio[id="brrb"] ');p.is(":checked")?b.is(":checked")||(loadTalleres(),mapa.addLayer(geoTalleres)):(mapa.removeLayer(geoTalleres),b.prop("checked",!1))});var q=$('input[name="bn"]');q.click(function(){borrarPath();var b=$('input:radio[id="bnrb"] ');q.is(":checked")?b.is(":checked")||(loadBanios(),mapa.addLayer(geoBanios)):(mapa.removeLayer(geoBanios),
b.prop("checked",!1))});var r=$('input[name="rep"]');r.click(function(){borrarPath();r.is(":checked")?(loadRepechos(),mapa.addLayer(geoRepechos)):(console.log("no checked rep"),mapa.removeLayer(geoRepechos))})}function onLocationFound(a){var c=a.accuracy/2;latlngmap=a.latlng;null!=latlngmap&&(null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa).bindPopup("Est\u00e1s dentro a "+c+" mts desde este punto").openPopup())}
function onLocationError(a){alert(a.message)}function nearestBicisendaEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBiciSenda()}function nearestCicloviaEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestCicloVia()}
function nearestZ30Event(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestZona30()}function nearestSeccionalEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestSeccional()}
function nearestBiciAmigoEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBiciAmigo()}function nearestGasolinerasEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestInfladores()}
function nearestBiciPuntoEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBiciPunto()}function nearestPMEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearest_estacionPM()}
function nearestBicicleteriasEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBicicleteria()}function nearestBicicletariosEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBicicletarios()}
function nearestBebederosEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBebederos()}function nearestBaniosEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestBanios()}
function nearestTalleresEvent(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);nearestTalleres()}
function loadPOISCercanos(){var a=$('input:radio[id="bsrb"] ');a.click(function(){routing=!1;var r=$('input[name="bic"]');a.is(":checked")&&(borrarPath(),r.is(":checked")||(loadBiciSendas(),r.prop("checked",!0)),nearestBiciSenda(),mapa.off("click",fn_ant),mapa.on("click",nearestBicisendaEvent),fn_ant=nearestBicisendaEvent)});var c=$('input:radio[id="cvrb"] ');c.click(function(){routing=!1;var a=$('input[name="ciclov"]');c.is(":checked")&&(borrarPath(),a.is(":checked")||(loadCicloVias(),a.prop("checked",
!0)),nearestCicloVia(),mapa.off("click",fn_ant),mapa.on("click",nearestCicloviaEvent),fn_ant=nearestCicloviaEvent)});var d=$('input:radio[id="z30rb"] ');d.click(function(){routing=!1;var a=$('input[name="z30"]');d.is(":checked")&&(borrarPath(),a.is(":checked")||(loadZona30(),a.prop("checked",!0)),nearestZona30(),mapa.off("click",fn_ant),mapa.on("click",nearestZ30Event),fn_ant=nearestZ30Event)});var e=$('input:radio[id="serb"] ');e.click(function(){routing=!1;var a=$('input[name="sec"]');e.is(":checked")&&
(borrarPath(),a.is(":checked")||(loadSeccionales(),mapa.addLayer(lmarkersS),a.prop("checked",!0)),nearestSeccional(),mapa.off("click",fn_ant),mapa.on("click",nearestSeccionalEvent),fn_ant=nearestSeccionalEvent)});var f=$('input:radio[id="barb"] ');f.click(function(){routing=!1;var a=$('input[name="ba"]');f.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBiciAmigos(),mapa.addLayer(geoBiciAmigos),a.prop("checked",!0)),nearestBiciAmigo(),mapa.off("click",fn_ant),mapa.on("click",nearestBiciAmigoEvent),
fn_ant=nearestBiciAmigoEvent)});var g=$('input:radio[id="gasrb"] ');g.click(function(){routing=!1;var a=$('input[name="gas"]');g.is(":checked")&&(borrarPath(),a.is(":checked")||(loadEstacionesDeServicio(),mapa.addLayer(inflamarkers),a.prop("checked",!0)),nearestInfladores(),mapa.off("click",fn_ant),mapa.on("click",nearestGasolinerasEvent),fn_ant=nearestGasolinerasEvent)});var h=$('input:radio[id="bprb"] ');h.click(function(){routing=!1;var a=$('input[name="bp"]');h.is(":checked")&&(borrarPath(),a.is(":checked")||
(loadBiciPuntos(),mapa.addLayer(geoBiciPuntos),a.prop("checked",!0)),nearestBiciPunto(),mapa.off("click",fn_ant),mapa.on("click",nearestBiciPuntoEvent),fn_ant=nearestBiciPuntoEvent)});var k=$('input:radio[id="pmrb"] ');k.click(function(){routing=!1;var a=$('input[name="pm"]');k.is(":checked")&&(borrarPath(),a.is(":checked")||(cargarEstaciones(),obtenerDatos(5E3),mapa.addLayer(lmarkersE),a.prop("checked",!0)),nearest_estacionPM(),mapa.off("click",fn_ant),mapa.on("click",nearestPMEvent),fn_ant=nearestPMEvent)});
var l=$('input:radio[id="bvrb"] ');l.click(function(){routing=!1;var a=$('input[name="bicv"]');l.is(":checked")&&(borrarPath(),a.is(":checked")||(console.log("cargando bicis"),loadBicicleterias(),mapa.addLayer(geoBicis),a.prop("checked",!0)),nearestBicicleteria(),mapa.off("click",fn_ant),mapa.on("click",nearestBicicleteriasEvent),fn_ant=nearestBicicleteriasEvent)});var m=$('input:radio[id="bcrb"] ');m.click(function(){routing=!1;var a=$('input[name="bicic"]');m.is(":checked")&&(borrarPath(),a.is(":checked")||
(loadBicicletarios(),mapa.addLayer(geoBicicletarios),$bicicletarioschk.prop("checked",!0)),nearestBicicletarios(),mapa.off("click",fn_ant),mapa.on("click",nearestBicicletariosEvent),fn_ant=nearestBicicletariosEvent)});var n=$('input:radio[id="berb"] ');n.click(function(){routing=!1;var a=$('input[name="be"]');n.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBebederos(),mapa.addLayer(geoBebederos),a.prop("checked",!0)),nearestBebederos(),mapa.off("click",fn_ant),mapa.on("click",nearestBebederosEvent),
fn_ant=nearestBebederosEvent)});var p=$('input:radio[id="bnrb"] ');p.click(function(){routing=!1;var a=$('input[name="bn"]');p.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBanios(),mapa.addLayer(geoBanios),a.prop("checked",!0)),nearestBanios(),mapa.off("click",fn_ant),mapa.on("click",nearestBaniosEvent),fn_ant=nearestBaniosEvent)});var q=$('input:radio[id="brrb"] ');q.click(function(){routing=!1;var a=$('input[name="bicr"]');q.is(":checked")&&(borrarPath(),a.is(":checked")||(loadTalleres(),
mapa.addLayer(geoTalleres),a.prop("checked",!0)),nearestTalleres(),mapa.off("click",fn_ant),mapa.on("click",nearestTalleresEvent),fn_ant=nearestTalleresEvent)})}
function loadPaseosTuristicos(){function a(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,a.latlng.lng);mapa.removeLayer(geoEspVerdes);mapa.removeLayer(lmarkersVerdes);loadEspVerdes();mapa.addLayer(geoEspVerdes);mapa.addLayer(lmarkersVerdes)}function c(a){latlngmap=null;borrarPath();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc);markerGeoLoc=L.marker(a.latlng).addTo(mapa);latlngmap=L.latLng(a.latlng.lat,
a.latlng.lng);mapa.removeLayer(geoPatrimonio);mapa.removeLayer(lmarkersPatrimonio);loadPatrimonio();mapa.addLayer(geoPatrimonio);mapa.addLayer(lmarkersPatrimonio)}routing=!1;var d=$('input[name="pcvr"]');d.click(function(){borrarPath();fn_actual=onMapClicked;mapa.off("click",fn_ant);mapa.on("click",fn_actual);d.is(":checked")?(loadCVPqueRodo(),mapa.setView([-34.9095928357093,-56.21411204338074],13)):(mapa.removeLayer(geoCvPR),mapa.closePopup(popupRM))});var e=$('input[name="prom"]');e.click(function(){borrarPath();
fn_actual=onMapClicked;mapa.off("click",fn_ant);mapa.on("click",fn_actual);e.is(":checked")?(loadPaseoPrado(),mapa.setView([-34.86214778728005,-56.2117838859558],13)):(mapa.removeLayer(geoPaseoPrado),mapa.closePopup(popupPR))});var f=$('input[name="ppen"]');f.click(function(){borrarPath();fn_actual=onMapClicked;mapa.off("click",fn_ant);mapa.on("click",fn_actual);f.is(":checked")?(loadPaseoPeniarol(),mapa.setView([-34.825597,-56.2055289],13)):(mapa.removeLayer(geoPaseoPeniarol),mapa.closePopup(popupPN))});
var g=$('input[name="pcin"]');g.click(function(){borrarPath();fn_actual=onMapClicked;mapa.off("click",fn_ant);mapa.on("click",fn_actual);g.is(":checked")?(loadCines(),mapa.addLayer(geoCines)):mapa.removeLayer(geoCines)});var h=$('input[name="ptea"]');h.click(function(){borrarPath();fn_actual=onMapClicked;mapa.off("click",fn_ant);mapa.on("click",fn_actual);h.is(":checked")?(loadTeatros(),mapa.addLayer(geoTeatros)):mapa.removeLayer(geoTeatros)});var k=$('input[name="pmus"]');k.click(function(){borrarPath();
fn_actual=onMapClicked;mapa.off("click",fn_ant);mapa.on("click",fn_actual);k.is(":checked")?(loadEspCulturales(),mapa.addLayer(geoEspCulturales)):mapa.removeLayer(geoEspCulturales)});var l=$('input[name="pver"]');l.click(function(){borrarPath();fn_actual=a;mapa.off("click",fn_ant);mapa.on("click",fn_actual);l.is(":checked")?(loadEspVerdes(),mapa.addLayer(geoEspVerdes),mapa.addLayer(lmarkersVerdes)):(mapa.removeLayer(geoEspVerdes),mapa.removeLayer(lmarkersVerdes),mapa.off("click",a),mapa.on("click",
onMapClicked))});var m=$('input[name="ppat"]');m.click(function(){borrarPath();fn_actual=c;mapa.off("click",fn_ant);mapa.on("click",fn_actual);m.is(":checked")?(loadPatrimonio(),mapa.addLayer(geoPatrimonio),mapa.addLayer(lmarkersPatrimonio)):(mapa.removeLayer(geoPatrimonio),mapa.removeLayer(lmarkersPatrimonio))})}
function loadRecorridos(){socket=io();socket.emit("recorridos0",0);socket.on("recorridos0",function(a){recorridos[0]=jQuery.parseJSON(a)});socket.emit("recorridos1",1);socket.on("recorridos1",function(a){recorridos[1]=jQuery.parseJSON(a)});socket.emit("recorridos2",2);socket.on("recorridos2",function(a){recorridos[2]=jQuery.parseJSON(a)});socket.emit("recorridos3",3);socket.on("recorridos3",function(a){recorridos[3]=jQuery.parseJSON(a)});socket.emit("recorridos4",4);socket.on("recorridos4",function(a){recorridos[4]=
jQuery.parseJSON(a)});socket.emit("recorridos5",5);socket.on("recorridos5",function(a){recorridos[5]=jQuery.parseJSON(a)});socket.emit("recorridos6",6);socket.on("recorridos6",function(a){recorridos[6]=jQuery.parseJSON(a)});socket.emit("recorridos7",7);socket.on("recorridos7",function(a){recorridos[7]=jQuery.parseJSON(a)});socket.emit("recorridos8",8);socket.on("recorridos8",function(a){recorridos[8]=jQuery.parseJSON(a)});socket.emit("recorridos9",9);socket.on("recorridos9",function(a){recorridos[9]=
jQuery.parseJSON(a)});socket.emit("recorridos10",10);socket.on("recorridos10",function(a){recorridos[10]=jQuery.parseJSON(a)});socket.emit("recorridos11",11);socket.on("recorridos11",function(a){recorridos[11]=jQuery.parseJSON(a)});socket.emit("recorridos12",12);socket.on("recorridos12",function(a){recorridos[12]=jQuery.parseJSON(a)});socket.emit("recorridos13",13);socket.on("recorridos13",function(a){recorridos[13]=jQuery.parseJSON(a)});var a=$('input[name="rec0"]');a.click(function(){borrarPath();
socket=io();socket.emit("recorridos0",0);socket.on("recorridos0",function(a){recorridos[0]=jQuery.parseJSON(a)});a.is(":checked")?(loadRecorrido(0),mapa.addLayer(geoRecorridos[0])):mapa.removeLayer(geoRecorridos[0])});var c=$('input[name="rec1"]');c.click(function(){borrarPath();socket=io();socket.emit("recorridos1",1);socket.on("recorridos1",function(a){recorridos[1]=jQuery.parseJSON(a)});c.is(":checked")?(loadRecorrido(1),mapa.addLayer(geoRecorridos[1])):mapa.removeLayer(geoRecorridos[1])});var d=
$('input[name="rec2"]');d.click(function(){borrarPath();socket=io();socket.emit("recorridos2",2);socket.on("recorridos2",function(a){recorridos[2]=jQuery.parseJSON(a)});d.is(":checked")?(loadRecorrido(2),mapa.addLayer(geoRecorridos[2])):mapa.removeLayer(geoRecorridos[2])});var e=$('input[name="rec3"]');e.click(function(){borrarPath();socket=io();socket.emit("recorridos3",3);socket.on("recorridos3",function(a){recorridos[3]=jQuery.parseJSON(a)});e.is(":checked")?(loadRecorrido(3),mapa.addLayer(geoRecorridos[3])):
mapa.removeLayer(geoRecorridos[3])});var f=$('input[name="rec4"]');f.click(function(){borrarPath();socket=io();socket.emit("recorridos4",4);socket.on("recorridos4",function(a){recorridos[4]=jQuery.parseJSON(a)});f.is(":checked")?(loadRecorrido(4),mapa.addLayer(geoRecorridos[4])):mapa.removeLayer(geoRecorridos[4])});var g=$('input[name="rec5"]');g.click(function(){borrarPath();socket=io();socket.emit("recorridos5",5);socket.on("recorridos5",function(a){recorridos[5]=jQuery.parseJSON(a)});g.is(":checked")?
(loadRecorrido(5),mapa.addLayer(geoRecorridos[5])):mapa.removeLayer(geoRecorridos[5])});var h=$('input[name="rec6"]');h.click(function(){borrarPath();socket=io();socket.emit("recorridos6",6);socket.on("recorridos6",function(a){recorridos[6]=jQuery.parseJSON(a)});h.is(":checked")?(loadRecorrido(6),mapa.addLayer(geoRecorridos[6])):mapa.removeLayer(geoRecorridos[6])});var k=$('input[name="rec7"]');k.click(function(){borrarPath();socket=io();socket.emit("recorridos7",7);socket.on("recorridos7",function(a){recorridos[7]=
jQuery.parseJSON(a)});k.is(":checked")?(loadRecorrido(7),mapa.addLayer(geoRecorridos[7])):mapa.removeLayer(geoRecorridos[7])});var l=$('input[name="rec8"]');l.click(function(){borrarPath();socket=io();socket.emit("recorridos8",8);socket.on("recorridos8",function(a){recorridos[8]=jQuery.parseJSON(a)});l.is(":checked")?(loadRecorrido(8),mapa.addLayer(geoRecorridos[8])):mapa.removeLayer(geoRecorridos[8])});var m=$('input[name="rec9"]');m.click(function(){borrarPath();socket=io();socket.emit("recorridos9",
9);socket.on("recorridos9",function(a){recorridos[9]=jQuery.parseJSON(a)});m.is(":checked")?(loadRecorrido(9),mapa.addLayer(geoRecorridos[9])):mapa.removeLayer(geoRecorridos[9])});var n=$('input[name="rec10"]');n.click(function(){borrarPath();socket=io();socket.emit("recorridos10",10);socket.on("recorridos10",function(a){recorridos[10]=jQuery.parseJSON(a)});n.is(":checked")?(loadRecorrido(10),mapa.addLayer(geoRecorridos[10])):mapa.removeLayer(geoRecorridos[10])});var p=$('input[name="rec11"]');p.click(function(){borrarPath();
socket=io();socket.emit("recorridos11",11);socket.on("recorridos11",function(a){recorridos[11]=jQuery.parseJSON(a)});p.is(":checked")?(loadRecorrido(11),mapa.addLayer(geoRecorridos[11])):mapa.removeLayer(geoRecorridos[11])});var q=$('input[name="rec12"]');q.click(function(){borrarPath();socket=io();socket.emit("recorridos12",12);socket.on("recorridos12",function(a){recorridos[12]=jQuery.parseJSON(a)});q.is(":checked")?(loadRecorrido(12),mapa.addLayer(geoRecorridos[12])):mapa.removeLayer(geoRecorridos[12])});
var r=$('input[name="rec13"]');r.click(function(){borrarPath();socket=io();socket.emit("recorridos13",13);socket.on("recorridos13",function(a){recorridos[13]=jQuery.parseJSON(a)});r.is(":checked")?(loadRecorrido(13),mapa.addLayer(geoRecorridos[13])):mapa.removeLayer(geoRecorridos[13])})}function loadData(){loadDatosIniciales();loadMapa();loadFacultades();loadPOI();loadPOISCercanos();loadPaseosTuristicos();loadRecorridos()};
