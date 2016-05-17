function addCirculo(e){null!=circulo&&(mapa.removeLayer(circulo),circulo=null),circulo=L.circle(e,220,{color:"#347EFD",weight:3,fillColor:"#99CCFF",fillOpacity:.5}).addTo(mapa)}function displayLayer(e){mapa.addLayer(e)}function deleteLayer(e){null!=e&&mapa.removeLayer(e)}function cargarEstaciones(){lmarkersE=L.layerGroup(),markersArray=[],markersArrayAnt=[],markerObj=null;for(var e="",o=0,n=0,a=0;a<estaciones.length;a++)estacion=estaciones[a],o=parseFloat(estacion[1]),n=parseFloat(estacion[2]),a==estaciones.length-1?(e="<b><centre>"+estacion[0]+"</centre></b><br>Pérez Castellano 1492 esquina Cerrito<br>Lunes a Viernes: 9:00 a 18:00 hs.  Sábados: 10:00 a 14:00 hs",marker=L.marker([o,n],{icon:officeIcon,title:"Oficina Plan Movete"}).bindPopup(e)):(e="<b><centre>"+estacion[0]+"</centre></b>",marker=L.marker([o,n],{icon:normalIcon,title:"Estación Plan Movete"}).bindPopup(e)),latlngEstaciones.push(marker.getLatLng()),marker.on("click",function(e){this.openPopup()}),markerObj={_marker:marker,content:e},markersArray.push(markerObj),e=$.extend({},markerObj),markersArrayAnt.push(e),lmarkersE.addLayer(marker);lmarkersE.addTo(mapa),paradas_ant=estaciones.slice()}function actualizarMapa(){socket.on("paradas",function(e){paradas2=[],paradas=[],paradas2=e,JSON.parse("["+paradas2.split("'").join('"')+"]").forEach(function(e){paradas.push(e)}),actualizoMarkers(paradas)}),socket.on("error",function(){$("#aviso").html("<p>Servidor fuera de servicio. Reintente luego</p>")})}function obtenerDatos(e){if(actualizo=!1,e=(new Date).getHours(),21>e&&e>=7)socket=io(),socket.emit("paradas",paradas),actualizarMapa();else{for(e=0;e<estaciones.length;e++)estacion=estaciones[e],markerObj=markersArray[e],e==estaciones.length-1?(desc="<b><centre>"+estacion[0]+"</centre></b><br>Pérez Castellano 1492 esquina Cerrito<br>Lunes a Viernes: 9:00 a 18:00 hs.  Sábados: 10:00 a 14:00 hs",markerObj._marker.setIcon(officeIcon)):(desc="<b><centre>"+estacion[0]+"</centre></b><br><centre>FUERA DE SERVICIO</centre>",markerObj._marker.setIcon(brokenIcon)),markerObj._marker.setPopupContent(desc);if(actualizo=!0,1==actualizo){var o=$.extend({},markerObj);markersArrayAnt[e]=o}else markerObj=markersArrayAnt[e]}}function actualizoMarkers(e){var o=null,n="",a=!1,n=[];if(null==e)$("#aviso").html("<p>Los datos de las estaciones no están actualizados</p>");else{if($("#aviso").html(""),0==e.length&&$("#aviso").html("<p>No hay datos de las estaciones</p>"),null==e)$("#aviso").html("<p>Los datos de las estaciones no están actualizados</p>");else if($("#aviso").html(""),0==e.length)return void $("#aviso").html("<p>No hay datos de las estaciones</p>");for(paradas=e[0],e=0;e<paradas.length;e++)n=paradas[e],o=markersArray[e],6!=n[4]&&(-1==n[4]?(n="<b><center>"+n[0]+"</center></b><br>Calle Alzáibar 1321 - Lunes a Viernes: 9:00 a 18:00 h.<br>Sábados: De 10:00 a 14:00 h",o._marker.setIcon(officeIcon)):4==n[4]||5==n[4]||"0"==n[8]?(o._marker.setIcon(brokenIcon),n="<b><centre>"+n[0]+"</centre></b><br>FUERA DE SERVICIO"):n[6]==n[7]&&0!=n[7]?(o._marker.setIcon(fullIcon),n="<b><centre>"+n[0]+"</centre></b><br>Estación llena"):0==n[6]?(o._marker.setIcon(emptyIcon),n="<b><centre>"+n[0]+"</centre></b><br>Estación vacía"):(o._marker.setIcon(normalIcon),a=n[6].toString(),_cantHuecos=n[7]-n[6],cantHuecos=_cantHuecos.toString(),n="<b><centre>"+n[0]+"</centre></b><br>Disponibles: "+a+"    Huecos libres: "+cantHuecos),o._marker.setPopupContent(n),a=!0);1==a&&(o=$.extend({},o),markersArrayAnt[e]=o),paradas_ant=paradas.slice()}}function loadBiciAmigos(){geoBiciAmigos=L.geoJson(biciamigos,{pointToLayer:function(e,o){var n=e.properties.Nombre+"<br>"+e.properties.Direc+" <br>"+e.properties.Desc+"  "+e.properties.Telef,n=L.marker(o,{icon:parkIcon}).bindPopup(n).addTo(mapa);return n.on("click",function(){this.openPopup()}),latlngBiciAmigos.push(L.latLng(e.geometry.coordinates[1],e.geometry.coordinates[0])),n}}).addTo(mapa)}function loadBiciPuntos(){geoBiciPuntos=L.geoJson(bicipuntos,{pointToLayer:function(e,o){var n="<b>"+e.properties.Nombre+"</b><br>"+e.properties.Direc+" <br>"+e.properties.Desc+"<br>"+e.properties.Telef+" Horario : "+e.properties.Horario,n=L.marker(o,{icon:bpIcon}).bindPopup(n).addTo(mapa);return n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadBicicletarios(){geoBicicletarios=L.geoJson(bicicletarios,{filter:function(e,o){return e.properties.ACTIVO="Si"},pointToLayer:function(e,o){var n="<b>"+e.properties.NOMBRE_UBI+"</b><br>Ubicación : "+e.properties.UBIC_BICIC+"<br>Cantidad de módulos : "+Math.trunc(e.properties.CANTIDAD).toString();return null!=e.properties.OBSERVACIO&&(n=n+"<br> Obervaciones: "+e.properties.OBSERVACIO),n=L.marker(o,{icon:bicicletarioIcon}).bindPopup(n).addTo(mapa),n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadBebederos(){geoBebederos=L.geoJson(bebederos,{filter:function(e,o){return e.properties.ACTIVO="Si"},pointToLayer:function(e,o){var n="<b>"+e.properties.DESCRIPCIO+"</b><br>Tipo : "+e.properties.MODELO_BEB+"<br>CCZ : "+Math.trunc(e.properties.CCZ).toString(),n=L.marker(o,{icon:bebederoIcon}).bindPopup(n).addTo(mapa);return n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadTalleres(){geoTalleres=L.geoJson(talleres,{filter:function(e,o){return e.properties.ACTIVO="Si"},pointToLayer:function(e,o){var n="Sin especificar",a="Sin especificar";return null!=e.properties.HORARIOS&&(n=e.properties.HORARIOS),null!=e.properties.SERVICIOS&&(a=e.properties.SERVICIOS),n="<b>"+e.properties.NOMBRE+"</b><br>Horario : "+n+"<br>Servicio : "+a,n=L.marker(o,{icon:tallerIcon}).bindPopup(n).addTo(mapa),n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadBanios(){geoBanios=L.geoJson(banios,{filter:function(e,o){return e.properties.ACTIVO="Si"},pointToLayer:function(e,o){var n="<b> Tipo: </b>"+e.properties.DESCRIPCIO+"<br>Modelo : "+e.properties.MODELO_BAN+"<br>Cantidad gabinetes: "+Math.trunc(e.properties.CANT_GABIN).toString()+"<br>",n=null!=e.properties.HORARIO_FU?n+"Horario: "+e.properties.HORARIO_FU+"<br>":n+"Horario: -<br>",n=n+"CCZ : "+Math.trunc(e.properties.CCZ).toString(),n=1==e.properties.ACCESIBILI?n+"<br>Accesibilidad: Si":n+"<br>Accesibilidad: No";return null!=e.properties.OBSERVACIO&&(n=n+"<br>Observaciones: "+e.properties.OBSERVACIO),n=L.marker(o,{icon:banioIcon}).bindPopup(n).addTo(mapa),n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadCines(){geoCines=L.geoJson(cultura,{filter:function(e,o){return 0<=e.properties.NOMBRE.toUpperCase().indexOf("CINE")},pointToLayer:function(e,o){var n="<b>"+e.properties.NOMBRE+"</b>";return null!=e.properties.DIRECCION&&(n=n+"<br>Dirección: "+e.properties.DIRECCION),n=L.marker(o,{icon:cineIcon}).bindPopup(n).addTo(mapa),n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadTeatros(){geoTeatros=L.geoJson(cultura,{filter:function(e,o){return 0<=e.properties.NOMBRE.toUpperCase().indexOf("TEATRO")||0<=e.properties.NOMBRE.toUpperCase().indexOf("AUDITORIO")},pointToLayer:function(e,o){var n="<b>"+e.properties.NOMBRE+"</b>";return null!=e.properties.DIRECCION&&(n=n+"<br>Dirección: "+e.properties.DIRECCION),n=L.marker(o,{icon:teatroIcon}).bindPopup(n).addTo(mapa),n.on("click",function(){this.openPopup()}),n}})}function loadEspCulturales(){geoEspCulturales=L.geoJson(cultura,{filter:function(e,o){return 0<=e.properties.NOMBRE.toUpperCase().indexOf("MUSEO")||0<=e.properties.NOMBRE.toUpperCase().indexOf("ESPACIO CULTURAL")},pointToLayer:function(e,o){var n="<b>"+e.properties.NOMBRE+"</b>";return null!=e.properties.DIRECCION&&(n=n+"<br>Dirección: "+e.properties.DIRECCION),n=L.marker(o,{icon:museoIcon}).bindPopup(n).addTo(mapa),n.on("click",function(){this.openPopup()}),n}})}function distancia(e,o,n){return L.GeometryUtil.distance(mapa,o,n)}function loadPatrimonio(){function e(e){e=e.target,e.setStyle({weight:4,color:"#F55C2A",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront()}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoPatrimonio.resetStyle(e.target)}lmarkersPatrimonio=L.layerGroup();var a=0;geoPatrimonio=L.geoJson(patrimonio,{filter:function(e,o){if(a>50)return null;if(null!=latlngmap&&null!=latlngmap.lat&&null!=latlngmap.lng){var n=L.latLng(e.geometry.coordinates[0][0][1],e.geometry.coordinates[0][0][0]);return 150>=distancia(mapa,latlngmap,n)?(a+=1,e.geometry):null}console.log("sin marcar")},style:function(e){return{weight:4,opacity:.7,color:"#F55C2A",dashArray:"4",fillOpacity:.7,fillColor:"#F56231"}},onEachFeature:function(a,r){if(null!=a.geometry&&"Polygon"===a.geometry.type){var i=r.getBounds().getCenter(),t="";null!=a.properties.NOMBRE&&(t=a.properties.NOMBRE,i=L.marker(i,{icon:patrimonioIcon}).bindPopup(t).addTo(mapa),i.on("click",function(){this.openPopup()}),i.addTo(lmarkersPatrimonio)),r.on({mouseover:e,mouseout:n,click:o})}}})}function loadEspVerdes(){function e(e){e=e.target,e.setStyle({weight:3,color:"#089E0D",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront()}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoEspVerdes.resetStyle(e.target)}var a=0;lmarkersVerdes=L.layerGroup(),geoEspVerdes=L.geoJson(espacios_libres,{filter:function(e,o){if(a>50)return null;if(null!=latlngmap&&null!=latlngmap.lat&&null!=latlngmap.lng){var n=L.latLng(e.geometry.coordinates[0][0][1],e.geometry.coordinates[0][0][0]);return 150>=distancia(mapa,latlngmap,n)?(a+=1,e.geometry):null}console.log("sin marcar")},style:function(e){return{weight:3,opacity:.7,color:"#089E0D",dashArray:"4",fillOpacity:.7,fillColor:"#0BD611"}},onEachFeature:function(a,r){if("Polygon"===a.geometry.type){if(null!=a.properties.NOMBRE_ESP){var i=r.getBounds().getCenter(),t="";null!=a.properties.NOM_TIPO_E&&(t=a.properties.NOM_TIPO_E),t=t+"<br><b>"+a.properties.NOMBRE_ESP+"</b>",i=L.marker(i,{icon:bosqueIcon}).bindPopup(t).addTo(mapa),i.on("click",function(){this.openPopup()}),i.addTo(lmarkersVerdes)}r.on({mouseover:e,mouseout:n,click:o})}}})}function loadEstacionesDeServicio(){inflamarkers=L.geoJson(infladores,{pointToLayer:function(e,o){return L.marker(o,{icon:gasIcon}).bindPopup(e.properties.name+"<br>"+e.properties.description).addTo(mapa)}})}function getColor(e){return e>1e3?"#800026":e>500?"#BD0026":e>200?"#E31A1C":e>100?"#FC4E2A":e>50?"#FD8D3C":e>20?"#FEB24C":e>10?"#FED976":"#FFEDA0"}function loadCicloVias(){function e(e){e=e.target,e.setStyle({weight:4,color:"#098731",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront()}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoCV.resetStyle(e.target)}geoCV=L.geoJson(bicicircuitos,{filter:function(e,o){return"Si"==e.properties.ACTIVO&&"Ciclovia"==e.properties.TIPO_BICIC},style:function(e){return{weight:4,opacity:1,color:"#098731",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})}}).addTo(mapa)}function loadZona30(){function e(e){e=e.target,e.setStyle({weight:4,color:"#F28124",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront()}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoz30.resetStyle(e.target)}geoz30=L.geoJson(bicicircuitos,{filter:function(e,o){return"Si"==e.properties.ACTIVO&&"Calle 30"==e.properties.TIPO_BICIC},style:function(e){return{weight:4,opacity:1,color:"#F28124",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})}}).addTo(mapa)}function loadBiciSendas(){function e(e){e=e.target,e.setStyle({weight:4,color:"#3410E8",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront()}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoBS.resetStyle(e.target)}geoBS=L.geoJson(bicicircuitos,{style:function(e){return{weight:4,opacity:1,color:"#3410E8",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})}}).addTo(mapa)}function loadCVPqueRodo(){function e(e){e=e.target,"Point"!==feature.geometry.type&&(e.setStyle({weight:4,color:"#EB1C1C",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront())}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoCvPR.resetStyle(e.target)}geoCvPR=L.geoJson(cvpr,{style:function(e){return{weight:4,opacity:1,color:"#EB1C1C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})},pointToLayer:function(e,o){var n=e.properties.descrip;if(1==e.properties.tipo)var a=L.marker(o,{icon:semaforoIcon}).bindPopup(n).addTo(mapa);else 2==e.properties.tipo?(null!=e.properties.imag&&(n=n+"<br><img id='foto' src='"+e.properties.imag+"'/>"),a=L.marker(o,{icon:patrimonioIcon}).bindPopup(n).addTo(mapa)):a=4==e.properties.tipo?L.marker(o,{icon:infoPatIcon}).bindPopup(n).openPopup().addTo(mapa):L.marker(o,{icon:alertaIcon}).bindPopup(n).addTo(mapa);return a.on("click",function(){this.openPopup(),$("#foto").load(function(){a._popup._updateLayout()})}),a}}).addTo(mapa),mapa.setView([-34.90353,-56.18975]),popupRM=L.popup().setLatLng([-34.90353,-56.18975]).setContent("<b>Patrimonio cultural - Circuito histórico-urbano</b><br>Duración aprox. 2hs, distancia aprox. 12km <br> Dificultad intermedia").openOn(mapa)}function loadPaseoPrado(){function e(e){e=e.target,"Point"!==feature.geometry.type&&(e.setStyle({weight:4,color:"#EB1C1C",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront())}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoPaseoPrado.resetStyle(e.target)}geoPaseoPrado=L.geoJson(paseoPrado,{style:function(e){return{weight:4,opacity:1,color:"#EB1C1C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})},pointToLayer:function(e,o){var n=e.properties.descrip;if(1==e.properties.tipo)var a=L.marker(o,{icon:semaforoIcon}).bindPopup(n).addTo(mapa);else 2==e.properties.tipo?(null!=e.properties.imag&&(n=n+"<br><img id='foto' src='"+e.properties.imag+"'/>"),a=L.marker(o,{icon:patrimonioIcon}).bindPopup(n).addTo(mapa)):a=4==e.properties.tipo?L.marker(o,{icon:infoPatIcon}).bindPopup(n).openPopup().addTo(mapa):L.marker(o,{icon:alertaIcon}).bindPopup(n).addTo(mapa);return a.on("click",function(){this.openPopup(),$("#foto").load(function(){a._popup._updateLayout()})}),a}}).addTo(mapa),mapa.setView([-34.85315,-56.20807]),popupPR=L.popup().setLatLng([-34.85315,-56.20807]).setContent("<b>Patrimonio cultural - Circuito romántico</b><br>Duración aprox. 2hs, distancia aprox. 9km <br> Dificultad intermedia").openOn(mapa)}function loadPaseoPeniarol(){function e(e){e=e.target,"Point"!==feature.geometry.type&&feature&&(e.setStyle({weight:4,color:"#EB1C1C",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront())}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoPaseoPeniarol.resetStyle(e.target)}geoPaseoPeniarol=L.geoJson(paseoPeniarol,{style:function(e){return{weight:4,opacity:1,color:"#EB1C1C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})},pointToLayer:function(e,o){var n=e.properties.descrip;if(1==e.properties.tipo)var a=L.marker(o,{icon:semaforoIcon}).bindPopup(n).addTo(mapa);else 2==e.properties.tipo?(null!=e.properties.imag&&(n=n+"<br><img id='foto' src='"+e.properties.imag+"'/>"),a=L.marker(o,{icon:patrimonioIcon}).bindPopup(n).addTo(mapa)):a=4==e.properties.tipo?L.marker(o,{icon:infoPatIcon}).bindPopup(n).openPopup().addTo(mapa):L.marker(o,{icon:alertaIcon}).bindPopup(n).addTo(mapa);return a.on("click",function(){this.openPopup(),$("#foto").load(function(){a._popup._updateLayout()})}),a}}).addTo(mapa),mapa.setView([-34.82451,-56.209014]),popupPN=L.popup().setLatLng([-34.82451,-56.209014]).setContent("<b>Patrimonio cultural - Circuito industrial</b><br>Duración aprox. 1hr30m, distancia aprox. 3.5km <br> Dificultad baja").openOn(mapa)}function loadRepechos(){function e(e){e=e.target,"Point"!==feature.geometry.type&&(e.setStyle({weight:4,color:"#E31246",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront())}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoRepechos.resetStyle(e.target)}geoRepechos=L.geoJson(repechos,{style:function(e){return{weight:4,opacity:1,color:"#E31246",dashArray:"",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})},pointToLayer:function(e,o){var n=e.properties.popup,n=L.marker(o,{icon:repechoIcon}).bindPopup(n).addTo(mapa);return n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadBicicleterias(){geoBicis=null,geoBicis=L.geoJson(bicicleterias,{pointToLayer:function(e,o){var n=e.properties.Nombre+"<br>"+e.properties.Direc+"<br>Telef: "+e.properties.Telef,n=L.marker(o,{icon:biciIcon}).bindPopup(n).addTo(mapa);return n.on("click",function(){this.openPopup()}),n}})}function nearest_estacionPM(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closest(mapa,latlngEstaciones,latlngmap);mapa.setView(e,15),addCirculo(e),rutaAB(latlngmap,e)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestInfladores(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,inflamarkers.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestSeccional(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,lmarkersS.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestTalleres(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoTalleres.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestBicicletarios(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoBicicletarios.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestBanios(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoBanios.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestBebederos(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoBebederos.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Debe clickear sobre la región antes");else alert("Debe clickear sobre la región antes")}function nearestCicloVia(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoCV.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}function nearestBiciSenda(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoBS.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}function nearestZona30(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoz30.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}function nearestBicicleteria(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoBicis.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}function nearestBiciPunto(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closestLayer(mapa,geoBiciPuntos.getLayers(),latlngmap);mapa.setView(e.latlng,15),addCirculo(e.latlng),rutaAB(latlngmap,e.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}function nearestBiciAmigo(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var e=L.GeometryUtil.closest(mapa,latlngBiciAmigos,latlngmap);mapa.setView(e,15),addCirculo(e),rutaAB(latlngmap,e)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}function loadSeccionales(){lmarkersS=null,lmarkersS=L.geoJson(seccionales,{pointToLayer:function(e,o){var n="<b>"+e.properties.Secc+"</b><br>"+e.properties.Dir+"<br>Telef: "+e.properties.Tel,n=L.marker(o,{icon:policeIcon}).bindPopup(n).addTo(mapa);return n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadFacultades(){lmarkersFacs=L.layerGroup(),marker=L.marker([-34.90612,-56.18307],{icon:uniIcon,title:"Fac. Ciencias Sociales"}).bindPopup("<b>Fac. Ciencias Sociales</b><br>Constituyente 1502<br>Reparación/estacionamiento para estudiantes/funcionarios"),lmarkersFacs.addLayer(marker),marker=L.marker([-34.90246,-56.17668],{icon:uniIcon,title:"Fac. de Derecho"}).bindPopup("<b>Fac. de Derecho</b><br>18 de Julio 1824 <br>Estacionamiento para estudiantes/funcionarios"),lmarkersFacs.addLayer(marker),marker=L.marker([-34.91236,-56.17432],{icon:uniIcon,title:"Fac. Ccias Económicas"}).bindPopup("<b>Fac. de Ciencias Económicas</b><br>Gonzalo Ramirez 1926<br>Estacionamiento para estudiantes/funcionarios"),lmarkersFacs.addLayer(marker),marker=L.marker([-34.91815,-56.16685],{icon:uniIcon,title:"Fac. de Ingeniería"}).bindPopup("<b>Fac. de Ingeniería</b><br>Av. Julio Herrera y Reissig 565<br>Reparación ligera, estacionamiento vigilado y vestuario - todo público"),lmarkersFacs.addLayer(marker),marker=L.marker([-34.90969,-56.16417],{icon:uniIcon,title:"Fac. de Arquitectura"}).bindPopup("<b>Fac. de Arquitectura</b><br>Bulevar General Artigas 1031<br>Estacionamiento para estudiantes/funcionarios"),lmarkersFacs.addLayer(marker),marker=L.marker([-34.9025914,-56.1799721],{icon:uniIcon,title:"Fac. de Humanidades"}).bindPopup("<b>Fac. de Humanidades</b><br>Magallanes 1577<br>Reparación ligera y estacionamiento para estudiantes/funcionarios "),lmarkersFacs.addLayer(marker),marker=L.marker([-34.899897,-56.178825],{icon:uniIcon,title:"Fac. de Psicología"}).bindPopup("<b>Fac. de Psicología</b><br>Tristán Narvaja 1674<br>Reparación ligera y estacionamiento para estudiantes/funcionarios"),marker=L.marker([-34.90286,-56.17807],{icon:uniIcon,title:"Fac. de Artes"}).bindPopup("<b>Fac. de Artes</b><br>18 de Julio 1772<br>Estacionamiento para estudiantes/funcionarios"),lmarkersFacs.addLayer(marker),lmarkersFacs.addTo(mapa)}function loadPendientes(){function e(e){e=e.target,e.setStyle({weight:4,color:"#E31246",dashArray:"",fillOpacity:.7}),L.Browser.ie||e.bringToFront()}function o(e){mapa.fitBounds(e.target.getBounds())}function n(e){geoPendientes.resetStyle(e.target)}geoPendientes=L.geoJson(ejes,{style:function(e){return{weight:4,opacity:1,color:"#E31246",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(a,r){r.on({mouseover:e,mouseout:n,click:o})}}).addTo(mapa)}function loadRecorrido(e){function o(o){geoRecorridos[e].resetStyle(o.target)}function n(e){}function a(e){mapa.fitBounds(e.target.getBounds())}geoRecorridos[e]=L.geoJson(recorridos[e],{style:function(e){return{weight:4,opacity:1,color:"#F71E2C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(e,r){r.on({mouseover:n,mouseout:o,click:a})},pointToLayer:function(e,o){var n="inicio"==e.properties.tipo?L.marker(o,{icon:iniGreenIcon}).bindPopup("Inicio").addTo(mapa):"final"==e.properties.tipo?L.marker(o,{icon:finRedIcon}).bindPopup("Final").addTo(mapa):L.marker(o,{icon:infoPatIcon}).bindPopup(e.properties.Info).openPopup().addTo(mapa);return n.on("click",function(){this.openPopup()}),n}}).addTo(mapa)}function loadDatosIniciales(){socket=io(),socket.on("biciamigos",function(e){biciamigos=jQuery.parseJSON(e)}),socket.on("infladores",function(e){infladores=jQuery.parseJSON(e)}),socket.on("bicipuntos",function(e){bicipuntos=jQuery.parseJSON(e)}),socket.on("bicicleterias",function(e){bicicleterias=jQuery.parseJSON(e)}),socket.on("repechos",function(e){repechos=jQuery.parseJSON(e)}),socket.on("seccionales",function(e){seccionales=jQuery.parseJSON(e)}),socket.on("talleres",function(e){talleres=jQuery.parseJSON(e)}),socket.on("paseoRambla",function(e){cvpr=jQuery.parseJSON(e)}),socket.on("paseoPeniarol",function(e){paseoPeniarol=jQuery.parseJSON(e)}),socket.on("paseoPrado",function(e){paseoPrado=jQuery.parseJSON(e)}),socket.on("error",function(){$("#aviso").html("<p>Servidor fuera de servicio. Reintente luego</p>")})}var paradas_ant=[],markersArray=[],markersArrayAnt=[],lmarkersVerdes=null,lmarkersPatrimonio=null,NV=-10,idPM=-1,latlngEstaciones=[],latlngBiciAmigos=[],lmarkersFacs=null,lmarkesS=null,markerSugeridos=null,markerGeoLoc=null,circulo=null,popup=null,popupPN=null,popupPR=null,popupRM=null,popupBIC=null,geoBS=null,geoCV=null,geoz30=null,geoBicis=null,geoBiciAmigos=null,inflamarkers=null,geoBiciPuntos=null,lmarkersS=null,lmarkersE=null,geoBebederos=null,geoBicicletarios=null,geoTalleres=null,geoBanios=null,geoCvPR=null,geoPaseoPrado=null,geoPaseoPeniarol=null,geoCines=null,geoTeatros=null,geoEspCulturales=null,geoPatrimonio=null,geoEspVerdes=null,geoRepechos=null,markersInf=null,layerParking=null;geoRecorrido=null,recorridos=[],geoRecorridos=[],markersLayerP=[];var fn_actual=null,fn_ant=null,CV1=[L.latLng(-34.90554,-56.21065),L.latLng(-34.90269,-56.20193),L.latLng(-34.90837,-56.20122),L.latLng(-34.91109,-56.21122)],CV2=[L.latLng(-34.90304,-56.17679),L.latLng(-34.90608,-56.17522)],CV3=[L.latLng(-34.91078,-56.1664),L.latLng(-34.91029,-56.1646),L.latLng(-34.91894,-56.16614)],CV4=[L.latLng(-34.91933,-56.17183),L.latLng(-34.9288,-56.16172)],CV5=[L.latLng(-34.92165,-56.14988),L.latLng(-34.92904,-56.16078)],biciamigos=null,infladores=null,bicipuntos=null,bicicleterias=null,repechos=null,seccionales=null,talleres=null,cvpr=null,paseoPeniarol=null,paseoPrado=null,paradas=[],estaciones=[["01 - Teatro Solís - Liniers y Reconquista","-34.907822","-56.200436",3,NV,"Oficina de Atención Movete",NV,20,NV],["02 - Templo Inglés - Reconquista y Treinta Tres","-34.909481","-56.204361",4,NV,"Oficina de Atención Movete",NV,20,NV],["03 - Reconquista y Pérez Castellanos","-34.910782","-56.209106",5,NV,"Oficina de Atención Movete",NV,20,NV],["04 - Hospital Maciel - Guaraní y Washington","-34.908863","-56.212181",6,NV,"Oficina de Atención Movete",NV,16,NV],["05 - Mercado del Puerto - Piedras y Pérez Castellanos","-34.906021","-56.211327",7,NV,"Oficina de Atención Movete",NV,20,NV],["08 - Plaza Matriz - Juan Carlos Gómez y Rincón","-34.906101","-56.203266",8,NV,"Oficina de Atención Movete",NV,20,NV],["07 - Terminal Ciudadela Norte - Piedras y Juncal","-34.902901","-56.202896",9,NV,"Oficina de Atención Movete",NV,20,NV],["06 - Banco de la República - Zabala y Piedras","-34.905022","-56.208302",NV,1,"Oficina de Atención Movete",NV,16,NV],["Oficina de Atención Movete","-34.9067246","-56.2108961",0,-1,"Montevideo",0,0,"1"]],biciIcon=L.icon({iconUrl:"imagenes/bike.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),parkIcon=L.icon({iconUrl:"imagenes/lovebike.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18],shadowSize:[40,32]}),bpIcon=L.icon({iconUrl:"imagenes/bp.png",iconSize:[22,32],iconAnchor:[10,32],popupAnchor:[0,-18]}),policeIcon=L.icon({iconUrl:"imagenes/policeman.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18],shadowSize:[40,32]}),gasIcon=L.icon({iconUrl:"imagenes/gasstation.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),emptyIcon=L.icon({iconUrl:"imagenes/bikeiconempty.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),fullIcon=L.icon({iconUrl:"imagenes/bikeiconfull.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),normalIcon=L.icon({iconUrl:"imagenes/bikeiconsemi.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),brokenIcon=L.icon({iconUrl:"imagenes/bikeiconbreak.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),officeIcon=L.icon({iconUrl:"imagenes/iconoffice.png",iconSize:[20,34],iconAnchor:[8,34],popupAnchor:[0,-18]}),uniIcon=L.icon({iconUrl:"imagenes/uni2.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),cafeIcon=L.icon({iconUrl:"imagenes/cafe2.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),semaforoIcon=L.icon({iconUrl:"imagenes/semaforo2.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),alertaIcon=L.icon({iconUrl:"imagenes/alerta.png",iconSize:[38,19],iconAnchor:[26,19],popupAnchor:[0,-18]}),patrimonioIcon=L.icon({iconUrl:"imagenes/patrimonio.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),tallerIcon=L.icon({iconUrl:"imagenes/tallerIcon.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),banioIcon=L.icon({iconUrl:"imagenes/bathroom.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),cineIcon=L.icon({iconUrl:"imagenes/cine24.png",iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-18]}),teatroIcon=L.icon({iconUrl:"imagenes/teatro24.png",iconSize:[24,24],iconAnchor:[20,24],popupAnchor:[0,-18]}),museoIcon=L.icon({iconUrl:"imagenes/museo32.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),bebederoIcon=L.icon({iconUrl:"imagenes/drink_24.png",iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-18]}),bosqueIcon=L.icon({iconUrl:"imagenes/bosque32.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),repechoIcon=L.icon({iconUrl:"imagenes/pendiente.png",iconSize:[32,37],iconAnchor:[20,37],popupAnchor:[0,-18]}),bicicletarioIcon=L.icon({iconUrl:"imagenes/bicicletario.png",iconSize:[32,37],iconAnchor:[20,37],popupAnchor:[0,-18]}),infoPatIcon=L.icon({iconUrl:"imagenes/info_blue3_32.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),iniGreenIcon=L.icon({iconUrl:"imagenes/marker-green.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),finRedIcon=L.icon({iconUrl:"imagenes/marker-red.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),d=new Date,h=d.getHours();