var paradas_ant = []; // almacena las paradas anteriores

var markersArray = [];  //guarda los markers estaciones plan movete
var markersArrayAnt = [];  //guarda los markers

var lmarkersVerdes = null; //layer de markers
var lmarkersPatrimonio = null;

var NV = -10;  //valor no válido utilizado para inicialización

var idPM = -1; // identificador del timer para actualizar estaciones PM


var latlngEstaciones = [];  //latlng estaciones de Plan Movete

var latlngBiciAmigos = [];

var lmarkersFacs = null; // latlng de locales con estacionamiento para bicis

var lmarkesS =  null;
var markerSugeridos = null;

var markerGeoLoc = null; // da la geolocalización
var circulo = null;
var popup = null;

var popupPN = null; // Peñarol
var popupPR = null;  // Prado
var popupRM = null;  // Rambla y Ciudad Vieja
var popupBIC = null; //HUD que muestra bicisenda, ciclovías y z30

// geojson de puntos de interés
var geoBS = null;
var geoCV = null;
var geoz30 = null;
var geoBicis = null;
var geoBiciAmigos = null;
var inflamarkers = null;
var geoBiciPuntos = null;
var lmarkersS = null;
var lmarkersE = null;
var geoBebederos = null;
var geoBicicletarios = null;
var geoTalleres = null;
var geoBanios = null;

// geojson de paseos turísticos
var geoCvPR = null;
var geoPaseoPrado = null;
var geoPaseoPeniarol = null;
var geoCines = null;
var geoTeatros = null;
var geoEspCulturales = null;
var geoPatrimonio = null;
var geoEspVerdes = null;

//pendientes
var geoRepechos = null;

var markersInf = null;
var layerParking = null;
 

markersLayerP = [];


var fn_actual = null;
var fn_ant = null;

// marcadores de inf de patrimonio


var CV1 = [L.latLng(-34.90554,-56.21065),L.latLng(-34.90269,-56.20193),L.latLng(-34.90837,-56.20122),L.latLng(-34.91109,-56.21122)];
var CV2 = [L.latLng(-34.90304,-56.17679),L.latLng(-34.90608,-56.17522)];
var CV3 = [L.latLng(-34.91078,-56.1664),L.latLng(-34.91029,-56.1646),L.latLng(-34.91894,-56.16614)];
var CV4 = [L.latLng(-34.91933,-56.17183),L.latLng(-34.9288,-56.16172)];
var CV5 = [L.latLng(-34.92165,-56.14988),L.latLng(-34.92904,-56.16078)];

//conexion

var biciamigos = null;
var infladores = null;
var bicipuntos = null;
var bicicleterias = null;
var repechos = null;
var seccionales = null;
var talleres = null;
var cvpr = null;
var paseoPeniarol = null;
var paseoPrado = null;
paradas = [];


var estaciones = [

['01 - Teatro Solís - Liniers y Reconquista','-34.907822','-56.200436',3,NV,
'Oficina de Atención Movete',NV,20,NV],
['02 - Templo Inglés - Reconquista y Treinta Tres','-34.909481','-56.204361',4,NV,
'Oficina de Atención Movete',NV,20,NV],
['03 - Reconquista y Pérez Castellanos','-34.910782','-56.209106',5,NV,
'Oficina de Atención Movete',NV,20,NV],
['04 - Hospital Maciel - Guaraní y Washington','-34.908863','-56.212181',6,NV,
'Oficina de Atención Movete',NV,16,NV],
['05 - Mercado del Puerto - Piedras y Pérez Castellanos','-34.906021','-56.211327',7,NV,
'Oficina de Atención Movete',NV,20,NV],
['08 - Plaza Matriz - Juan Carlos Gómez y Rincón','-34.906101','-56.203266',8,NV,
'Oficina de Atención Movete',NV,20,NV],
['07 - Terminal Ciudadela Norte - Piedras y Juncal','-34.902901','-56.202896',9,NV,
'Oficina de Atención Movete',NV,20,NV],
['06 - Banco de la República - Zabala y Piedras','-34.905022','-56.208302',NV,1,
'Oficina de Atención Movete',NV,16,NV],
['Oficina de Atención Movete','-34.9067246','-56.2108961',0,-1,'Montevideo',0,0,'1']
    ];  

var biciIcon = L.icon({
    iconUrl: 'imagenes/bike.png',    
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [25,41], // size of the icon    
    iconAnchor:   [13,41], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
        
});      

var parkIcon = L.icon({
    iconUrl: 'imagenes/lovebike.png',    

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});  

