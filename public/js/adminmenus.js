function borrarPath(){null!=circulo&&(mapa.removeLayer(circulo),circulo=null),null!=line&&(mapa.removeLayer(line),line=null),null!=popup&&(mapa.removeLayer(popup),popup=null)}function onMapClicked(a){var e="Estás en "+a.latlng.toString();null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).bindPopup(e).addTo(mapa)}function loadPOI(){routing=!1;var a=$('input[name="bic"');a.click(function(){fn_actual=onMapClicked,borrarPath(),mapa.off("click",fn_ant),mapa.on("click",fn_actual);var e=$('input:radio[id="bsrb"] ');a.is(":checked")?e.is(":checked")||loadBiciSendas():(mapa.removeLayer(geoBS),e.prop("checked",!1)),fn_ant=onMapClicked});var e=$('input[name="ciclov"');e.click(function(){borrarPath();var a=$('input:radio[id="cvrb"] ');e.is(":checked")?a.is(":checked")||loadCicloVias():(mapa.removeLayer(geoCV),a.prop("checked",!1))});var r=$('input[name="z30"');r.click(function(){borrarPath();var a=$('input:radio[id="z30rb"] ');r.is(":checked")?a.is(":checked")||loadZona30():(mapa.removeLayer(geoz30),a.prop("checked",!1))});var n=$('input[name="sec"');n.click(function(){borrarPath();var a=$('input:radio[id="serb"] ');n.is(":checked")?a.is(":checked")||(loadSeccionales(),mapa.addLayer(lmarkersS)):(mapa.removeLayer(lmarkersS),a.prop("checked",!1))});var o=$('input[name="ba"');o.click(function(){borrarPath();var a=$('input:radio[id="barb"] ');o.is(":checked")?a.is(":checked")||(loadBiciAmigos(),mapa.addLayer(geoBiciAmigos)):(mapa.removeLayer(geoBiciAmigos),a.prop("checked",!1))});var c=$('input[name="gas"]');c.click(function(){borrarPath();var a=$('input:radio[id="gasrb"] ');c.is(":checked")?a.is(":checked")||(loadEstacionesDeServicio(),mapa.addLayer(inflamarkers)):(mapa.removeLayer(inflamarkers),a.prop("checked",!1))});var i=$('input[name="bp"');i.click(function(){borrarPath();var a=$('input:radio[id="bprb"] ');i.is(":checked")?a.is(":checked")||(loadBiciPuntos(),mapa.addLayer(geoBiciPuntos)):(mapa.removeLayer(geoBiciPuntos),a.prop("checked",!1))});var l=$('input[name="pm"');l.click(function(){borrarPath();var a=$('input:radio[id="pmrb"] ');l.is(":checked")?a.is(":checked")||(cargarEstaciones(),obtenerDatos(5e3),mapa.addLayer(lmarkersE)):(mapa.removeLayer(lmarkersE),a.prop("checked",!1))});var t=$('input[name="bicv"]');t.click(function(){borrarPath();var a=$('input:radio[id="bvrb"] ');t.is(":checked")?a.is(":checked")||(loadBicicleterias(),mapa.addLayer(geoBicis)):(console.log("NOOOO biciiiis"),mapa.removeLayer(geoBicis),a.prop("checked",!1))});var m=$('input[name="bicic"');m.click(function(){borrarPath();var a=$('input:radio[id="bcrb"] ');m.is(":checked")?a.is(":checked")||(loadBicicletarios(),mapa.addLayer(geoBicicletarios)):(mapa.removeLayer(geoBicicletarios),a.prop("checked",!1))});var p=$('input[name="be"');p.click(function(){borrarPath();var a=$('input:radio[id="berb"] ');p.is(":checked")?a.is(":checked")||(loadBebederos(),mapa.addLayer(geoBebederos)):(mapa.removeLayer(geoBebederos),a.prop("checked",!1))});var d=$('input[name="bicr"');d.click(function(){borrarPath();var a=$('input:radio[id="brrb"] ');d.is(":checked")?a.is(":checked")||(loadTalleres(),mapa.addLayer(geoTalleres)):(mapa.removeLayer(geoTalleres),a.prop("checked",!1))});var s=$('input[name="bn"');s.click(function(){borrarPath();var a=$('input:radio[id="bnrb"] ');s.is(":checked")?(console.log("baniooooooooooo"),a.is(":checked")||(loadBanios(),mapa.addLayer(geoBanios))):(mapa.removeLayer(geoBanios),a.prop("checked",!1))});var k=$('input[name="rep"');k.click(function(){borrarPath(),k.is(":checked")?(loadRepechos(),mapa.addLayer(geoRepechos)):(console.log("no checked rep"),mapa.removeLayer(geoRepechos))})}function onLocationFound(a){var e=a.accuracy/2;latlngmap=a.latlng,null!=latlngmap&&(null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa).bindPopup("Estás dentro a "+e+" mts desde este punto").openPopup())}function onLocationError(a){alert(a.message)}function nearestBicisendaEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBiciSenda()}function nearestCicloviaEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestCicloVia()}function nearestZ30Event(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestZona30()}function nearestSeccionalEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestSeccional()}function nearestBiciAmigoEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBiciAmigo()}function nearestGasolinerasEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestInfladores()}function nearestBiciPuntoEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBiciPunto()}function nearestPMEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearest_estacionPM()}function nearestBicicleteriasEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBicicleteria()}function nearestBicicletariosEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBicicletarios()}function nearestBebederosEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBebederos()}function nearestBaniosEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestBanios()}function nearestTalleresEvent(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),nearestTalleres()}function loadPOISCercanos(){var a=$('input:radio[id="bsrb"] ');a.click(function(){routing=!1;var e=$('input[name="bic"');a.is(":checked")&&(borrarPath(),e.is(":checked")||(loadBiciSendas(),e.prop("checked",!0)),nearestBiciSenda(),mapa.off("click",fn_ant),mapa.on("click",nearestBicisendaEvent),fn_ant=nearestBicisendaEvent)});var e=$('input:radio[id="cvrb"] ');e.click(function(){routing=!1;var a=$('input[name="ciclov"');e.is(":checked")&&(borrarPath(),a.is(":checked")||(loadCicloVias(),a.prop("checked",!0)),nearestCicloVia(),mapa.off("click",fn_ant),mapa.on("click",nearestCicloviaEvent),fn_ant=nearestCicloviaEvent)});var r=$('input:radio[id="z30rb"] ');r.click(function(){routing=!1;var a=$('input[name="z30"');r.is(":checked")&&(borrarPath(),a.is(":checked")||(loadZona30(),a.prop("checked",!0)),nearestZona30(),mapa.off("click",fn_ant),mapa.on("click",nearestZ30Event),fn_ant=nearestZ30Event)});var n=$('input:radio[id="serb"] ');n.click(function(){routing=!1;var a=$('input[name="sec"');n.is(":checked")&&(borrarPath(),a.is(":checked")||(loadSeccionales(),mapa.addLayer(lmarkersS),a.prop("checked",!0)),nearestSeccional(),mapa.off("click",fn_ant),mapa.on("click",nearestSeccionalEvent),fn_ant=nearestSeccionalEvent)});var o=$('input:radio[id="barb"] ');o.click(function(){routing=!1;var a=$('input[name="ba"');o.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBiciAmigos(),mapa.addLayer(geoBiciAmigos),a.prop("checked",!0)),nearestBiciAmigo(),mapa.off("click",fn_ant),mapa.on("click",nearestBiciAmigoEvent),fn_ant=nearestBiciAmigoEvent)});var c=$('input:radio[id="gasrb"] ');c.click(function(){routing=!1;var a=$('input[name="gas"]');c.is(":checked")&&(borrarPath(),a.is(":checked")||(loadEstacionesDeServicio(),mapa.addLayer(inflamarkers),a.prop("checked",!0)),nearestInfladores(),mapa.off("click",fn_ant),mapa.on("click",nearestGasolinerasEvent),fn_ant=nearestGasolinerasEvent)});var i=$('input:radio[id="bprb"] ');i.click(function(){routing=!1;var a=$('input[name="bp"');i.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBiciPuntos(),mapa.addLayer(geoBiciPuntos),a.prop("checked",!0)),nearestBiciPunto(),mapa.off("click",fn_ant),mapa.on("click",nearestBiciPuntoEvent),fn_ant=nearestBiciPuntoEvent)});var l=$('input:radio[id="pmrb"] ');l.click(function(){routing=!1;var a=$('input[name="pm"');l.is(":checked")&&(borrarPath(),a.is(":checked")||(cargarEstaciones(),obtenerDatos(5e3),mapa.addLayer(lmarkersE),a.prop("checked",!0)),nearest_estacionPM(),mapa.off("click",fn_ant),mapa.on("click",nearestPMEvent),fn_ant=nearestPMEvent)});var t=$('input:radio[id="bvrb"] ');t.click(function(){routing=!1;var a=$('input[name="bicv"]');t.is(":checked")&&(borrarPath(),a.is(":checked")||(console.log("cargando bicis"),loadBicicleterias(),mapa.addLayer(geoBicis),a.prop("checked",!0)),nearestBicicleteria(),mapa.off("click",fn_ant),mapa.on("click",nearestBicicleteriasEvent),fn_ant=nearestBicicleteriasEvent)});var m=$('input:radio[id="bcrb"] ');m.click(function(){routing=!1;var a=$('input[name="bicic"');m.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBicicletarios(),mapa.addLayer(geoBicicletarios),$bicicletarioschk.prop("checked",!0)),nearestBicicletarios(),mapa.off("click",fn_ant),mapa.on("click",nearestBicicletariosEvent),fn_ant=nearestBicicletariosEvent)});var p=$('input:radio[id="berb"] ');p.click(function(){routing=!1;var a=$('input[name="be"');p.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBebederos(),mapa.addLayer(geoBebederos),a.prop("checked",!0)),nearestBebederos(),mapa.off("click",fn_ant),mapa.on("click",nearestBebederosEvent),fn_ant=nearestBebederosEvent)});var d=$('input:radio[id="bnrb"] ');d.click(function(){routing=!1;var a=$('input[name="bn"');d.is(":checked")&&(borrarPath(),a.is(":checked")||(loadBanios(),mapa.addLayer(geoBanios),a.prop("checked",!0)),nearestBanios(),mapa.off("click",fn_ant),mapa.on("click",nearestBaniosEvent),fn_ant=nearestBaniosEvent)});var s=$('input:radio[id="brrb"] ');s.click(function(){routing=!1;var a=$('input[name="bicr"');s.is(":checked")&&(borrarPath(),a.is(":checked")||(loadTalleres(),mapa.addLayer(geoTalleres),a.prop("checked",!0)),nearestTalleres(),mapa.off("click",fn_ant),mapa.on("click",nearestTalleresEvent),fn_ant=nearestTalleresEvent)})}function loadPaseosTuristicos(){function a(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),mapa.removeLayer(geoEspVerdes),mapa.removeLayer(lmarkersVerdes),loadEspVerdes(),mapa.addLayer(geoEspVerdes),mapa.addLayer(lmarkersVerdes)}function e(a){latlngmap=null,borrarPath(),null!=markerGeoLoc&&mapa.removeLayer(markerGeoLoc),markerGeoLoc=L.marker(a.latlng).addTo(mapa),latlngmap=L.latLng(a.latlng.lat,a.latlng.lng),mapa.removeLayer(geoPatrimonio),mapa.removeLayer(lmarkersPatrimonio),loadPatrimonio(),mapa.addLayer(geoPatrimonio),mapa.addLayer(lmarkersPatrimonio)}routing=!1;var r=$('input[name="pcvr"');r.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),r.is(":checked")?(loadCVPqueRodo(),mapa.setView([-34.9095928357093,-56.21411204338074],13)):(mapa.removeLayer(geoCvPR),mapa.closePopup(popupRM))});var n=$('input[name="prom"');n.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),n.is(":checked")?(loadPaseoPrado(),mapa.setView([-34.86214778728005,-56.2117838859558],13)):(mapa.removeLayer(geoPaseoPrado),mapa.closePopup(popupPR))});var o=$('input[name="ppen"');o.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),o.is(":checked")?(loadPaseoPeniarol(),mapa.setView([-34.825597,-56.2055289],13)):(mapa.removeLayer(geoPaseoPeniarol),mapa.closePopup(popupPN))});var c=$('input[name="pcin"');c.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),c.is(":checked")?(loadCines(),mapa.addLayer(geoCines)):mapa.removeLayer(geoCines)});var i=$('input[name="ptea"');i.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),i.is(":checked")?(loadTeatros(),mapa.addLayer(geoTeatros)):mapa.removeLayer(geoTeatros)});var l=$('input[name="pmus"');l.click(function(){borrarPath(),fn_actual=onMapClicked,mapa.off("click",fn_ant),mapa.on("click",fn_actual),l.is(":checked")?(loadEspCulturales(),mapa.addLayer(geoEspCulturales)):mapa.removeLayer(geoEspCulturales)});var t=$('input[name="pver"');t.click(function(){borrarPath(),fn_actual=a,mapa.off("click",fn_ant),mapa.on("click",fn_actual),t.is(":checked")?(loadEspVerdes(),mapa.addLayer(geoEspVerdes),mapa.addLayer(lmarkersVerdes)):(mapa.removeLayer(geoEspVerdes),mapa.removeLayer(lmarkersVerdes),mapa.off("click",a),mapa.on("click",onMapClicked))});var m=$('input[name="ppat"');m.click(function(){borrarPath(),fn_actual=e,mapa.off("click",fn_ant),mapa.on("click",fn_actual),m.is(":checked")?(loadPatrimonio(),mapa.addLayer(geoPatrimonio),mapa.addLayer(lmarkersPatrimonio)):(mapa.removeLayer(geoPatrimonio),mapa.removeLayer(lmarkersPatrimonio))})}function loadData(){loadDatosIniciales(),loadMapa(),loadFacultades(),loadPOI(),loadPOISCercanos(),loadPaseosTuristicos()}var routing=!1;