function borrarPath(){null!=circulo&&(mapa.removeLayer(circulo),circulo=null),null!=line&&(mapa.removeLayer(line),line=null),null!=popup&&(mapa.removeLayer(popup),popup=null)}function onMapClicked(a){var e="Estás en "+a.latlng.toString();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).bindPopup(e).addTo(mapa)}function loadPOI(){routing=!1;var a=$('input[name="bic"');a.click(function(){fn_actual=onMapClicked,borrarPath(),mapa.off("click",fn_ant),mapa.on("click",fn_actual);var e=$('input:radio[id="bsrb"] ');a.is(":checked")?e.is(":checked")||loadBiciSendas():(mapa.removeLayer(geoBS),e.prop("checked",!1)),fn_ant=onMapClicked});var e=$('input[name="ciclov"');e.click(function(){borrarPath();var a=$('input:radio[id="cvrb"] ');e.is(":checked")?a.is(":checked")||loadCicloVias():(mapa.removeLayer(geoCV),a.prop("checked",!1))});var r=$('input[name="z30"');r.click(function(){borrarPath();var a=$('input:radio[id="z30rb"] ');r.is(":checked")?a.is(":checked")||loadZona30():(mapa.removeLayer(geoz30),a.prop("checked",!1))});var o=$('input[name="sec"');o.click(function(){borrarPath();var a=$('input:radio[id="serb"] ');o.is(":checked")?a.is(":checked")||(loadSeccionales(),mapa.addLayer(lmarkersS)):(mapa.removeLayer(lmarkersS),a.prop("checked",!1))});var c=$('input[name="ba"');c.click(function(){borrarPath();var a=$('input:radio[id="barb"] ');c.is(":checked")?a.is(":checked")||(loadBiciAmigos(),mapa.addLayer(geoBiciAmigos)):(mapa.removeLayer(geoBiciAmigos),a.prop("checked",!1))});var n=$('input[name="gas"]');n.click(function(){borrarPath();var a=$('input:radio[id="gasrb"] ');n.is(":checked")?a.is(":checked")||(loadEstacionesDeServicio(),mapa.addLayer(inflamarkers)):(mapa.removeLayer(inflamarkers),a.prop("checked",!1))});var i=$('input[name="bp"');i.click(function(){borrarPath();var a=$('input:radio[id="bprb"] ');i.is(":checked")?a.is(":checked")||(loadBiciPuntos(),mapa.addLayer(geoBiciPuntos)):(mapa.removeLayer(geoBiciPuntos),a.prop("checked",!1))});var t=$('input[name="pm"');t.click(function(){borrarPath();var a=$('input:radio[id="pmrb"] ');t.is(":checked")?a.is(":checked")||(cargarEstaciones(),obtenerDatos(5e3),mapa.addLayer(lmarkersE)):(mapa.removeLayer(lmarkersE),a.prop("checked",!1))});var l=$('input[name="bicv"]');l.click(function(){borrarPath();var a=$('input:radio[id="bvrb"] ');l.is(":checked")?a.is(":checked")||(loadBicicleterias(),mapa.addLayer(geoBicis)):(console.log("NOOOO biciiiis"),mapa.removeLayer(geoBicis),a.prop("checked",!1))});var s=$('input[name="bicic"');s.click(function(){borrarPath();var a=$('input:radio[id="bcrb"] ');s.is(":checked")?a.is(":checked")||(loadBicicletarios(),mapa.addLayer(geoBicicletarios)):(mapa.removeLayer(geoBicicletarios),a.prop("checked",!1))});var d=$('input[name="be"');d.click(function(){borrarPath();var a=$('input:radio[id="berb"] ');d.is(":checked")?a.is(":checked")||(loadBebederos(),mapa.addLayer(geoBebederos)):(mapa.removeLayer(geoBebederos),a.prop("checked",!1))});var m=$('input[name="bicr"');m.click(function(){borrarPath();var a=$('input:radio[id="brrb"] ');m.is(":checked")?a.is(":checked")||(loadTalleres(),mapa.addLayer(geoTalleres)):(mapa.removeLayer(geoTalleres),a.prop("checked",!1))});var p=$('input[name="bn"');p.click(function(){borrarPath();var a=$('input:radio[id="bnrb"] ');p.is(":checked")?a.is(":checked")||(loadBanios(),mapa.addLayer(geoBanios)):(mapa.removeLayer(geoBanios),a.prop("checked",!1))});var k=$('input[name="rep"');k.click(function(){borrarPath(),k.is(":checked")?(loadRepechos(),mapa.addLayer(geoRepechos)):(console.log("no checked rep"),mapa.removeLayer(geoRepechos))})}function onLocationFound(a){var e=a.accuracy/2;latlngmap=a.latlng,null!=latlngmap&&(null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa).bindPopup("Estás dentro a "+e+" mts desde este punto").openPopup())}function onLocationError(a){alert(a.message)}function nearestBicisendaEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBiciSenda()}function nearestCicloviaEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestCicloVia()}function nearestZ30Event(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestZona30()}function nearestSeccionalEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestSeccional()}function nearestBiciAmigoEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBiciAmigo()}function nearestGasolinerasEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestInfladores()}function nearestBiciPuntoEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBiciPunto()}function nearestPMEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearest_estacionPM()}function nearestBicicleteriasEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBicicleteria()}function nearestBicicletariosEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBicicletarios()}function nearestBebederosEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBebederos()}function nearestBaniosEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBanios()}function nearestTalleresEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestTalleres()}function loadPOISCercanos(){var a=$('input:radio[id="bsrb"] ');a.click(function(){routing=!1;var e=$('input[name="bic"');a.is(":checked")&&(borrarPath(),e.is(":checked")||(loadBiciSendas(),e.prop("checked",!0)),nearestBiciSenda(),mapa.off("click",fn_ant),mapa.on("click",nearestBicisendaEvent),fn_ant=nearestBicisendaEvent)});var e=$('input:radio[id="cvrb"] ');e.click(function(){routing=!1;var a=$('input[name="ciclov"');e.is(":checked")&&(borrarPath(),a.is(":checked")||(loadCicloVias(),a.prop("checked",!0)),nearestCicloVia(),mapa.off("click",fn_ant),mapa.on("click",nearestCicloviaEvent),fn_ant=nearestCicloviaEvent)});var r=$('input:radio[id="z30rb"] ');r.click(function(){routing=!1;var a=$('input[name="z30"');r.is(":checked")&&(borrarPath(),a.is(":checked")||(loadZona30(),a.prop("checked",!0)),nearestZona30(),mapa.off("click",fn_ant),mapa.on("click",nearestZ30Event),fn_ant=nearestZ30Event)});var o=$('input:radio[id="serb"] ');o.click(function(){routing=!1;var a=$('input[name="sec"');o.is(":checked")&&(borrarPath(),a.is(":checked")||(loadSeccionales(),mapa.addLayer(lmarkersS),a.prop("checked",!0)),nearestSeccional(),mapa.off("click",fn_ant),mapa.on("click",nearestSeccionalEvent),fn_ant=nearestSeccionalEvent)});var c=$('input:radio[id="barb"] ');c.click(function(){routing=!1;var a=$('input[name="ba"');c.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBiciAmigos(),mapa.addLayer(geoBiciAmigos),a.prop("checked",!0)),nearestBiciAmigo(),mapa.off("click",fn_ant),mapa.on("click",nearestBiciAmigoEvent),fn_ant=nearestBiciAmigoEvent)});var n=$('input:radio[id="gasrb"] ');n.click(function(){routing=!1;var a=$('input[name="gas"]');n.is(":checked")&&(borrarPath(),a.is(":checked")||(loadEstacionesDeServicio(),mapa.addLayer(inflamarkers),a.prop("checked",!0)),nearestInfladores(),mapa.off("click",fn_ant),mapa.on("click",nearestGasolinerasEvent),fn_ant=nearestGasolinerasEvent)});var i=$('input:radio[id="bprb"] ');i.click(function(){routing=!1;var a=$('input[name="bp"');i.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBiciPuntos(),mapa.addLayer(geoBiciPuntos),a.prop("checked",!0)),nearestBiciPunto(),mapa.off("click",fn_ant),mapa.on("click",nearestBiciPuntoEvent),fn_ant=nearestBiciPuntoEvent)});var t=$('input:radio[id="pmrb"] ');t.click(function(){routing=!1;var a=$('input[name="pm"');t.is(":checked")&&(borrarPath(),a.is(":checked")||(cargarEstaciones(),obtenerDatos(5e3),mapa.addLayer(lmarkersE),a.prop("checked",!0)),nearest_estacionPM(),mapa.off("click",fn_ant),mapa.on("click",nearestPMEvent),fn_ant=nearestPMEvent)});var l=$('input:radio[id="bvrb"] ');l.click(function(){routing=!1;var a=$('input[name="bicv"]');l.is(":checked")&&(borrarPath(),a.is(":checked")||(console.log("cargando bicis"),loadBicicleterias(),mapa.addLayer(geoBicis),a.prop("checked",!0)),nearestBicicleteria(),mapa.off("click",fn_ant),mapa.on("click",nearestBicicleteriasEvent),fn_ant=nearestBicicleteriasEvent)});var s=$('input:radio[id="bcrb"] ');s.click(function(){routing=!1;var a=$('input[name="bicic"');s.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBicicletarios(),mapa.addLayer(geoBicicletarios),$bicicletarioschk.prop("checked",!0)),nearestBicicletarios(),mapa.off("click",fn_ant),mapa.on("click",nearestBicicletariosEvent),fn_ant=nearestBicicletariosEvent)});var d=$('input:radio[id="berb"] ');d.click(function(){routing=!1;var a=$('input[name="be"');d.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBebederos(),mapa.addLayer(geoBebederos),a.prop("checked",!0)),nearestBebederos(),mapa.off("click",fn_ant),mapa.on("click",nearestBebederosEvent),fn_ant=nearestBebederosEvent)});var m=$('input:radio[id="bnrb"] ');m.click(function(){routing=!1;var a=$('input[name="bn"');m.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBanios(),mapa.addLayer(geoBanios),a.prop("checked",!0)),nearestBanios(),mapa.off("click",fn_ant),mapa.on("click",nearestBaniosEvent),fn_ant=nearestBaniosEvent)});var p=$('input:radio[id="brrb"] ');p.click(function(){routing=!1;var a=$('input[name="bicr"');p.is(":checked")&&(borrarPath(),a.is(":checked")||(loadTalleres(),mapa.addLayer(geoTalleres),a.prop("checked",!0)),nearestTalleres(),mapa.off("click",fn_ant),mapa.on("click",nearestTalleresEvent),fn_ant=nearestTalleresEvent)})}function loadPaseosTuristicos(){function a(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),mapa.removeLayer(geoEspVerdes),mapa.removeLayer(lmarkersVerdes),loadEspVerdes(),mapa.addLayer(geoEspVerdes),mapa.addLayer(lmarkersVerdes)}function e(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),mapa.removeLayer(geoPatrimonio),mapa.removeLayer(lmarkersPatrimonio),loadPatrimonio(),mapa.addLayer(geoPatrimonio),mapa.addLayer(lmarkersPatrimonio)}routing=!1;var r=$('input[name="pcvr"');r.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),r.is(":checked")?(loadCVPqueRodo(),mapa.setView([-34.9095928357093,-56.21411204338074],13)):(mapa.removeLayer(geoCvPR),mapa.closePopup(popupRM))});var o=$('input[name="prom"');o.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),o.is(":checked")?(loadPaseoPrado(),mapa.setView([-34.86214778728005,-56.2117838859558],13)):(mapa.removeLayer(geoPaseoPrado),mapa.closePopup(popupPR))});var c=$('input[name="ppen"');c.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),c.is(":checked")?(loadPaseoPeniarol(),mapa.setView([-34.825597,-56.2055289],13)):(mapa.removeLayer(geoPaseoPeniarol),mapa.closePopup(popupPN))});var n=$('input[name="pcin"');n.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),n.is(":checked")?(loadCines(),mapa.addLayer(geoCines)):mapa.removeLayer(geoCines)});var i=$('input[name="ptea"');i.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),i.is(":checked")?(loadTeatros(),mapa.addLayer(geoTeatros)):mapa.removeLayer(geoTeatros)});var t=$('input[name="pmus"');t.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),t.is(":checked")?(loadEspCulturales(),mapa.addLayer(geoEspCulturales)):mapa.removeLayer(geoEspCulturales)});var l=$('input[name="pver"');l.click(function(){borrarPath(),fn_actual=a,mapa.off("click",fn_ant),mapa.on("click",fn_actual),l.is(":checked")?(loadEspVerdes(),mapa.addLayer(geoEspVerdes),mapa.addLayer(lmarkersVerdes)):(mapa.removeLayer(geoEspVerdes),mapa.removeLayer(lmarkersVerdes),mapa.off("click",a),mapa.on("click",onMapClicked))});var s=$('input[name="ppat"');s.click(function(){borrarPath(),fn_actual=e,mapa.off("click",fn_ant),mapa.on("click",fn_actual),s.is(":checked")?(loadPatrimonio(),mapa.addLayer(geoPatrimonio),mapa.addLayer(lmarkersPatrimonio)):(mapa.removeLayer(geoPatrimonio),mapa.removeLayer(lmarkersPatrimonio))})}function loadRecorridos(){socket=io(),socket.emit("recorridos0",0),socket.on("recorridos0",function(a){recorridos[0]=jQuery.parseJSON(a)}),socket.emit("recorridos1",1),socket.on("recorridos1",function(a){recorridos[1]=jQuery.parseJSON(a)}),socket.emit("recorridos2",2),socket.on("recorridos2",function(a){recorridos[2]=jQuery.parseJSON(a)}),socket.emit("recorridos3",3),socket.on("recorridos3",function(a){recorridos[3]=jQuery.parseJSON(a)}),socket.emit("recorridos4",4),socket.on("recorridos4",function(a){recorridos[4]=jQuery.parseJSON(a)}),socket.emit("recorridos5",5),socket.on("recorridos5",function(a){recorridos[5]=jQuery.parseJSON(a)}),socket.emit("recorridos6",6),socket.on("recorridos6",function(a){recorridos[6]=jQuery.parseJSON(a)}),socket.emit("recorridos7",7),socket.on("recorridos7",function(a){recorridos[7]=jQuery.parseJSON(a)}),socket.emit("recorridos8",8),socket.on("recorridos8",function(a){recorridos[8]=jQuery.parseJSON(a)}),socket.emit("recorridos9",9),socket.on("recorridos9",function(a){recorridos[9]=jQuery.parseJSON(a)}),socket.emit("recorridos10",10),socket.on("recorridos10",function(a){recorridos[10]=jQuery.parseJSON(a)}),socket.emit("recorridos11",11),socket.on("recorridos11",function(a){recorridos[11]=jQuery.parseJSON(a)}),socket.emit("recorridos12",12),socket.on("recorridos12",function(a){recorridos[12]=jQuery.parseJSON(a)}),socket.emit("recorridos13",13),socket.on("recorridos13",function(a){recorridos[13]=jQuery.parseJSON(a)});var a=$('input[name="rec0"]');a.click(function(){borrarPath(),socket=io(),socket.emit("recorridos0",0),socket.on("recorridos0",function(a){recorridos[0]=jQuery.parseJSON(a)}),a.is(":checked")?(loadRecorrido(0),mapa.addLayer(geoRecorridos[0])):mapa.removeLayer(geoRecorridos[0])});var e=$('input[name="rec1"]');e.click(function(){borrarPath(),socket=io(),socket.emit("recorridos1",1),socket.on("recorridos1",function(a){recorridos[1]=jQuery.parseJSON(a)}),e.is(":checked")?(loadRecorrido(1),mapa.addLayer(geoRecorridos[1])):mapa.removeLayer(geoRecorridos[1])});var r=$('input[name="rec2"]');r.click(function(){borrarPath(),socket=io(),socket.emit("recorridos2",2),socket.on("recorridos2",function(a){recorridos[2]=jQuery.parseJSON(a)}),r.is(":checked")?(loadRecorrido(2),mapa.addLayer(geoRecorridos[2])):mapa.removeLayer(geoRecorridos[2])});var o=$('input[name="rec3"]');o.click(function(){borrarPath(),socket=io(),socket.emit("recorridos3",3),socket.on("recorridos3",function(a){recorridos[3]=jQuery.parseJSON(a)}),o.is(":checked")?(loadRecorrido(3),mapa.addLayer(geoRecorridos[3])):mapa.removeLayer(geoRecorridos[3])});var c=$('input[name="rec4"]');c.click(function(){borrarPath(),socket=io(),socket.emit("recorridos4",4),socket.on("recorridos4",function(a){recorridos[4]=jQuery.parseJSON(a)}),c.is(":checked")?(loadRecorrido(4),mapa.addLayer(geoRecorridos[4])):mapa.removeLayer(geoRecorridos[4])});var n=$('input[name="rec5"]');n.click(function(){borrarPath(),socket=io(),socket.emit("recorridos5",5),socket.on("recorridos5",function(a){recorridos[5]=jQuery.parseJSON(a)}),n.is(":checked")?(loadRecorrido(5),mapa.addLayer(geoRecorridos[5])):mapa.removeLayer(geoRecorridos[5])});var i=$('input[name="rec6"]');i.click(function(){borrarPath(),socket=io(),socket.emit("recorridos6",6),socket.on("recorridos6",function(a){recorridos[6]=jQuery.parseJSON(a)}),i.is(":checked")?(loadRecorrido(6),mapa.addLayer(geoRecorridos[6])):mapa.removeLayer(geoRecorridos[6])});var t=$('input[name="rec7"]');t.click(function(){borrarPath(),socket=io(),socket.emit("recorridos7",7),socket.on("recorridos7",function(a){recorridos[7]=jQuery.parseJSON(a)}),t.is(":checked")?(loadRecorrido(7),mapa.addLayer(geoRecorridos[7])):mapa.removeLayer(geoRecorridos[7])});var l=$('input[name="rec8"]');l.click(function(){borrarPath(),socket=io(),socket.emit("recorridos8",8),socket.on("recorridos8",function(a){recorridos[8]=jQuery.parseJSON(a)}),l.is(":checked")?(loadRecorrido(8),mapa.addLayer(geoRecorridos[8])):mapa.removeLayer(geoRecorridos[8])});var s=$('input[name="rec9"]');s.click(function(){borrarPath(),socket=io(),socket.emit("recorridos9",9),socket.on("recorridos9",function(a){recorridos[9]=jQuery.parseJSON(a)}),s.is(":checked")?(loadRecorrido(9),mapa.addLayer(geoRecorridos[9])):mapa.removeLayer(geoRecorridos[9])});var d=$('input[name="rec10"]');d.click(function(){borrarPath(),socket=io(),socket.emit("recorridos10",10),socket.on("recorridos10",function(a){recorridos[10]=jQuery.parseJSON(a)}),d.is(":checked")?(loadRecorrido(10),mapa.addLayer(geoRecorridos[10])):mapa.removeLayer(geoRecorridos[10])});var m=$('input[name="rec11"]');m.click(function(){borrarPath(),socket=io(),socket.emit("recorridos11",11),socket.on("recorridos11",function(a){recorridos[11]=jQuery.parseJSON(a)}),m.is(":checked")?(loadRecorrido(11),mapa.addLayer(geoRecorridos[11])):mapa.removeLayer(geoRecorridos[11])});var p=$('input[name="rec12"]');p.click(function(){borrarPath(),socket=io(),socket.emit("recorridos12",12),socket.on("recorridos12",function(a){recorridos[12]=jQuery.parseJSON(a)}),p.is(":checked")?(loadRecorrido(12),mapa.addLayer(geoRecorridos[12])):mapa.removeLayer(geoRecorridos[12])});var k=$('input[name="rec13"]');k.click(function(){borrarPath(),socket=io(),socket.emit("recorridos13",13),socket.on("recorridos13",function(a){recorridos[13]=jQuery.parseJSON(a)}),k.is(":checked")?(loadRecorrido(13),mapa.addLayer(geoRecorridos[13])):mapa.removeLayer(geoRecorridos[13])})}function loadData(){loadDatosIniciales(),loadMapa(),loadFacultades(),loadPOI(),loadPOISCercanos(),loadPaseosTuristicos(),loadRecorridos()}var routing=!1;