var bpIcon = L.icon({
    iconUrl: 'imagenes/bp.png',    
   

    iconSize:     [22,32], // size of the icon    
    iconAnchor:   [10,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
     
});      


var policeIcon = L.icon({
    iconUrl: 'imagenes/policeman.png',
 
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
  
}); 

var gasIcon = L.icon({
    iconUrl: 'imagenes/gasstation.png',
   
    iconSize:     [32,37], // size of the icon    
    iconAnchor:   [20,37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
           
});  

var emptyIcon = L.icon({
    iconUrl: 'imagenes/bikeiconempty.png',   

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
       
});

var fullIcon = L.icon({
    iconUrl: 'imagenes/bikeiconfull.png',
   
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
       
});

var normalIcon = L.icon({
    iconUrl: 'imagenes/bikeiconsemi.png',
   
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
        
});

var brokenIcon = L.icon({
    iconUrl: 'imagenes/bikeiconbreak.png',
  

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
       
});

var officeIcon = L.icon({
    iconUrl: 'imagenes/iconoffice.png',
 

    iconSize:     [20,34], // size of the icon    
    iconAnchor:   [8,34], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
        
});

var uniIcon = L.icon({
    iconUrl: 'imagenes/uni2.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
        
});

var cafeIcon = L.icon({
    iconUrl: 'imagenes/cafe2.png',    
   
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
       
});      
var semaforoIcon = L.icon({
    iconUrl: 'imagenes/semaforo2.png',    
  
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
        
});      

var alertaIcon = L.icon({
    iconUrl: 'imagenes/alerta.png',    
   
    iconSize:     [38,19], // size of the icon    
    iconAnchor:   [26,19], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
        
});   

var patrimonioIcon = L.icon({
    iconUrl: 'imagenes/patrimonio.png',    

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
});  

var tallerIcon = L.icon({
    iconUrl: 'imagenes/tallerIcon.png',    

    iconSize:     [20,30], // size of the icon    
    iconAnchor:   [8,30], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
     
});      

var banioIcon = L.icon({
    iconUrl: 'imagenes/bathroom.png',    
 
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
  
});      

var cineIcon = L.icon({
    iconUrl: 'imagenes/cine24.png',    
   
    iconSize:     [24,24], // size of the icon    
    iconAnchor:   [12,24], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
      
});      

var teatroIcon = L.icon({
    iconUrl: 'imagenes/teatro24.png',    
    
    iconSize:     [24,24], // size of the icon    
    iconAnchor:   [20,24], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
      
});      

var museoIcon = L.icon({
    iconUrl: 'imagenes/museo32.png',    
   
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
  
});      

var bebederoIcon = L.icon({
    iconUrl: 'imagenes/drink_24.png',    
 
    iconSize:     [24,24], // size of the icon    
    iconAnchor:   [12,24], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
    
       
});      
var bosqueIcon = L.icon({
    iconUrl: 'imagenes/bosque32.png',    
   
    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
     
});      

var repechoIcon = L.icon({
    iconUrl: 'imagenes/pendiente.png',    
   
    iconSize:     [32,37], // size of the icon    
    iconAnchor:   [20,37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
      
});      

var bicicletarioIcon = L.icon({
    iconUrl: 'imagenes/bicicletario.png',    
   
    iconSize:     [32,37], // size of the icon    
    iconAnchor:   [20,37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
       
});      

var infoPatIcon = L.icon({
    iconUrl: 'imagenes/info_blue3_32.png',    
  

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18] // point from which the popup should open relative to the iconAnchor    
        
});      


var d = new Date();
var h = d.getHours();


function addCirculo(__latlng){

				if (circulo != null)
				{						
					mapa.removeLayer(circulo);
					circulo = null;
 			    }				

				circulo = L.circle(__latlng, 220, {  //antes 400    		
    			color: '#347EFD', //#3463FD',
    			weight: 3,
    			fillColor: '#99CCFF',
    			fillOpacity: 0.5
				}).addTo(mapa);		   
}

function displayLayer(a)
{
	mapa.addLayer(a)
}

function deleteLayer(a)
{
	if (a != null)
		mapa.removeLayer(a)
}

function cargarEstaciones()
{	
	lmarkersE = L.layerGroup(); //layer estaciones Plan Movetelmarkers 
	markersArray = [];
	markersArrayAnt = [];
	
	markerObj = null;
	var desc = '';

	var lat = 0;
	var lng = 0;

	for (var i = 0; i < estaciones.length; i++) {
		estacion = estaciones[i];

		lat = parseFloat(estacion[1]);
		lng = parseFloat(estacion[2]);

		if (i == (estaciones.length - 1))
		{		

			desc = "<b><centre>" + estacion[0] + "</centre></b>" + "<br>" +
					"Pérez Castellano 1492 esquina Cerrito" + "<br>" +
					"Lunes a Viernes: 9:00 a 18:00 hs.  Sábados: 10:00 a 14:00 hs";	
			marker = L.marker([lat,lng], {icon: officeIcon, title: "Oficina Plan Movete" }).bindPopup(desc);			
		}
		else
		{
			desc = "<b><centre>" + estacion[0] + "</centre></b>";
			marker = L.marker([lat,lng], {icon: normalIcon, title: "Estación Plan Movete" }).bindPopup(desc);			
				
						
		}

		latlngEstaciones.push(marker.getLatLng());

		

		marker.on('click', function (e) {
			this.openPopup();  
		});	
    
		markerObj = {_marker: marker,
					content: desc};				
		markersArray.push(markerObj);	//copiar obj porque se borran al remover layer 

		var markerObjCopia = $.extend( {}, markerObj);
		

		markersArrayAnt.push(markerObjCopia);	// Agregado nuevo												
		lmarkersE.addLayer(marker);	
	};
	lmarkersE.addTo(mapa);	
	paradas_ant = estaciones.slice();
	
};


function actualizarMapa()
{	       
	socket.on('paradas',function (data) {   
						paradas2 = [];
						paradas = [];
                        paradas2 = data;                                                
                        JSON.parse('['+paradas2.split("'").join('"')+']').forEach(function(paradas3){paradas.push(paradas3)});                                                                                            
    					actualizoMarkers(paradas);

  	});
    //actualizoMarkers(paradas);
    

  	socket.on('error',function () {	
  		$( "#aviso" ).html( "<p>Servidor fuera de servicio. Reintente luego</p>" );			
  					});


};


function obtenerDatos(timems)
{	
    actualizo = false; 

	var fecha = new Date();
    var h = fecha.getHours();
	if ((h < 21) && (h >= 7))
	{
    
       socket = io();
       actualizarMapa();     
    }
    else  //Fuera de servicio
    {
			for (var i = 0; i < estaciones.length; i++) {
				estacion = estaciones[i];

				markerObj = markersArray[i];
				if (i == (estaciones.length - 1))
				{       

					desc = "<b><centre>" + estacion[0] + "</centre></b>" + "<br>" +
							"Pérez Castellano 1492 esquina Cerrito" + "<br>" +
							"Lunes a Viernes: 9:00 a 18:00 hs.  Sábados: 10:00 a 14:00 hs"  
					markerObj._marker.setIcon(officeIcon);      

				}
				else
				{
					desc = "<b><centre>" + estacion[0] + "</centre></b>" + "<br>" + 
					"<centre>" + "FUERA DE SERVICIO" + "</centre>";
					markerObj._marker.setIcon(brokenIcon);                          
				}
				markerObj._marker.setPopupContent(desc);   
			}
			actualizo = true;
					
	} 
	if (actualizo == true)
	{ 
                               
		var markerObjCopia = $.extend( {}, markerObj);          
		markersArrayAnt[i] = markerObjCopia;                               
	} 
	else
	{
		markerObj = markersArrayAnt[i];
						
	}
}

function actualizoMarkers(_paradas)
{			
       
	var markerObj = null;
	var desc = '';
	var actualizo = false;
	var parada = [];
	var paradant = [];
    

  if (_paradas == null)
    {     
      $( "#aviso" ).html( "<p>Los datos de las estaciones no están actualizados</p>" );
      return;
   }
   else
   {  
    $( "#aviso" ).html( "" );  
    if (_paradas.length == 0)
    {       
        $( "#aviso" ).html( "<p>No hay datos de las estaciones</p>" );
        //return;
    }
   } 
        


     if (_paradas == null)
    {     
      $( "#aviso" ).html( "<p>Los datos de las estaciones no están actualizados</p>" );

   }
   else
   {  
    $( "#aviso" ).html( "" );  
    if (_paradas.length == 0)
    {       
        $( "#aviso" ).html( "<p>No hay datos de las estaciones</p>" );
        return;
    }
   } 
    paradas = _paradas[0]; 
   
	for (var i = 0; i < paradas.length; i++)
	{							    
            
            parada = [];
			parada = paradas[i];        
			
			markerObj = markersArray[i];
        
		if (parada[4] != 6)	// es una estación válida		
		{		
			
			if (parada[4] == -1)//&& (paradant[4] != -1))	
			{                
				desc = "<b><center>" + parada[0] + "</center></b>" + "<br>" +
				"Calle Alzáibar 1321 - Lunes a Viernes: 9:00 a 18:00 h." + "<br>" + 
				"Sábados: De 10:00 a 14:00 h";	
				markerObj._marker.setIcon(officeIcon);																		
				markerObj._marker.setPopupContent(desc);

				actualizo = true;				
				
			}
			else
				            
				if ((parada[4] == 4) || (parada[4] == 5) || (parada[8] == "0")) //&& (parada[4] != paradant[4]))
			    {
                    
						markerObj._marker.setIcon(brokenIcon);						
						desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" +
						"FUERA DE SERVICIO";															    
				    	markerObj._marker.setPopupContent(desc);	
				    	actualizo = true;
				    
				}
				 
						
				else					    
                {                   
					if (((parada[6] == parada[7]) && (parada[7] != 0))) //&& (parada[6] != paradant[6]))
					{                        
						markerObj._marker.setIcon(fullIcon);								
						desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" + "Estación llena";														
				    	markerObj._marker.setPopupContent(desc);
				    	
				    	actualizo = true;
				    	
					}	
					else	
						if ((parada[6] == 0)) //&& (parada[6] != paradant[6]))
						{
                            
							markerObj._marker.setIcon(emptyIcon);								
							desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" +
								"Estación vacía";																	
							markerObj._marker.setPopupContent(desc);

							actualizo = true;
							
						}	
						else
						{
                            
							//if (parada[6] != paradant[6])
							{
								markerObj._marker.setIcon(normalIcon);								
								var disponibles = (parada[6]).toString();
							
								_cantHuecos = (parada[7]-parada[6]);
								
								cantHuecos = _cantHuecos.toString();
								desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" +
								"Disponibles: " + disponibles + "    Huecos libres: " + cantHuecos;
								
							
								markerObj._marker.setPopupContent(desc);

								actualizo = true;						

							}	
												
						}
			}	
						
			
		 } // if estación valida	
		}	 //for	 
	  

      if (actualizo == true)
	  {	
								
			var markerObjCopia = $.extend( {}, markerObj);			
			markersArrayAnt[i] = markerObjCopia;
								
	  }	
	  else
	  {
		markerObj = markersArrayAnt[i];
				
	  }
	  paradas_ant = paradas.slice();
	//}  	
};	




function loadBiciAmigos()
{
	var coords = [];	
	geoBiciAmigos = L.geoJson(biciamigos, {
		pointToLayer: function(feature, latlng) {	
			
 			var desc = feature.properties.Nombre + "<br>" + feature.properties.Direc + " " +
 				"<br>" + feature.properties.Desc + "  " + feature.properties.Telef;
        	var marker = L.marker(latlng, { icon: parkIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 					
			latlngBiciAmigos.push(L.latLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]));
    		
    		return marker;
    	}	
	});	
	
	//}).addTo(mapa);		

};


function loadBiciPuntos()
{
	var coords = [];	
	geoBiciPuntos = L.geoJson(bicipuntos, {
		pointToLayer: function(feature, latlng) {	
			
 			var desc = "<b>" + feature.properties.Nombre + "</b>" + "<br>" + feature.properties.Direc + " " +
 				"<br>" + feature.properties.Desc +  "<br>" + feature.properties.Telef + " " +
 				"Horario :" + " " + feature.properties.Horario;
        	var marker = L.marker(latlng, { icon: bpIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 					
			
    		return marker;
    	}	
	//});	
	}).addTo(mapa);		
	
};


function loadBicicletarios()
{
	var coords = [];	
	geoBicicletarios = L.geoJson(bicicletarios, {
		filter: function(feature, layer) {
        	return feature.properties.ACTIVO = "Si";
    	},
		pointToLayer: function(feature, latlng) {				

 			var desc = "<b>" + feature.properties.NOMBRE_UBI + "</b>" + "<br>" + 
 			"Ubicación : " + feature.properties.UBIC_BICIC + "<br>" + 
			"Cantidad de módulos : " + Math.trunc(feature.properties.CANTIDAD).toString();             
			
			if (feature.properties.OBSERVACIO != null)
			{					
				desc = desc + "<br> Obervaciones: " + feature.properties.OBSERVACIO;
			}	
					
        	var marker = L.marker(latlng, { icon: bicicletarioIcon}).bindPopup(desc).addTo(mapa);        
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 								
    		return marker;
    	}	
	//});	
	}).addTo(mapa);		
	
};

function loadBebederos()
{
	var coords = [];	
	geoBebederos = L.geoJson(bebederos, {		
		filter: function(feature, layer) {
        	return feature.properties.ACTIVO = "Si";
    	},
		pointToLayer: function(feature, latlng) {	
			
 			var desc = "<b>" + feature.properties.DESCRIPCIO + "</b><br>" +  			
 			"Tipo : " + feature.properties.MODELO_BEB + "<br>" + 
			"CCZ : " + Math.trunc(feature.properties.CCZ).toString(); 			
        	var marker = L.marker(latlng, { icon: bebederoIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 							
    		return marker;
    	}	
	//});	
	}).addTo(mapa);		
	
};

function loadTalleres()
{
	var coords = [];	
	geoTalleres = L.geoJson(talleres, {
		filter: function(feature, layer) {
        	return feature.properties.ACTIVO = "Si";
    	},
		pointToLayer: function(feature, latlng) {	
			
			var horarios = 'Sin especificar';
			var servicios = 'Sin especificar';

			if (feature.properties.HORARIOS != null)
				horarios = feature.properties.HORARIOS;
            
			if (feature.properties.SERVICIOS != null)
				servicios = feature.properties.SERVICIOS;
            

 			var desc = "<b>" + feature.properties.NOMBRE + "</b>" + "<br>" +             
 			"Horario : " + horarios + "<br>" +  "Servicio : " + servicios + 
            "<br> lat:" + latlng.lat + " lng: " + latlng.lng;
        	var marker = L.marker(latlng, { icon: tallerIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 							
    		return marker;
    	}	
	//});	
	}).addTo(mapa);		
	
};




function loadBanios()
{
	var coords = [];	
	geoBanios = L.geoJson(banios, {
		filter: function(feature, layer) {
        	return feature.properties.ACTIVO = "Si";
    	},
		pointToLayer: function(feature, latlng) {	
			
 			var desc = "<b> Tipo: </b>" + feature.properties.DESCRIPCIO + "<br>" + 
 			"Modelo : " + feature.properties.MODELO_BAN + "<br>" + 
 			"Cantidad gabinetes: " + Math.trunc(feature.properties.CANT_GABIN).toString() + "<br>";
            if (feature.properties.HORARIO_FU != null)
                desc = desc + "Horario: " + feature.properties.HORARIO_FU + "<br>";
            else
                desc = desc + "Horario: -" + "<br>";                  			
 			
 			desc = desc + "CCZ : " + Math.trunc(feature.properties.CCZ).toString();

 			if (feature.properties.ACCESIBILI == 1.00)
 				desc = desc + "<br>" + "Accesibilidad: Si";
 			else
 				desc = desc + "<br>" + "Accesibilidad: No";
 			if (feature.properties.OBSERVACIO != null)
 				desc = desc + "<br>" + "Observaciones: " + feature.properties.OBSERVACIO;

 				
        	var marker = L.marker(latlng, { icon: banioIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 							
    		return marker;
    	}	
	//});	
	}).addTo(mapa);		
	
};


// Espacios culturales

// Cines
function loadCines()
{
	var coords = [];	
	geoCines = L.geoJson(cultura, {
		filter: function(feature, layer) {
        	return (feature.properties.NOMBRE.toUpperCase().indexOf("CINE") >= 0);
    	},
		pointToLayer: function(feature, latlng) {	
			
 			var desc = "<b>"+ feature.properties.NOMBRE + "</b>";
 			if (feature.properties.DIRECCION != null)
 				desc = desc + "<br>Dirección: " + feature.properties.DIRECCION; 	
 			
        	var marker = L.marker(latlng, { icon: cineIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 								
    		return marker;
    	}	
	//});	
	}).addTo(mapa);		
	
};


// Teatros y Auditorios
function loadTeatros()
{
	var coords = [];	
	geoTeatros = L.geoJson(cultura, {
		filter: function(feature, layer) {
        	return ((feature.properties.NOMBRE.toUpperCase().indexOf("TEATRO")) >= 0 || (feature.properties.NOMBRE.toUpperCase().indexOf("AUDITORIO") >= 0));
    	},
		pointToLayer: function(feature, latlng) {	
			
 			var desc = "<b>" + feature.properties.NOMBRE +  "</b>";
 			if (feature.properties.DIRECCION != null)
 				desc = desc + "<br>Dirección: " + feature.properties.DIRECCION;
 			
        	var marker = L.marker(latlng, { icon: teatroIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 							
    		return marker;
    	}	
	});	
	//}).addTo(mapa);		
	
};

// Espacios culturales
function loadEspCulturales()
{
	var coords = [];	
	geoEspCulturales = L.geoJson(cultura, {
		filter: function(feature, layer) {
        	return ((feature.properties.NOMBRE.toUpperCase().indexOf("MUSEO")) >= 0 || (feature.properties.NOMBRE.toUpperCase().indexOf("ESPACIO CULTURAL") >= 0));
    	},
		pointToLayer: function(feature, latlng) {	
			
 			var desc = "<b>" + feature.properties.NOMBRE + "</b>";
 			if (feature.properties.DIRECCION != null)
 				desc = desc + "<br>Dirección: " + feature.properties.DIRECCION; 	
 			
        	var marker = L.marker(latlng, { icon: museoIcon}).bindPopup(desc).addTo(mapa);
			
			marker.on('click', function() {
					this.openPopup();			
    		});	   
    		 							
    		return marker;
    	}	
	});	
	//}).addTo(mapa);		
	
};

function distancia(map,latlng1, latlng2)
{
    
    var d = L.GeometryUtil.distance(mapa,latlng1 ,latlng2);
    return d;    

}


function loadPatrimonio()
{        
    lmarkersPatrimonio = L.layerGroup();

    var cant_max = 50;
    var i = 0;

    function style(feature) {
            return {
                weight: 4,
                opacity: 0.7,
                color: '#F55C2A',
                dashArray: '4',
                fillOpacity: 0.7,
                fillColor: '#F56231'
               
            }
        }
        

    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
        weight: 4,
        color: '#F55C2A',
        dashArray: '',
        fillOpacity: 0.7
    })
    if (!L.Browser.ie) {
        layer.bringToFront();
    }
    
   }    
        
    function zoomToFeature(e) {
        mapa.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {    

        if ((feature.geometry != null) && (feature.geometry.type === "Polygon"))
        {
                var bounds = layer.getBounds();
                // Get center of bounds
                var center = bounds.getCenter();  
                var desc = '';
                if (feature.properties.NOMBRE != null)
                {
                    desc = feature.properties.NOMBRE;
                    
                    var marker = L.marker(center, { icon: patrimonioIcon}).bindPopup(desc).addTo(mapa);
        
                    marker.on('click', function() {
                          this.openPopup();           
                    });    
                
                    marker.addTo(lmarkersPatrimonio);
                }   
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight,
                    click: zoomToFeature
                })                
        }        
           
    }    

    function resetHighlight(e) {
        
        geoPatrimonio.resetStyle(e.target);
                
    }       

    geoPatrimonio = L.geoJson(patrimonio, {
            filter: function(feature, layer) {                
        
               if (i > cant_max)  
                   return null;
               if (latlngmap != null && latlngmap.lat != null && latlngmap.lng != null)                  
               { 
                var latlngPolygon = L.latLng(feature.geometry.coordinates[0][0][1], feature.geometry.coordinates[0][0][0]);               
                if (distancia(mapa, latlngmap,latlngPolygon ) <= 150)                   
                {                
                    i = i + 1;
                        return feature.geometry;                
                    }
                else
                    return null;    
              }
              else
                console.log("sin marcar");
            },
            style: style,
            onEachFeature: onEachFeature
       });       
    
  }   
      

// Espacios Verdes
function loadEspVerdes()
{    
    var cant_max = 50;
    var i = 0;

    lmarkersVerdes = L.layerGroup();
    function style(feature) {
            return {
                weight: 3,
                opacity: 0.7,
                color: '#089E0D',
                dashArray: '4',
                fillOpacity: 0.7,
                fillColor: '#0BD611'
                //getColor(feature.properties.density)
            }
        }
        
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
        weight: 3,
        color: '#089E0D',
        dashArray: '',
        fillOpacity: 0.7
    })
    if (!L.Browser.ie) {
        layer.bringToFront();
    }
    
   }    
        
    function zoomToFeature(e) {
        mapa.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {    
   
        if (feature.geometry.type === "Polygon") 
        {
                        
            
            if (feature.properties.NOMBRE_ESP != null)          
            {
                // // Get bounds of polygon
                var bounds = layer.getBounds();
                // Get center of bounds
                var center = bounds.getCenter();  
                
                var desc = '';
                if (feature.properties.NOM_TIPO_E != null)
                    desc = feature.properties.NOM_TIPO_E;
                desc = desc + "<br><b>" + feature.properties.NOMBRE_ESP + "</b>";
                
                var marker = L.marker(center, { icon: bosqueIcon}).bindPopup(desc).addTo(mapa);
        
                marker.on('click', function() {
                      this.openPopup();           
                });    

                marker.addTo(lmarkersVerdes);
            }
            

            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            })    
        }   
    }    

    function resetHighlight(e) {
      
        geoEspVerdes.resetStyle(e.target);
                
    }       

    geoEspVerdes = L.geoJson(espacios_libres, {
            //Comentado por ahora
               filter: function(feature, layer) {                        
               if (i > cant_max)  
                   return null;
               if (latlngmap != null && latlngmap.lat != null && latlngmap.lng != null)                  
               { 
                var latlngPolygon = L.latLng(feature.geometry.coordinates[0][0][1], feature.geometry.coordinates[0][0][0]);               
                if (distancia(mapa, latlngmap,latlngPolygon ) <= 150)                   
                {                
                    i = i + 1;
                        return feature.geometry;                
                    }
                else
                {                    
                    return null;    
                }
              }
              else
                console.log("sin marcar");
            },
            style: style,
            onEachFeature: onEachFeature
       });       
   
  }           



// Fin Espacios culturales


function loadEstacionesDeServicio()
{	
	
	//ANTES var markers en lugar de markersInf
//
	//markersInf = L.markerClusterGroup({showCoverageOnHover:false});
	inflamarkers = L.geoJson(infladores, {
		pointToLayer: function(feature, latlng) {
			var marker = L.marker(latlng, {icon:gasIcon}).bindPopup(feature.properties.name + "<br>" + feature.properties.description).addTo(mapa);
			
			return marker;
		}
	});	
		
};

function getColor(d) { //en función de una propiedad
			return d > 1000 ? '#800026' :
			       d > 500  ? '#BD0026' :
			       d > 200  ? '#E31A1C' :
			       d > 100  ? '#FC4E2A' :
			       d > 50   ? '#FD8D3C' :
			       d > 20   ? '#FEB24C' :
			       d > 10   ? '#FED976' :
			                  '#FFEDA0';
		}		


// // la nueva

function loadCicloVias()
{
        
        var geojson = null;

        function style(feature) {
            return {
                weight: 4,
                opacity: 1,
                color: '#098731',  //#E31246 antes
                dashArray: '5',
                fillOpacity: 0.7,
                fillColor: 'blue'
                //getColor(feature.properties.density)
            }
        }
        

    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
        weight: 4,
        color: '#098731',
        dashArray: '',
        fillOpacity: 0.7
    })
    if (!L.Browser.ie) {
        layer.bringToFront();
    }
    
   };   
        
function zoomToFeature(e) {
    mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    })
}   

function resetHighlight(e) {
    //geojson.resetStyle(e.target);
    geoCV.resetStyle(e.target);
            
}
        //geojson
        geoCV = L.geoJson(bicicircuitos, {
            filter: function(feature, layer) {
               return (feature.properties.ACTIVO == "Si" && feature.properties.TIPO_BICIC == "Ciclovia");
            },
            style: style,
            onEachFeature: onEachFeature
        }).addTo(mapa);
};




//// 
function loadZona30()
{
        
        var geojson = null;

        function style(feature) {
            return {
                weight: 4,
                opacity: 1,
                color: '#F28124', //antes FF9C00
                dashArray: '5',
                fillOpacity: 0.7,
                fillColor: 'blue'
               
            }
        }
        

    function highlightFeature(e) {
        var layer = e.target;
        
        layer.setStyle({
        weight: 4,
        color: '#F28124',
        dashArray: '',
        fillOpacity: 0.7
    })

    if (!L.Browser.ie) {
        layer.bringToFront();
    }
    
   };   
        
function zoomToFeature(e) {
    mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    })
}   

function resetHighlight(e) {
  
    geoz30.resetStyle(e.target);
            
}
       
        geoz30 = L.geoJson(bicicircuitos, {
            filter: function(feature, layer) {
               return (feature.properties.ACTIVO == "Si" && feature.properties.TIPO_BICIC == "Calle 30");
            },
            style: style,
            onEachFeature: onEachFeature
        }).addTo(mapa);
};



