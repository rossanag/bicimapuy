var paradas_ant=[],markersArray=[],markersArrayAnt=[],lmarkersVerdes=null,lmarkersPatrimonio=null,NV=-10,idPM=-1,latlngEstaciones=[],latlngBiciAmigos=[],lmarkersFacs=null,lmarkesS=null,markerSugeridos=null,markerGeoLoc=null,circulo=null,popup=null,popupPN=null,popupPR=null,popupRM=null,popupBIC=null,geoBS=null,geoCV=null,geoz30=null,geoBicis=null,geoBiciAmigos=null,inflamarkers=null,geoBiciPuntos=null,lmarkersS=null,lmarkersE=null,geoBebederos=null,geoBicicletarios=null,geoTalleres=null,geoBanios=
null,geoCvPR=null,geoPaseoPrado=null,geoPaseoPeniarol=null,geoCines=null,geoTeatros=null,geoEspCulturales=null,geoPatrimonio=null,geoEspVerdes=null,geoRepechos=null,markersInf=null,layerParking=null;markersLayerP=[];
var fn_actual=null,fn_ant=null,CV1=[L.latLng(-34.90554,-56.21065),L.latLng(-34.90269,-56.20193),L.latLng(-34.90837,-56.20122),L.latLng(-34.91109,-56.21122)],CV2=[L.latLng(-34.90304,-56.17679),L.latLng(-34.90608,-56.17522)],CV3=[L.latLng(-34.91078,-56.1664),L.latLng(-34.91029,-56.1646),L.latLng(-34.91894,-56.16614)],CV4=[L.latLng(-34.91933,-56.17183),L.latLng(-34.9288,-56.16172)],CV5=[L.latLng(-34.92165,-56.14988),L.latLng(-34.92904,-56.16078)],biciamigos=null,infladores=null,bicipuntos=null,bicicleterias=
null,repechos=null,seccionales=null,talleres=null,cvpr=null,paseoPeniarol=null,paseoPrado=null,paradas=[],estaciones=[["01 - Teatro Sol\u00eds - Liniers y Reconquista","-34.907822","-56.200436",3,NV,"Oficina de Atenci\u00f3n Movete",NV,20,NV],["02 - Templo Ingl\u00e9s - Reconquista y Treinta Tres","-34.909481","-56.204361",4,NV,"Oficina de Atenci\u00f3n Movete",NV,20,NV],["03 - Reconquista y P\u00e9rez Castellanos","-34.910782","-56.209106",5,NV,"Oficina de Atenci\u00f3n Movete",NV,20,NV],["04 - Hospital Maciel - Guaran\u00ed y Washington",
"-34.908863","-56.212181",6,NV,"Oficina de Atenci\u00f3n Movete",NV,16,NV],["05 - Mercado del Puerto - Piedras y P\u00e9rez Castellanos","-34.906021","-56.211327",7,NV,"Oficina de Atenci\u00f3n Movete",NV,20,NV],["08 - Plaza Matriz - Juan Carlos G\u00f3mez y Rinc\u00f3n","-34.906101","-56.203266",8,NV,"Oficina de Atenci\u00f3n Movete",NV,20,NV],["07 - Terminal Ciudadela Norte - Piedras y Juncal","-34.902901","-56.202896",9,NV,"Oficina de Atenci\u00f3n Movete",NV,20,NV],["06 - Banco de la Rep\u00fablica - Zabala y Piedras",
"-34.905022","-56.208302",NV,1,"Oficina de Atenci\u00f3n Movete",NV,16,NV],["Oficina de Atenci\u00f3n Movete","-34.9067246","-56.2108961",0,-1,"Montevideo",0,0,"1"]],biciIcon=L.icon({iconUrl:"imagenes/bike.png",iconSize:[25,41],iconAnchor:[13,41],popupAnchor:[0,-18]}),parkIcon=L.icon({iconUrl:"imagenes/lovebike.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18],shadowSize:[40,32]}),bpIcon=L.icon({iconUrl:"imagenes/bp.png",iconSize:[22,32],iconAnchor:[10,32],popupAnchor:[0,-18]}),policeIcon=
L.icon({iconUrl:"imagenes/policeman.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18],shadowSize:[40,32]}),gasIcon=L.icon({iconUrl:"imagenes/gasstation.png",iconSize:[32,37],iconAnchor:[20,37],popupAnchor:[0,-18]}),emptyIcon=L.icon({iconUrl:"imagenes/bikeiconempty.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),fullIcon=L.icon({iconUrl:"imagenes/bikeiconfull.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),normalIcon=L.icon({iconUrl:"imagenes/bikeiconsemi.png",
iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),brokenIcon=L.icon({iconUrl:"imagenes/bikeiconbreak.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),officeIcon=L.icon({iconUrl:"imagenes/iconoffice.png",iconSize:[20,34],iconAnchor:[8,34],popupAnchor:[0,-18]}),uniIcon=L.icon({iconUrl:"imagenes/uni2.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),cafeIcon=L.icon({iconUrl:"imagenes/cafe2.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),semaforoIcon=
L.icon({iconUrl:"imagenes/semaforo2.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),alertaIcon=L.icon({iconUrl:"imagenes/alerta.png",iconSize:[38,19],iconAnchor:[26,19],popupAnchor:[0,-18]}),patrimonioIcon=L.icon({iconUrl:"imagenes/patrimonio.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),tallerIcon=L.icon({iconUrl:"imagenes/tallerIcon.png",iconSize:[20,30],iconAnchor:[8,30],popupAnchor:[0,-18]}),banioIcon=L.icon({iconUrl:"imagenes/bathroom.png",iconSize:[32,32],iconAnchor:[20,
32],popupAnchor:[0,-18]}),cineIcon=L.icon({iconUrl:"imagenes/cine24.png",iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-18]}),teatroIcon=L.icon({iconUrl:"imagenes/teatro24.png",iconSize:[24,24],iconAnchor:[20,24],popupAnchor:[0,-18]}),museoIcon=L.icon({iconUrl:"imagenes/museo32.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),bebederoIcon=L.icon({iconUrl:"imagenes/drink_24.png",iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-18]}),bosqueIcon=L.icon({iconUrl:"imagenes/bosque32.png",
iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),repechoIcon=L.icon({iconUrl:"imagenes/pendiente.png",iconSize:[32,37],iconAnchor:[20,37],popupAnchor:[0,-18]}),bicicletarioIcon=L.icon({iconUrl:"imagenes/bicicletario.png",iconSize:[32,37],iconAnchor:[20,37],popupAnchor:[0,-18]}),infoPatIcon=L.icon({iconUrl:"imagenes/info_blue3_32.png",iconSize:[32,32],iconAnchor:[20,32],popupAnchor:[0,-18]}),d=new Date,h=d.getHours();
function addCirculo(a){null!=circulo&&(mapa.removeLayer(circulo),circulo=null);circulo=L.circle(a,220,{color:"#347EFD",weight:3,fillColor:"#99CCFF",fillOpacity:.5}).addTo(mapa)}function displayLayer(a){mapa.addLayer(a)}function deleteLayer(a){null!=a&&mapa.removeLayer(a)}
function cargarEstaciones(){lmarkersE=L.layerGroup();markersArray=[];markersArrayAnt=[];markerObj=null;for(var a="",c=0,b=0,e=0;e<estaciones.length;e++)estacion=estaciones[e],c=parseFloat(estacion[1]),b=parseFloat(estacion[2]),e==estaciones.length-1?(a="<b><centre>"+estacion[0]+"</centre></b><br>P\u00e9rez Castellano 1492 esquina Cerrito<br>Lunes a Viernes: 9:00 a 18:00 hs.  S\u00e1bados: 10:00 a 14:00 hs",marker=L.marker([c,b],{icon:officeIcon,title:"Oficina Plan Movete"}).bindPopup(a)):(a="<b><centre>"+
estacion[0]+"</centre></b>",marker=L.marker([c,b],{icon:normalIcon,title:"Estaci\u00f3n Plan Movete"}).bindPopup(a)),latlngEstaciones.push(marker.getLatLng()),marker.on("click",function(a){this.openPopup()}),markerObj={_marker:marker,content:a},markersArray.push(markerObj),a=$.extend({},markerObj),markersArrayAnt.push(a),lmarkersE.addLayer(marker);lmarkersE.addTo(mapa);paradas_ant=estaciones.slice()}
function actualizarMapa(){socket.on("paradas",function(a){paradas2=[];paradas2=a;JSON.parse("["+paradas2.split("'").join('"')+"]").forEach(function(a){paradas.push(a)});actualizoMarkers(paradas)});socket.on("error",function(){$("#aviso").html("<p>Servidor fuera de servicio. Reintente luego</p>")})}
function obtenerDatos(a){actualizo=!1;a=(new Date).getHours();if(21>a&&7<=a)socket=io(),actualizarMapa();else{for(var c=0;c<estaciones.length;c++)estacion=estaciones[c],markerObj=markersArray[c],c==estaciones.length-1?(desc="<b><centre>"+estacion[0]+"</centre></b><br>P\u00e9rez Castellano 1492 esquina Cerrito<br>Lunes a Viernes: 9:00 a 18:00 hs.  S\u00e1bados: 10:00 a 14:00 hs",markerObj._marker.setIcon(officeIcon)):(desc="<b><centre>"+estacion[0]+"</centre></b><br><centre>FUERA DE SERVICIO</centre>",
markerObj._marker.setIcon(brokenIcon)),markerObj._marker.setPopupContent(desc);actualizo=!0}1==actualizo?(a=$.extend({},markerObj),markersArrayAnt[c]=a):markerObj=markersArrayAnt[c]}
function actualizoMarkers(a){var c=null,b;b=!1;var e;if(null==a)$("#aviso").html("<p>Los datos de las estaciones no est\u00e1n actualizados</p>");else{$("#aviso").html("");0==a.length&&$("#aviso").html("<p>No hay datos de las estaciones</p>");var f=(new Date).getHours();if(21>f&&7<=f){if(null==a)$("#aviso").html("<p>Los datos de las estaciones no est\u00e1n actualizados</p>");else if($("#aviso").html(""),0==a.length){$("#aviso").html("<p>No hay datos de las estaciones</p>");return}for(f=0;f<a.length;f++)e=
a[0][f],c=markersArray[f],6!=e[4]&&(-1==e[4]?(b="<b><center>"+e[0]+"</center></b><br>Calle Alz\u00e1ibar 1321 - Lunes a Viernes: 9:00 a 18:00 h.<br>S\u00e1bados: De 10:00 a 14:00 h",c._marker.setIcon(officeIcon)):4==e[4]||5==e[4]||"'0'"==e[8]?(c._marker.setIcon(brokenIcon),b="<b><centre>"+e[0]+"</centre></b><br>FUERA DE SERVICIO"):e[6]==e[7]&&0!=e[7]?(c._marker.setIcon(fullIcon),b="<b><centre>"+e[0]+"</centre></b><br>Estaci\u00f3n llena"):0==e[6]?(c._marker.setIcon(emptyIcon),b="<b><centre>"+e[0]+
"</centre></b><br>Estaci\u00f3n vac\u00eda"):(c._marker.setIcon(normalIcon),b=e[6].toString(),_cantHuecos=e[7]-e[6],cantHuecos=_cantHuecos.toString(),b="<b><centre>"+e[0]+"</centre></b><br>Disponibles: "+b+"    Huecos libres: "+cantHuecos),c._marker.setPopupContent(b),b=!0)}else{for(f=0;f<estaciones.length;f++)estacion=estaciones[f],c=markersArray[f],f==estaciones.length-1?(b="<b><centre>"+estacion[0]+"</centre></b><br>P\u00e9rez Castellano 1492 esquina Cerrito<br>Lunes a Viernes: 9:00 a 18:00 hs.  S\u00e1bados: 10:00 a 14:00 hs",
c._marker.setIcon(officeIcon)):(b="<b><centre>"+estacion[0]+"</centre></b><br><centre>FUERA DE SERVICIO</centre>",c._marker.setIcon(brokenIcon)),c._marker.setPopupContent(b);b=!0}1==b&&(a=$.extend({},c),markersArrayAnt[f]=a);paradas_ant=paradas.slice()}}
function loadBiciAmigos(){geoBiciAmigos=L.geoJson(biciamigos,{pointToLayer:function(a,c){var b=a.properties.Nombre+"<br>"+a.properties.Direc+" <br>"+a.properties.Desc+"  "+a.properties.Telef,b=L.marker(c,{icon:parkIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});latlngBiciAmigos.push(L.latLng(a.geometry.coordinates[1],a.geometry.coordinates[0]));return b}})}
function loadBiciPuntos(){geoBiciPuntos=L.geoJson(bicipuntos,{pointToLayer:function(a,c){var b="<b>"+a.properties.Nombre+"</b><br>"+a.properties.Direc+" <br>"+a.properties.Desc+"<br>"+a.properties.Telef+" Horario : "+a.properties.Horario,b=L.marker(c,{icon:bpIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}}).addTo(mapa)}
function loadBicicletarios(){geoBicicletarios=L.geoJson(bicicletarios,{filter:function(a,c){return a.properties.ACTIVO="Si"},pointToLayer:function(a,c){var b="<b>"+a.properties.NOMBRE_UBI+"</b><br>Ubicaci\u00f3n : "+a.properties.UBIC_BICIC+"<br>Cantidad de m\u00f3dulos : "+Math.trunc(a.properties.CANTIDAD).toString();null!=a.properties.OBSERVACIO&&(b=b+"<br> Obervaciones: "+a.properties.OBSERVACIO);b=L.marker(c,{icon:bicicletarioIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});
return b}}).addTo(mapa)}function loadBebederos(){geoBebederos=L.geoJson(bebederos,{filter:function(a,c){return a.properties.ACTIVO="Si"},pointToLayer:function(a,c){var b="<b>"+a.properties.DESCRIPCIO+"</b><br>Tipo : "+a.properties.MODELO_BEB+"<br>CCZ : "+Math.trunc(a.properties.CCZ).toString(),b=L.marker(c,{icon:bebederoIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}}).addTo(mapa)}
function loadTalleres(){geoTalleres=L.geoJson(talleres,{filter:function(a,c){return a.properties.ACTIVO="Si"},pointToLayer:function(a,c){var b="Sin especificar",e="Sin especificar";null!=a.properties.HORARIOS&&(b=a.properties.HORARIOS);null!=a.properties.SERVICIOS&&(e=a.properties.SERVICIOS);b="<b>"+a.properties.NOMBRE+"</b><br>Horario : "+b+"<br>Servicio : "+e+"<br> lat:"+c.lat+" lng: "+c.lng;b=L.marker(c,{icon:tallerIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}}).addTo(mapa)}
function loadBanios(){geoBanios=L.geoJson(banios,{filter:function(a,c){return a.properties.ACTIVO="Si"},pointToLayer:function(a,c){var b="<b> Tipo: </b>"+a.properties.DESCRIPCIO+"<br>Modelo : "+a.properties.MODELO_BAN+"<br>Cantidad gabinetes: "+Math.trunc(a.properties.CANT_GABIN).toString()+"<br>",b=null!=a.properties.HORARIO_FU?b+"Horario: "+a.properties.HORARIO_FU+"<br>":b+"Horario: -<br>",b=b+"CCZ : "+Math.trunc(a.properties.CCZ).toString(),b=1==a.properties.ACCESIBILI?b+"<br>Accesibilidad: Si":
b+"<br>Accesibilidad: No";null!=a.properties.OBSERVACIO&&(b=b+"<br>Observaciones: "+a.properties.OBSERVACIO);b=L.marker(c,{icon:banioIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}}).addTo(mapa)}
function loadCines(){geoCines=L.geoJson(cultura,{filter:function(a,c){return 0<=a.properties.NOMBRE.toUpperCase().indexOf("CINE")},pointToLayer:function(a,c){var b="<b>"+a.properties.NOMBRE+"</b>";null!=a.properties.DIRECCION&&(b=b+"<br>Direcci\u00f3n: "+a.properties.DIRECCION);b=L.marker(c,{icon:cineIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}}).addTo(mapa)}
function loadTeatros(){geoTeatros=L.geoJson(cultura,{filter:function(a,c){return 0<=a.properties.NOMBRE.toUpperCase().indexOf("TEATRO")||0<=a.properties.NOMBRE.toUpperCase().indexOf("AUDITORIO")},pointToLayer:function(a,c){var b="<b>"+a.properties.NOMBRE+"</b>";null!=a.properties.DIRECCION&&(b=b+"<br>Direcci\u00f3n: "+a.properties.DIRECCION);b=L.marker(c,{icon:teatroIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}})}
function loadEspCulturales(){geoEspCulturales=L.geoJson(cultura,{filter:function(a,c){return 0<=a.properties.NOMBRE.toUpperCase().indexOf("MUSEO")||0<=a.properties.NOMBRE.toUpperCase().indexOf("ESPACIO CULTURAL")},pointToLayer:function(a,c){var b="<b>"+a.properties.NOMBRE+"</b>";null!=a.properties.DIRECCION&&(b=b+"<br>Direcci\u00f3n: "+a.properties.DIRECCION);b=L.marker(c,{icon:museoIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}})}
function distancia(a,c,b){return L.GeometryUtil.distance(mapa,c,b)}
function loadPatrimonio(){function a(a){a=a.target;a.setStyle({weight:4,color:"#F55C2A",dashArray:"",fillOpacity:.7});L.Browser.ie||a.bringToFront()}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoPatrimonio.resetStyle(a.target)}lmarkersPatrimonio=L.layerGroup();var e=0;geoPatrimonio=L.geoJson(patrimonio,{filter:function(a,b){if(50<e)return null;if(null!=latlngmap&&null!=latlngmap.lat&&null!=latlngmap.lng){var c=L.latLng(a.geometry.coordinates[0][0][1],a.geometry.coordinates[0][0][0]);
return 150>=distancia(mapa,latlngmap,c)?(e+=1,a.geometry):null}console.log("sin marcar")},style:function(a){return{weight:4,opacity:.7,color:"#F55C2A",dashArray:"4",fillOpacity:.7,fillColor:"#F56231"}},onEachFeature:function(e,l){if(null!=e.geometry&&"Polygon"===e.geometry.type){var g=l.getBounds().getCenter(),k="";null!=e.properties.NOMBRE&&(k=e.properties.NOMBRE,g=L.marker(g,{icon:patrimonioIcon}).bindPopup(k).addTo(mapa),g.on("click",function(){this.openPopup()}),g.addTo(lmarkersPatrimonio));l.on({mouseover:a,
mouseout:b,click:c})}}})}
function loadEspVerdes(){function a(a){a=a.target;a.setStyle({weight:3,color:"#089E0D",dashArray:"",fillOpacity:.7});L.Browser.ie||a.bringToFront()}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoEspVerdes.resetStyle(a.target)}var e=0;lmarkersVerdes=L.layerGroup();geoEspVerdes=L.geoJson(espacios_libres,{filter:function(a,b){if(50<e)return null;if(null!=latlngmap&&null!=latlngmap.lat&&null!=latlngmap.lng){var c=L.latLng(a.geometry.coordinates[0][0][1],a.geometry.coordinates[0][0][0]);return 150>=
distancia(mapa,latlngmap,c)?(e+=1,a.geometry):null}console.log("sin marcar")},style:function(a){return{weight:3,opacity:.7,color:"#089E0D",dashArray:"4",fillOpacity:.7,fillColor:"#0BD611"}},onEachFeature:function(e,l){if("Polygon"===e.geometry.type){if(null!=e.properties.NOMBRE_ESP){var g=l.getBounds().getCenter(),k="";null!=e.properties.NOM_TIPO_E&&(k=e.properties.NOM_TIPO_E);k=k+"<br><b>"+e.properties.NOMBRE_ESP+"</b>";g=L.marker(g,{icon:bosqueIcon}).bindPopup(k).addTo(mapa);g.on("click",function(){this.openPopup()});
g.addTo(lmarkersVerdes)}l.on({mouseover:a,mouseout:b,click:c})}}})}function loadEstacionesDeServicio(){inflamarkers=L.geoJson(infladores,{pointToLayer:function(a,c){return L.marker(c,{icon:gasIcon}).bindPopup(a.properties.name+"<br>"+a.properties.description).addTo(mapa)}})}function getColor(a){return 1E3<a?"#800026":500<a?"#BD0026":200<a?"#E31A1C":100<a?"#FC4E2A":50<a?"#FD8D3C":20<a?"#FEB24C":10<a?"#FED976":"#FFEDA0"}
function loadCicloVias(){function a(a){a=a.target;a.setStyle({weight:4,color:"#098731",dashArray:"",fillOpacity:.7});L.Browser.ie||a.bringToFront()}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoCV.resetStyle(a.target)}geoCV=L.geoJson(bicicircuitos,{filter:function(a,b){return"Si"==a.properties.ACTIVO&&"Ciclovia"==a.properties.TIPO_BICIC},style:function(a){return{weight:4,opacity:1,color:"#098731",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(e,f){f.on({mouseover:a,
mouseout:b,click:c})}}).addTo(mapa)}
function loadZona30(){function a(a){a=a.target;a.setStyle({weight:4,color:"#F28124",dashArray:"",fillOpacity:.7});L.Browser.ie||a.bringToFront()}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoz30.resetStyle(a.target)}geoz30=L.geoJson(bicicircuitos,{filter:function(a,b){return"Si"==a.properties.ACTIVO&&"Calle 30"==a.properties.TIPO_BICIC},style:function(a){return{weight:4,opacity:1,color:"#F28124",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(e,f){f.on({mouseover:a,
mouseout:b,click:c})}}).addTo(mapa)}function loadBiciSendas(){function a(a){a=a.target;a.setStyle({weight:4,color:"#3410E8",dashArray:"",fillOpacity:.7});L.Browser.ie||a.bringToFront()}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoBS.resetStyle(a.target)}geoBS=L.geoJson(bicicircuitos,{style:function(a){return{weight:4,opacity:1,color:"#3410E8",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(e,f){f.on({mouseover:a,mouseout:b,click:c})}}).addTo(mapa)}
function loadCVPqueRodo(){function a(a){a=a.target;"Point"!==feature.geometry.type&&(a.setStyle({weight:4,color:"#EB1C1C",dashArray:"",fillOpacity:.7}),L.Browser.ie||a.bringToFront())}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoCvPR.resetStyle(a.target)}geoCvPR=L.geoJson(cvpr,{style:function(a){return{weight:4,opacity:1,color:"#EB1C1C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(e,f){f.on({mouseover:a,mouseout:b,click:c})},pointToLayer:function(a,
b){var c=a.properties.descrip;if(1==a.properties.tipo)var g=L.marker(b,{icon:semaforoIcon}).bindPopup(c).addTo(mapa);else 2==a.properties.tipo?(null!=a.properties.imag&&(c=c+"<br><img id='foto' src='"+a.properties.imag+"'/>"),g=L.marker(b,{icon:patrimonioIcon}).bindPopup(c).addTo(mapa)):g=4==a.properties.tipo?L.marker(b,{icon:infoPatIcon}).bindPopup(c).openPopup().addTo(mapa):L.marker(b,{icon:alertaIcon}).bindPopup(c).addTo(mapa);g.on("click",function(){this.openPopup();$("#foto").load(function(){g._popup._updateLayout()})});
return g}}).addTo(mapa);mapa.setView([-34.90353,-56.18975]);popupRM=L.popup().setLatLng([-34.90353,-56.18975]).setContent("<b>Patrimonio cultural - Circuito hist\u00f3rico-urbano</b><br>Duraci\u00f3n aprox. 2hs, distancia aprox. 12km <br> Dificultad intermedia").openOn(mapa)}
function loadPaseoPrado(){function a(a){a=a.target;"Point"!==feature.geometry.type&&(a.setStyle({weight:4,color:"#EB1C1C",dashArray:"",fillOpacity:.7}),L.Browser.ie||a.bringToFront())}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoPaseoPrado.resetStyle(a.target)}geoPaseoPrado=L.geoJson(paseoPrado,{style:function(a){return{weight:4,opacity:1,color:"#EB1C1C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(e,f){f.on({mouseover:a,mouseout:b,click:c})},pointToLayer:function(a,
b){var c=a.properties.descrip;if(1==a.properties.tipo)var g=L.marker(b,{icon:semaforoIcon}).bindPopup(c).addTo(mapa);else 2==a.properties.tipo?(null!=a.properties.imag&&(c=c+"<br><img id='foto' src='"+a.properties.imag+"'/>"),g=L.marker(b,{icon:patrimonioIcon}).bindPopup(c).addTo(mapa)):g=4==a.properties.tipo?L.marker(b,{icon:infoPatIcon}).bindPopup(c).openPopup().addTo(mapa):L.marker(b,{icon:alertaIcon}).bindPopup(c).addTo(mapa);g.on("click",function(){this.openPopup();$("#foto").load(function(){g._popup._updateLayout()})});
return g}}).addTo(mapa);mapa.setView([-34.85315,-56.20807]);popupPR=L.popup().setLatLng([-34.85315,-56.20807]).setContent("<b>Patrimonio cultural - Circuito rom\u00e1ntico</b><br>Duraci\u00f3n aprox. 2hs, distancia aprox. 9km <br> Dificultad intermedia").openOn(mapa)}
function loadPaseoPeniarol(){function a(a){a=a.target;"Point"!==feature.geometry.type&&feature&&(a.setStyle({weight:4,color:"#EB1C1C",dashArray:"",fillOpacity:.7}),L.Browser.ie||a.bringToFront())}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoPaseoPeniarol.resetStyle(a.target)}geoPaseoPeniarol=L.geoJson(paseoPeniarol,{style:function(a){return{weight:4,opacity:1,color:"#EB1C1C",dashArray:"5",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(e,f){f.on({mouseover:a,mouseout:b,
click:c})},pointToLayer:function(a,b){var c=a.properties.descrip;if(1==a.properties.tipo)var g=L.marker(b,{icon:semaforoIcon}).bindPopup(c).addTo(mapa);else 2==a.properties.tipo?(null!=a.properties.imag&&(c=c+"<br><img id='foto' src='"+a.properties.imag+"'/>"),g=L.marker(b,{icon:patrimonioIcon}).bindPopup(c).addTo(mapa)):g=4==a.properties.tipo?L.marker(b,{icon:infoPatIcon}).bindPopup(c).openPopup().addTo(mapa):L.marker(b,{icon:alertaIcon}).bindPopup(c).addTo(mapa);g.on("click",function(){this.openPopup();
$("#foto").load(function(){g._popup._updateLayout()})});return g}}).addTo(mapa);mapa.setView([-34.82451,-56.209014]);popupPN=L.popup().setLatLng([-34.82451,-56.209014]).setContent("<b>Patrimonio cultural - Circuito industrial</b><br>Duraci\u00f3n aprox. 1hr30m, distancia aprox. 3.5km <br> Dificultad baja").openOn(mapa)}
function loadRepechos(){function a(a){a=a.target;"Point"!==feature.geometry.type&&(a.setStyle({weight:4,color:"#E31246",dashArray:"",fillOpacity:.7}),L.Browser.ie||a.bringToFront())}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoRepechos.resetStyle(a.target)}geoRepechos=L.geoJson(repechos,{style:function(a){return{weight:4,opacity:1,color:"#E31246",dashArray:"",fillOpacity:.7,fillColor:"red"}},onEachFeature:function(e,f){f.on({mouseover:a,mouseout:b,click:c})},pointToLayer:function(a,
b){var c=a.properties.popup,c=L.marker(b,{icon:repechoIcon}).bindPopup(c).addTo(mapa);c.on("click",function(){this.openPopup()});return c}}).addTo(mapa)}function loadBicicleterias(){geoBicis=null;geoBicis=L.geoJson(bicicleterias,{pointToLayer:function(a,c){var b=a.properties.Nombre+"<br>"+a.properties.Direc+"<br>Telef: "+a.properties.Telef,b=L.marker(c,{icon:biciIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}})}
function nearest_estacionPM(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closest(mapa,latlngEstaciones,latlngmap);mapa.setView(a,15);addCirculo(a);rutaAB(latlngmap,a)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestInfladores(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,inflamarkers.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestSeccional(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,lmarkersS.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestTalleres(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoTalleres.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestBicicletarios(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoBicicletarios.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestBanios(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoBanios.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestBebederos(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoBebederos.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Debe clickear sobre la regi\u00f3n antes");else alert("Debe clickear sobre la regi\u00f3n antes")}
function nearestCicloVia(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoCV.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}
function nearestBiciSenda(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoBS.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}
function nearestZona30(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoz30.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}
function nearestBicicleteria(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoBicis.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}
function nearestBiciPunto(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closestLayer(mapa,geoBiciPuntos.getLayers(),latlngmap);mapa.setView(a.latlng,15);addCirculo(a.latlng);rutaAB(latlngmap,a.latlng)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}
function nearestBiciAmigo(){if("undefined"!=typeof latlngmap)if(null!=latlngmap.lat&&null!=latlngmap.lng){var a=L.GeometryUtil.closest(mapa,latlngBiciAmigos,latlngmap);mapa.setView(a,15);addCirculo(a);rutaAB(latlngmap,a)}else alert("Click sobre el lugar");else alert("Click sobre el lugar")}
function loadSeccionales(){lmarkersS=null;lmarkersS=L.geoJson(seccionales,{pointToLayer:function(a,c){var b="<b>"+a.properties.Secc+"</b><br>"+a.properties.Dir+"<br>Telef: "+a.properties.Tel,b=L.marker(c,{icon:policeIcon}).bindPopup(b).addTo(mapa);b.on("click",function(){this.openPopup()});return b}}).addTo(mapa)}
function loadFacultades(){lmarkersFacs=L.layerGroup();marker=L.marker([-34.90612,-56.18307],{icon:uniIcon,title:"Fac. Ciencias Sociales"}).bindPopup("<b>Fac. Ciencias Sociales</b><br>Constituyente 1502<br>Reparaci\u00f3n/estacionamiento para estudiantes/funcionarios");lmarkersFacs.addLayer(marker);marker=L.marker([-34.90246,-56.17668],{icon:uniIcon,title:"Fac. de Derecho"}).bindPopup("<b>Fac. de Derecho</b><br>18 de Julio 1824 <br>Estacionamiento para estudiantes/funcionarios");lmarkersFacs.addLayer(marker);
marker=L.marker([-34.91236,-56.17432],{icon:uniIcon,title:"Fac. Ccias Econ\u00f3micas"}).bindPopup("<b>Fac. de Ciencias Econ\u00f3micas</b><br>Gonzalo Ramirez 1926<br>Estacionamiento para estudiantes/funcionarios");lmarkersFacs.addLayer(marker);marker=L.marker([-34.91815,-56.16685],{icon:uniIcon,title:"Fac. de Ingenier\u00eda"}).bindPopup("<b>Fac. de Ingenier\u00eda</b><br>Av. Julio Herrera y Reissig 565<br>Reparaci\u00f3n ligera, estacionamiento vigilado y vestuario - todo p\u00fablico");lmarkersFacs.addLayer(marker);
marker=L.marker([-34.90969,-56.16417],{icon:uniIcon,title:"Fac. de Arquitectura"}).bindPopup("<b>Fac. de Arquitectura</b><br>Bulevar General Artigas 1031<br>Estacionamiento para estudiantes/funcionarios");lmarkersFacs.addLayer(marker);marker=L.marker([-34.9025914,-56.1799721],{icon:uniIcon,title:"Fac. de Humanidades"}).bindPopup("<b>Fac. de Humanidades</b><br>Magallanes 1577<br>Reparaci\u00f3n ligera y estacionamiento para estudiantes/funcionarios ");lmarkersFacs.addLayer(marker);marker=L.marker([-34.899897,
-56.178825],{icon:uniIcon,title:"Fac. de Psicolog\u00eda"}).bindPopup("<b>Fac. de Psicolog\u00eda</b><br>Trist\u00e1n Narvaja 1674<br>Reparaci\u00f3n ligera y estacionamiento para estudiantes/funcionarios");marker=L.marker([-34.90286,-56.17807],{icon:uniIcon,title:"Fac. de Artes"}).bindPopup("<b>Fac. de Artes</b><br>18 de Julio 1772<br>Estacionamiento para estudiantes/funcionarios");lmarkersFacs.addLayer(marker);lmarkersFacs.addTo(mapa)}
function loadPendientes(){function a(a){a=a.target;a.setStyle({weight:4,color:"#E31246",dashArray:"",fillOpacity:.7});L.Browser.ie||a.bringToFront()}function c(a){mapa.fitBounds(a.target.getBounds())}function b(a){geoPendientes.resetStyle(a.target)}geoPendientes=L.geoJson(ejes,{style:function(a){return{weight:4,opacity:1,color:"#E31246",dashArray:"5",fillOpacity:.7,fillColor:"blue"}},onEachFeature:function(e,f){f.on({mouseover:a,mouseout:b,click:c})}}).addTo(mapa)}
function loadDatosIniciales(){socket=io();socket.on("biciamigos",function(a){biciamigos=jQuery.parseJSON(a)});socket.on("infladores",function(a){infladores=jQuery.parseJSON(a)});socket.on("bicipuntos",function(a){bicipuntos=jQuery.parseJSON(a)});socket.on("bicicleterias",function(a){bicicleterias=jQuery.parseJSON(a)});socket.on("repechos",function(a){repechos=jQuery.parseJSON(a)});socket.on("seccionales",function(a){seccionales=jQuery.parseJSON(a)});socket.on("talleres",function(a){talleres=jQuery.parseJSON(a)});
socket.on("paseoRambla",function(a){cvpr=jQuery.parseJSON(a)});socket.on("paseoPeniarol",function(a){paseoPeniarol=jQuery.parseJSON(a)});socket.on("paseoPrado",function(a){paseoPrado=jQuery.parseJSON(a)});socket.on("error",function(){$("#aviso").html("<p>Servidor fuera de servicio. Reintente luego</p>")})};