function loadBiciSendas()
{
              

        function style(feature) {
            return {
                weight: 4,
                opacity: 1,
                color: '#3410E8',
                dashArray: '5',
                fillOpacity: 0.7,
                fillColor: 'blue'
                //getColor(feature.properties.density)
            }
        }
        

    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
        weight: 4,
        color: '#3410E8',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie) {
        layer.bringToFront();
    }
    
}   
        
function zoomToFeature(e) {
    mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {    
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    })    
}   



function resetHighlight(e) {   
    geoBS.resetStyle(e.target);
            
}
        
        geoBS = L.geoJson(bicicircuitos, {
           
            style: style,
            onEachFeature: onEachFeature

        }).addTo(mapa);                         
          
};

// load paseos turísticos

function loadCVPqueRodo()
{
	function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: '#EB1C1C',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'red'
				
			}
		}
		

	function highlightFeature(e) {
		var layer = e.target;
        
        if (feature.geometry.type !== 'Point')        
        {                    
        		layer.setStyle({
        		weight: 4,
        		color: '#EB1C1C',
        		dashArray: '',
        		fillOpacity: 0.7
        	})
        	if (!L.Browser.ie) {
        		layer.bringToFront();
        	}
	    }   
   }	
		
	function zoomToFeature(e) {
		mapa.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {	
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
	    	click: zoomToFeature
	    })    
	}	



	function resetHighlight(e) {		
		geoCvPR.resetStyle(e.target);
				
	}	
		
		geoCvPR = L.geoJson(cvpr, {
			style: style,
			onEachFeature: onEachFeature,
			pointToLayer: function(feature, latlng) {	
				
	 			var desc = feature.properties.descrip;

                if (feature.properties.tipo == 1)                
                    var marker = L.marker(latlng, { icon: semaforoIcon}).bindPopup(desc).addTo(mapa);                            
                else
                {                    
                    if (feature.properties.tipo == 2) 
                    {                        
                        if (feature.properties.imag != null)                        
                          desc = desc + "<br><img id='foto' src=" + "'" + feature.properties.imag + "'" + "/>";                             
                           
                        var marker = L.marker(latlng, { icon: patrimonioIcon}).bindPopup(desc).addTo(mapa);                                            

                    }    
                    else {
                        if (feature.properties.tipo == 4)
                        {
                            var marker = L.marker(latlng, { icon: infoPatIcon}).bindPopup(desc).openPopup().addTo(mapa);                            
                        } 
                        else                    
                            var marker = L.marker(latlng, { icon: alertaIcon}).bindPopup(desc).addTo(mapa);
                    }
                }

                marker.on('click', function() {
                    this.openPopup();           
                    $('#foto').load(function() {    
                         marker._popup._updateLayout();
                    });
                 });       
                                                                
                return marker;
	    	}	
		}).addTo(mapa);	
         
        mapa.setView([-34.90353,-56.18975]);
        popupRM = L.popup()
              .setLatLng([-34.90353,-56.18975])
              .setContent('<b>Patrimonio cultural - Circuito histórico-urbano</b>'+ '<br>Duración aprox. 2hs, distancia aprox. 12km <br> Dificultad intermedia')
              .openOn(mapa);
        
        	

};

function loadPaseoPrado()
{
	function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: '#EB1C1C',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'red'
				
			}
		};
		

	function highlightFeature(e) {
		var layer = e.target;

        if (feature.geometry.type !== 'Point')        
        {            
        		layer.setStyle({
        		weight: 4,
        		color: '#EB1C1C',
        		dashArray: '',
        		fillOpacity: 0.7
        	})
        	if (!L.Browser.ie) {
        		layer.bringToFront();
        	}
        }
	
   };	
		
	function zoomToFeature(e) {
		mapa.fitBounds(e.target.getBounds());
	};

	function onEachFeature(feature, layer) {	
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
	    	click: zoomToFeature
	    });    
	};	



	function resetHighlight(e) {

		geoPaseoPrado.resetStyle(e.target);
				
	};			
		geoPaseoPrado = L.geoJson(paseoPrado, {
			style: style,
			onEachFeature: onEachFeature,
			pointToLayer: function(feature, latlng) {	
				
	 			var desc = feature.properties.descrip;

                if (feature.properties.tipo == 1)                
                    var marker = L.marker(latlng, { icon: semaforoIcon}).bindPopup(desc).addTo(mapa);                            
                else
                {                    
                    if (feature.properties.tipo == 2) 
                    {                        
                        if (feature.properties.imag != null)                        
                          desc = desc + "<br><img id='foto' src=" + "'" + feature.properties.imag + "'" + "/>";                             
                           
                        var marker = L.marker(latlng, { icon: patrimonioIcon}).bindPopup(desc).addTo(mapa);                                            

                    }    
                    else 
                    {
                        if (feature.properties.tipo == 4)
                        {
                                var marker = L.marker(latlng, { icon: infoPatIcon}).bindPopup(desc).openPopup().addTo(mapa);                            
                        } 
                        else
                            var marker = L.marker(latlng, { icon: alertaIcon}).bindPopup(desc).addTo(mapa);
                    }                   
                        
                }

                marker.on('click', function() {
                    this.openPopup();           
                    $('#foto').load(function() {    
                         marker._popup._updateLayout();
                    });
                 });       
                                                                
                return marker;
	    	}	
		}).addTo(mapa);	

        mapa.setView([-34.85315,-56.20807]);
        popupPR = L.popup()
             .setLatLng([-34.85315,-56.20807])
             .setContent('<b>Patrimonio cultural - Circuito romántico</b>'+ '<br>Duración aprox. 2hs, distancia aprox. 9km <br> Dificultad intermedia')
             .openOn(mapa);
        
		
	

};

function loadPaseoPeniarol()
{
    
	function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: '#EB1C1C',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'red'
			
			}
		}
		

	function highlightFeature(e) {
		var layer = e.target;        

        if ((feature.geometry.type !== 'Point') && (feature))       
        { 
    		layer.setStyle({
        		weight: 4,
        		color: '#EB1C1C',
        		dashArray: '',
        		fillOpacity: 0.7
    	   })
    	   if (!L.Browser.ie) {
    		  layer.bringToFront();
    	   }
       }	
    }	
		
	function zoomToFeature(e) {
		mapa.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {	
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
	    	click: zoomToFeature
	    })    
	}	

	function resetHighlight(e) {		
		geoPaseoPeniarol.resetStyle(e.target);
				
	}			
		geoPaseoPeniarol = L.geoJson(paseoPeniarol, {
			style: style,
			onEachFeature: onEachFeature,
			pointToLayer: function(feature, latlng) {	
				
	 			var desc = feature.properties.descrip;

	 			if (feature.properties.tipo == 1)                
	        		var marker = L.marker(latlng, { icon: semaforoIcon}).bindPopup(desc).addTo(mapa);                            
	        	else
                {                    
	        		if (feature.properties.tipo == 2) 
                    {                        
                        if (feature.properties.imag != null)                        
                          desc = desc + "<br><img id='foto' src=" + "'" + feature.properties.imag + "'" + "/>";                             
                           
        			    var marker = L.marker(latlng, { icon: patrimonioIcon}).bindPopup(desc).addTo(mapa);                                            

                    }    
	        		else 
                        {
                            if (feature.properties.tipo == 4)
                            {
                                var marker = L.marker(latlng, { icon: infoPatIcon}).bindPopup(desc).openPopup().addTo(mapa);                            
                            } 
                            else                    
                                var marker = L.marker(latlng, { icon: alertaIcon}).bindPopup(desc).addTo(mapa);
                        }               
                        
                }

				marker.on('click', function() {
				  	this.openPopup();			
                    $('#foto').load(function() {    
                         marker._popup._updateLayout();
                    });
	    		 });	   
	    		 										    	
	    		return marker;
	        }	
		}).addTo(mapa);	

        mapa.setView([-34.82451,-56.209014]);
        popupPN = L.popup()
             .setLatLng([-34.82451,-56.209014])
             .setContent('<b>Patrimonio cultural - Circuito industrial</b><br>Duración aprox. 1hr30m, distancia aprox. 3.5km <br> Dificultad baja')
             .openOn(mapa);
        
			 
    
};


//E31246 color pendientes

function loadRepechos()
{
    function style(feature) {
            return {
                weight: 4,
                opacity: 1,
                color: '#E31246',
                dashArray: '',
                fillOpacity: 0.7,
                fillColor: 'red'
                
            }
        }
        

    function highlightFeature(e) {
        var layer = e.target;
        
        if (feature.geometry.type !== 'Point')        
        {                    
                layer.setStyle({
                weight: 4,
                color: '#E31246',
                dashArray: '',
                fillOpacity: 0.7
            });
            if (!L.Browser.ie) {
                layer.bringToFront();
            }
        }   
   }    
        
    function zoomToFeature(e) {
        mapa.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {    
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        })    
    }   



    function resetHighlight(e) {        
        geoRepechos.resetStyle(e.target);
                
    }   
        
        geoRepechos = L.geoJson(repechos, {
            style: style,
            onEachFeature: onEachFeature,
            pointToLayer: function(feature, latlng) {   
                
                var desc = feature.properties.popup;
                
                var marker = L.marker(latlng, { icon: repechoIcon}).bindPopup(desc).addTo(mapa);                            
                
                marker.on('click', function() {
                    this.openPopup();                               
                 });       
                                                                
                return marker;
            }   
        }).addTo(mapa); 
         

};


function loadBicicleterias()
{
	 
	geoBicis = null;
	geoBicis = L.geoJson ( bicicleterias, {		
		pointToLayer: function(feature, latlng) {			
 		var desc = feature.properties.Nombre + "<br>" + feature.properties.Direc + "<br>" + 
 		"Telef: " + feature.properties.Telef; 		
		var marker = L.marker(latlng, { icon: biciIcon}).bindPopup(desc).addTo(mapa);
		marker.on('click', function() {
			this.openPopup();
		});		
		return marker;
    }
 }); 
}; 

 
/////////////////////

/// Funciones de Busqueda

function nearest_estacionPM()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
			
				var nlatlng = L.GeometryUtil.closest(mapa,latlngEstaciones , latlngmap);
			
				mapa.setView(nlatlng,15); 	
				addCirculo(nlatlng);
				rutaAB(latlngmap, nlatlng);	
								
				
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");	
}

function nearestInfladores()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
						
				var nlatlng = L.GeometryUtil.closestLayer(mapa,inflamarkers.getLayers() , latlngmap);
				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
						
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	
}

function nearestSeccional()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
					
				var nlatlng = L.GeometryUtil.closestLayer(mapa,lmarkersS.getLayers() , latlngmap);

				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
             			
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	
}

function nearestTalleres()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
				
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoTalleres.getLayers() , latlngmap);

				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
							
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	
}


function nearestBicicletarios()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
						
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoBicicletarios.getLayers() , latlngmap);

				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
						
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");

}

function nearestBanios()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{				
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoBanios.getLayers() , latlngmap);

				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
														
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	
}

function nearestBebederos()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
							
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoBebederos.getLayers() , latlngmap);

				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
							
						
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	//cate()
}


function nearestCicloVia()
{		  
		
		
	if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
		
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoCV.getLayers() , latlngmap);
				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);
	
			}
			else
				alert("Click sobre el lugar");					
        }        
        else
        	alert("Click sobre el lugar");
							
}


function nearestBiciSenda()
{		  		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
					
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoBS.getLayers() , latlngmap);
				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);			
											
			}
			else
				alert("Click sobre el lugar");					
        }        
        else
        	alert("Click sobre el lugar");
	
}

function nearestZona30()
{
	if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
							
				var nlatlng = L.GeometryUtil.closestLayer(mapa,geoz30.getLayers() , latlngmap);
				mapa.setView(nlatlng.latlng,15); 
				addCirculo(nlatlng.latlng);	
				rutaAB(latlngmap, nlatlng.latlng);

								
			}
			else
				alert("Click sobre el lugar");					
        }        
        else
        	alert("Click sobre el lugar");
}

function nearestBicicleteria()
{		  
		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{												
								
				var nearest = L.GeometryUtil.closestLayer(mapa, geoBicis.getLayers(), latlngmap);
						
				mapa.setView(nearest.latlng,15); 

				addCirculo(nearest.latlng);	
				rutaAB(latlngmap, nearest.latlng);
							
			}
			else
				alert("Click sobre el lugar");			
		
        }        
        else
        	alert("Click sobre el lugar");	
}

function nearestBiciPunto()
{		  
		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
								
				var nearest = L.GeometryUtil.closestLayer(mapa, geoBiciPuntos.getLayers(), latlngmap);
								
				mapa.setView(nearest.latlng,15); 	
				addCirculo(nearest.latlng);	
				rutaAB(latlngmap, nearest.latlng);
				
			}
			else
				alert("Click sobre el lugar");			
		
        }        
        else
        	alert("Click sobre el lugar");	
}

function nearestBiciAmigo()
{		  
		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
				
				var nlatlng = L.GeometryUtil.closest(mapa,latlngBiciAmigos,latlngmap); 	
												
				
				mapa.setView(nlatlng,15); 
				addCirculo(nlatlng);
				rutaAB(latlngmap, nlatlng);					
				
			}
			else
				alert("Click sobre el lugar");			
		
        }        
        else
        	alert("Click sobre el lugar");	
}

function loadSeccionales()
{

	lmarkersS = null;
	lmarkersS = L.geoJson (seccionales, {		
		pointToLayer: function(feature, latlng) {			
 		var desc = "<b>" + feature.properties.Secc + "</b>" + "<br>" + feature.properties.Dir + "<br>" + 
 		"Telef: " + feature.properties.Tel; 		
		var marker = L.marker(latlng, { icon: policeIcon}).bindPopup(desc).addTo(mapa);
		marker.on('click', function() {
			this.openPopup();
		});	
		
		return marker;
    }
  }).addTo(mapa);  
 
	
}

function loadFacultades()
{
	lmarkersFacs = L.layerGroup();
	marker = L.marker([-34.90612,-56.18307], {icon: uniIcon, title: "Fac. Ciencias Sociales" })
	 .bindPopup("<b>Fac. Ciencias Sociales</b>" + "<br>Constituyente 1502" 
	 	+ "<br>" + "Reparación/estacionamiento para estudiantes/funcionarios");
	
	
	lmarkersFacs.addLayer(marker);
	
	marker = L.marker([-34.90246,-56.17668], {icon: uniIcon, title: "Fac. de Derecho" })
	 .bindPopup("<b>Fac. de Derecho</b>" + "<br>" + "18 de Julio 1824 " + "<br>" +
        "Estacionamiento para estudiantes/funcionarios");
	
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.91236,-56.17432], {icon: uniIcon, title: "Fac. Ccias Económicas" })
	.bindPopup("<b>Fac. de Ciencias Económicas</b>" + "<br>" + "Gonzalo Ramirez 1926"+ "<br>" +
        "Estacionamiento para estudiantes/funcionarios");
		
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.91815,-56.16685], {icon: uniIcon, title: "Fac. de Ingeniería" })
	 .bindPopup("<b>Fac. de Ingeniería</b>" + "<br>" + "Av. Julio Herrera y Reissig 565" + "<br>" +
	 	"Reparación ligera, estacionamiento vigilado y vestuario - todo público");
		 
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.90969,-56.16417], {icon: uniIcon, title: "Fac. de Arquitectura" })
	 .bindPopup("<b>Fac. de Arquitectura</b>" + "<br>Bulevar General Artigas 1031" + "<br>" +
        "Estacionamiento para estudiantes/funcionarios");
	
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.9025914,-56.1799721], {icon: uniIcon, title: "Fac. de Humanidades" })
	 .bindPopup("<b>Fac. de Humanidades</b>" + "<br>" + "Magallanes 1577" + "<br>" +
	 	"Reparación ligera y estacionamiento para estudiantes/funcionarios ");
	
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.899897,-56.178825], {icon: uniIcon, title: "Fac. de Psicología" })
	 .bindPopup("<b>Fac. de Psicología</b>" + "<br>" + "Tristán Narvaja 1674" + "<br>" + 
	 	"Reparación ligera y estacionamiento para estudiantes/funcionarios");

    marker = L.marker([-34.90286,-56.17807], {icon: uniIcon, title: "Fac. de Artes" })
     .bindPopup("<b>Fac. de Artes</b>" + "<br>" + "18 de Julio 1772" + "<br>" + 
        "Estacionamiento para estudiantes/funcionarios"); 
	 
	lmarkersFacs.addLayer(marker);
	lmarkersFacs.addTo(mapa);
};


function loadPendientes()
{
            

        function style(feature) {
            return {
                weight: 4,
                opacity: 1,
                color: '#E31246',
                dashArray: '5',
                fillOpacity: 0.7,
                fillColor: 'blue'
               
            }
        }
        

    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
        weight: 4,
        color: '#E31246',
        dashArray: '',
        fillOpacity: 0.7
    })
    if (!L.Browser.ie) {
        layer.bringToFront();
    }
    
   };   
        
function zoomToFeature(e) {
    mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    })
}   

function resetHighlight(e) {
   
    geoPendientes.resetStyle(e.target);
            
}
       
        geoPendientes = L.geoJson(ejes, {
            
            style: style,
            onEachFeature: onEachFeature
        }).addTo(mapa);
};


function loadDatosIniciales()
{   
     
    
    socket = io();
    //socket = io("http://bicimapuy.herokuapp.com")
    
    socket.on('biciamigos',function (data) {        
                      
                        biciamigos = jQuery.parseJSON(data);
                        
                        
    });
    socket.on('infladores',function (data1) {        
                           
                        infladores = jQuery.parseJSON(data1);
                        
                        
    });
    socket.on('bicipuntos',function (data2) {        
                        
                        bicipuntos = jQuery.parseJSON(data2);
                        
                        
    });
    socket.on('bicicleterias',function (data3) {        
                         
                        bicicleterias = jQuery.parseJSON(data3);
                        
                        
    });
    socket.on('repechos',function (data4) {        
                     
                        repechos = jQuery.parseJSON(data4);
                       
                        
    });
    socket.on('seccionales',function (data5) {        
                         
                        seccionales = jQuery.parseJSON(data5);
                       
                        
    });
    socket.on('talleres',function (data6) {        
                         
                        talleres = jQuery.parseJSON(data6);
                        
                        
    });
    socket.on('paseoRambla',function (data7) {        
                            
                        cvpr = jQuery.parseJSON(data7);
                       
                        
    });
    socket.on('paseoPeniarol',function (data8) {        
                        
                        paseoPeniarol = jQuery.parseJSON(data8);
                       
                        
    });
    socket.on('paseoPrado',function (data9) {        
                         
                        paseoPrado = jQuery.parseJSON(data9);
                      
                        
    });  
                       
                              

    socket.on('error',function () { 
        $( "#aviso" ).html( "<p>Servidor fuera de servicio. Reintente luego</p>" );         
                    });
       
   
}

