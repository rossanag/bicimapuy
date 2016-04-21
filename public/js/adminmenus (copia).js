var routing = false;


function borrarPath()
{
  if (circulo != null)
  {  
      mapa.removeLayer(circulo);
      circulo = null;     
  }       
  if (line != null)
  {  
      mapa.removeLayer(line);
      line = null;
  }
  if (popup != null)
  {
    mapa.removeLayer(popup);
    popup = null;
  }
}

  


function onMapClicked(e) {

      var desc = "Estás en " + e.latlng.toString();

      // esto es nuevo usado para geolocalización
       if (markerGeoLoc != null)
       {
        mapa.removeLayer(markerGeoLoc);      
       }
       markerGeoLoc = L.marker(e.latlng).bindPopup(desc).addTo(mapa); 
      
    }


function loadPOI() {
  routing = false;

  
  //Bicisendas
  var $bicisendas    = $('input[name="bic"');
  $bicisendas.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  


      fn_actual = onMapClicked;
      borrarPath();

      //if ((fn_ant !== null) && (fn_ant !== onMapClicked))
      mapa.off('click', fn_ant);
      mapa.on('click', fn_actual);

      var $bicisendasrb = $('input:radio[id="bsrb"] ');        

      if ($bicisendas.is( ':checked' ))
      {
        
        if (!$bicisendasrb.is( ':checked' ))
        {
          loadBiciSendas();
        
         }

      }  
      else
      {
        mapa.removeLayer(geoBS);
        $bicisendasrb.prop( "checked", false );
      }      
      fn_ant = onMapClicked;  
  });

  //Ciclovías
  var $ciclovias    = $('input[name="ciclov"');
  $ciclovias.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();

      var $cicloviasrb = $('input:radio[id="cvrb"] ');

      if ($ciclovias.is( ':checked' ))
      {
        if (!$cicloviasrb.is( ':checked' ))
        {
          loadCicloVias();        
          
        }  
      
      }  
      else
      {
        mapa.removeLayer(geoCV);
        $cicloviasrb.prop( "checked", false );
      }
        
  });

//Zona 30
  var $zona30    = $('input[name="z30"');
  $zona30.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();

      var $zona30rb = $('input:radio[id="z30rb"] ');

      if ($zona30.is( ':checked' ))
      {
        if (!$zona30rb.is( ':checked' ))
          loadZona30();              
      }  
      else
      {
        mapa.removeLayer(geoz30);
        $zona30rb.prop( "checked", false );
      }
        
  });

  //Seccionales Policiales
  var $seccionales    = $('input[name="sec"');
  $seccionales.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $seccionalesrb = $('input:radio[id="serb"] ');

      if ($seccionales.is( ':checked' ))
      {        
        if (!$seccionalesrb.is( ':checked' ))
         { 
          console.log("carga seccionales");
          loadSeccionales();  
          mapa.addLayer(lmarkersS);
        }
        else
        console.log("NOOO carga seccionales");       
      }  
      else
      {
        mapa.removeLayer(lmarkersS);        
        $seccionalesrb.prop( "checked", false );
      }
        
  });


//Biciamigos
  var $biciamigos    = $('input[name="ba"');
  $biciamigos.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath(); 
      var $biciamigosrb = $('input:radio[id="barb"] ');

      if ($biciamigos.is( ':checked' ))
      {
        if (!$biciamigosrb.is( ':checked' ))
        {
          loadBiciAmigos();
          mapa.addLayer(geoBiciAmigos);   
        }
      }  
      else
      {
        mapa.removeLayer(geoBiciAmigos);
        $biciamigosrb.prop( "checked", false );
      }
        
  });


// Estaciones de servicio
var $gasolineras    = $('input[name="gas"]');
  $gasolineras.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $gasolinerasrb = $('input:radio[id="gasrb"] ');

      if ($gasolineras.is( ':checked' ))
      {
        if (!$gasolinerasrb.is( ':checked' ))
        {
         loadEstacionesDeServicio();
          mapa.addLayer(inflamarkers);
        }  
      }  
      else
      {
        mapa.removeLayer(inflamarkers);
        $gasolinerasrb.prop( "checked", false );
      }
        
  });
  
//Bicipuntos
var $bicipuntos = $('input[name="bp"');
  $bicipuntos.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  
 
      borrarPath();
      var $bicipuntosrb = $('input:radio[id="bprb"] ');
      if ($bicipuntos.is( ':checked' ))
      {
        if (!$bicipuntosrb.is( ':checked' ))
        {
          loadBiciPuntos();
          mapa.addLayer(geoBiciPuntos);
        }
      }  
      else
      {
        mapa.removeLayer(geoBiciPuntos);
        $bicipuntosrb.prop( "checked", false );
      }
        
  });


  //Plan Movete
  var $planMovete = $('input[name="pm"');
  $planMovete.click(function() {     

      borrarPath();
      var $planMoveterb = $('input:radio[id="pmrb"] ');
      if ($planMovete.is( ':checked' ))
      {
        if (!$planMoveterb.is( ':checked' ))
         { 
            cargarEstaciones();             
            obtenerDatos(5000);
            mapa.addLayer(lmarkersE); 
         }   
      }  
      else
      {
        mapa.removeLayer(lmarkersE);
        $planMoveterb.prop( "checked", false );
      }
        
  });
  

// Bicicleterías
var $bicicleterias = $('input[name="bicv"]');
  $bicicleterias.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $bicicleteriasrb = $('input:radio[id="bvrb"] ');

      if ($bicicleterias.is( ':checked' ))
      {
        if (!$bicicleteriasrb.is( ':checked' ))
        {
            loadBicicleterias();
            mapa.addLayer(geoBicis);
        }    
      }  
      else
      {
        mapa.removeLayer(geoBicis);        
        $bicicleteriasrb.prop( "checked", false );
      }
        
  });


// Bicicletarios
var $biclietarios = $('input[name="bicic"');
  $biclietarios.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $bicicletariosrb = $('input:radio[id="bcrb"] ');


      if ($biclietarios.is( ':checked' ))
      {
        if (!$bicicletariosrb.is( ':checked' ))
        {
            loadBicicletarios();
            mapa.addLayer(geoBicicletarios);
        }    
      }  
      else
      {
        mapa.removeLayer(geoBicicletarios);        
        $bicicletariosrb.prop( "checked", false );
      }
        
  });       


// Bebederos
var $bebederos = $('input[name="be"');
  $bebederos.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $bebederosrb = $('input:radio[id="berb"] ');
      if ($bebederos.is( ':checked' ))
      {
        if (!$bebederosrb.is( ':checked' ))
        {
            loadBebederos();
            mapa.addLayer(geoBebederos);
        }    
      }  
      else
      {
        mapa.removeLayer(geoBebederos);        
        $bebederosrb.prop( "checked", false );
      }
        
  });       


// Talleres de reparación
var $talleres = $('input[name="bicr"');
  $talleres.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $talleresrb = $('input:radio[id="brrb"] ');
      if ($talleres.is( ':checked' ))
      {
        if (!$talleresrb.is( ':checked' ))
        {
            loadTalleres();
            mapa.addLayer(geoTalleres);
        }    
      }  
      else
      {
        mapa.removeLayer(geoTalleres);        
        $talleresrb.prop( "checked", false );
      }
        
  });       


// Baños
var $banios = $('input[name="bn"');
  $banios.click(function() {
      // $(".btnBorrar").css({'right':'-44px', //boton de routing
      //                   'left': 'auto',
      //                   'top': '10px'
      //                           });  

      borrarPath();
      var $baniosrb = $('input:radio[id="bnrb"] ');
      if ($banios.is( ':checked' ))
      {
        if (!$baniosrb.is( ':checked' ))
        {
            loadBanios();
            mapa.addLayer(geoBanios);
        }    
      }  
      else
      {
        mapa.removeLayer(geoBanios);        
        $baniosrb.prop( "checked", false );
      }
        
  });       

  //Repechos
var $repechos = $('input[name="rep"');
$repechos.click(function() {
     console.log("en rep");
      borrarPath();
      
      if ($repechos.is( ':checked' ))
      {
        console.log("carga rep");
            loadRepechos();
            mapa.addLayer(geoRepechos);
            
      }  
      else
      {
        console.log("no checked rep");
        mapa.removeLayer(geoRepechos);                
      }
        
  });        
  
}  


// funciones de nearest
function onLocationFound(e) {
    var radius = e.accuracy / 2;
   
    latlngmap = e.latlng;

    if (latlngmap != null)
    {  

      if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);

      markerGeoLoc = L.marker(e.latlng).addTo(mapa)
          .bindPopup("Estás dentro a " + radius + " mts desde este punto").openPopup();  
    }    
    
}

function onLocationError(e) {
      alert(e.message);
    }
 

function nearestBicisendaEvent(e)
{
  latlngmap = null;
  borrarPath();      
  if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
  markerGeoLoc = L.marker(e.latlng).addTo(mapa);
  latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
  nearestBiciSenda(); 
}

function nearestCicloviaEvent(e)
{
  latlngmap = null;
  borrarPath();      
  if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
  markerGeoLoc = L.marker(e.latlng).addTo(mapa);
  latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
  nearestCicloVia();   
}

function nearestZ30Event(e)
{
  latlngmap = null;
  borrarPath();      
  if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
  markerGeoLoc = L.marker(e.latlng).addTo(mapa);
  latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
  nearestZona30();    
}

function nearestSeccionalEvent(e){
 latlngmap = null;
  borrarPath();      
  if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
  markerGeoLoc = L.marker(e.latlng).addTo(mapa);
  latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
  nearestSeccional();     
}

function nearestBiciAmigoEvent(e){
  latlngmap = null;
  borrarPath();      
  if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
  markerGeoLoc = L.marker(e.latlng).addTo(mapa);
  latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
  nearestBiciAmigo();     
}

function nearestGasolinerasEvent(e) 
{
  latlngmap = null;
  borrarPath();      
  if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
  markerGeoLoc = L.marker(e.latlng).addTo(mapa);
  latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
  nearestInfladores();    
}

function nearestBiciPuntoEvent(e)
{
    latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearestBiciPunto();
}

function nearestPMEvent(e)
{
    latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearest_estacionPM();                                
}

function nearestBicicleteriasEvent(e)
{
    latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearestBicicleteria();                  
}

function nearestBicicletariosEvent(e)
{
  latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearestBicicletarios();                        
}

function nearestBebederosEvent(e)
{
  latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearestBebederos();
}

function nearestBaniosEvent(e)
{
  latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearestBanios();                  
  
}

function nearestTalleresEvent(e)
{
  latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
        mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    nearestTalleres();      
}


// Radio buttons

function loadPOISCercanos() {
  
  // if (markerGeoLoc == null)
  // { 
  //    mapa.locate({setView: true, maxZoom: 16}); //Usa geolocalización
  //    mapa.on('locationfound', onLocationFound);
    
  // }
  //Bicisendas
  var $bicisendas = $('input:radio[id="bsrb"] ');
  $bicisendas.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 

    var $bicisendaschk    = $('input[name="bic"');

    if ($bicisendas.is( ':checked' ))
    {
      borrarPath();      
      if (!$bicisendaschk.is( ':checked' ))     
      {
        loadBiciSendas();      
        nearestBiciSenda();              
        $bicisendaschk.prop( "checked", true );
      }      
        

      mapa.off('click', fn_ant);
      mapa.on('click', nearestBicisendaEvent); 
      fn_ant = nearestBicisendaEvent;
    }

           
  });

  //Ciclovías
  var $ciclovias = $('input:radio[id="cvrb"] ');
  $ciclovias.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $cicloviaschk    = $('input[name="ciclov"');

    if ($ciclovias.is( ':checked' ))
    {
      borrarPath();      
     if (!$cicloviaschk.is( ':checked' )) 
     {      
      loadCicloVias();      
      $cicloviaschk.prop( "checked", true );
     }
         

     nearestCicloVia();
     mapa.off('click', fn_ant);
     mapa.on('click', nearestCicloviaEvent); 
     fn_ant = nearestCicloviaEvent;      
    }
           
  });

//Zona30
var $zona30 = $('input:radio[id="z30rb"] ');
  $zona30.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $zona30chk    = $('input[name="z30"');

    if ($zona30.is( ':checked' ))
    {
      borrarPath();      
     if (!$zona30chk.is( ':checked' )) 
     {       
      
      loadZona30();      
      $zona30chk.prop( "checked", true );
     } 
     
      
     nearestZona30();  
      mapa.off('click', fn_ant);
      mapa.on('click', nearestZ30Event); 
      fn_ant = nearestZ30Event;
    }
           
  });

  
//Seccionales
var $seccionales = $('input:radio[id="serb"] ');
  $seccionales.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $seccionaleschk    = $('input[name="sec"');

    if ($seccionales.is( ':checked' ))
    {
     borrarPath();       
     if (!$seccionaleschk.is( ':checked' )) 
     {        
        
        loadSeccionales();  
        mapa.addLayer(lmarkersS);                    
        $seccionaleschk.prop( "checked", true );
      }
      
        
      nearestSeccional(); 
      mapa.off('click', fn_ant);
      mapa.on('click', nearestSeccionalEvent); 
      fn_ant = nearestSeccionalEvent;
    }
           
  });

  //Biciamigos
  var $biciamigos = $('input:radio[id="barb"] ');
  $biciamigos.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $biciamigoschk    = $('input[name="ba"');

    if (!$biciamigos.is( ':checked' ))
    {
      borrarPath();            
      if (!$biciamigoschk.is( ':checked' )) 
      {
        loadBiciAmigos();
        mapa.addLayer(geoBiciAmigos);                                
        $biciamigoschk.prop( "checked", true );
      }
              
      nearestBiciAmigo();    
      mapa.off('click', fn_ant);
      mapa.on('click', nearestBiciAmigoEvent); 
      fn_ant = nearestBiciAmigoEvent;
    }
           
  });
   
  //Estaciones de servicio
  var $gasolineras = $('input:radio[id="gasrb"] ');
  $gasolineras.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $gasolineraschk    = $('input[name="gas"]');
    if ($gasolineras.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$gasolineraschk.is( ':checked' ))
      {  
      
        loadEstacionesDeServicio();
        mapa.addLayer(inflamarkers);                      
        $gasolineraschk.prop( "checked", true );
      }      
        
      nearestInfladores();    
        mapa.off('click', fn_ant);
        mapa.on('click', nearestGasolinerasEvent); 
        fn_ant = nearestGasolinerasEvent;
    }
});    

//Bicipuntos
var $bicipuntos = $('input:radio[id="bprb"] ');
  $bicipuntos.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $bicipuntoschk = $('input[name="bp"');

    if ($bicipuntos.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$bicipuntoschk.is( ':checked' )) 
      {  
        loadBiciPuntos();
        mapa.addLayer(geoBiciPuntos);                    
        $bicipuntoschk.prop( "checked", true );
      }      
        
      nearestBiciPunto(); 
        mapa.off('click', fn_ant);
        mapa.on('click', nearestBiciPuntoEvent); 
        fn_ant = nearestBiciPuntoEvent;
    }
          

  });

  //Estaciones Plan Movete
  var $planMovete = $('input:radio[id="pmrb"] ');
  $planMovete.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $planMovetechk = $('input[name="pm"');

    if ($planMovete.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$planMovetechk.is( ':checked' )) 
      {
        cargarEstaciones();       
        obtenerDatos(5000);
        mapa.addLayer(lmarkersE); 
        $planMovetechk.prop( "checked", true );
      }
      nearest_estacionPM();                                
      mapa.off('click', fn_ant);
      mapa.on('click', nearestPMEvent); 
      fn_ant = nearestPMEvent;      
    }
                     
  });

  // Bicicleterías
  var $bicicleterias = $('input:radio[id="bvrb"] ');
  $bicicleterias.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $bicicleteriaschk = $('input[name="bicv"]');

    if ($bicicleterias.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$bicicleteriaschk.is( ':checked' ))  
      {  
        console.log("cargando bicis");
        loadBicicleterias();
        mapa.addLayer(geoBicis);
        $bicicleteriaschk.prop( "checked", true );
      }
      nearestBicicleteria();               
      mapa.off('click', fn_ant);
      mapa.on('click', nearestBicicleteriasEvent); 
      fn_ant = nearestBicicleteriasEvent;
      //loadCicloVias();        
      //nearestCicloVia(); 
    }
});
            
//Bicicletarios
  var $bicicletarios = $('input:radio[id="bcrb"] ');
  $bicicletarios.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $biclietarioschk = $('input[name="bicic"');

    if ($bicicletarios.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$biclietarioschk.is( ':checked' ))
      {
        loadBicicletarios();
        mapa.addLayer(geoBicicletarios);
        $bicicletarioschk.prop( "checked", true );
      }
      nearestBicicletarios();                        
      mapa.off('click', fn_ant);
      mapa.on('click', nearestBicicletariosEvent); 
      fn_ant = nearestBicicletariosEvent;      
    }
});

//Bebederos
var $bebederos = $('input:radio[id="berb"] ');
  $bebederos.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $bebederoschk = $('input[name="be"');

    if ($bebederos.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$bebederoschk.is( ':checked' ))
      {
        loadBebederos();
        mapa.addLayer(geoBebederos); 
        $bebederoschk.prop( "checked", true );   
      }
      nearestBebederos();
      mapa.off('click', fn_ant);
      mapa.on('click', nearestBebederosEvent); 
      fn_ant = nearestBebederosEvent;
      //loadCicloVias();        
      //nearestCicloVia(); 
    }
});

//Baños

var $banios = $('input:radio[id="bnrb"] ');
  $banios.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $banioschk = $('input[name="bn"');

    if ($banios.is( ':checked' ))
    {
      
      borrarPath();      
      if ($banioschk.is( ':checked' ))
      {
        loadBanios();            
        mapa.addLayer(geoBanios);
        $banioschk.prop( "checked", true );
      }
      nearestBanios();                  
      mapa.off('click', fn_ant);
      mapa.on('click', nearestBaniosEvent); 
      fn_ant = nearestBaniosEvent;      
    }
});

// Talleres
var $talleres = $('input:radio[id="brrb"] ');
  $talleres.click(function() {  
    $(".btnBorrar").css({'right':'-44px',
                        'display': 'none', 
                        'left': 'auto',
                        'top': '10px'
                                });  

    routing = false; 
    var $tallereschk = $('input[name="bicr"');

    if ($talleres.is( ':checked' ))
    {
      
      borrarPath();      
      if (!$tallereschk.is( ':checked' ))
      {
        loadTalleres();
        mapa.addLayer(geoTalleres);
        $tallereschk.prop( "checked", true );
      }
      nearestTalleres();            
      mapa.off('click', fn_ant);
      mapa.on('click', nearestTalleresEvent); 
      fn_ant = nearestTalleresEvent;
      
    }
});

}


function loadPaseosTuristicos()
{
  
  
  
  routing = false;
 
  // Paseo Ciudad Vieja - Parque Rodó
  var $paseoCVyR    = $('input[name="pcvr"'); 
  $paseoCVyR.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                });  
    borrarPath();

    fn_actual = onMapClicked;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoCVyR.is( ':checked' )))
    {
      loadCVPqueRodo();            
      mapa.setView([-34.9095928357093,-56.21411204338074],13);             
    }
    else
    {
      mapa.removeLayer(geoCvPR);
      //popupRM._close();            
      mapa.closePopup(popupRM);
    }
  });
     
  
  // Paseo Romántico del Prado
  var $paseoRom    = $('input[name="prom"'); 
  $paseoRom.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                }); 

    borrarPath();
    fn_actual = onMapClicked;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);
 

    if (($paseoRom.is( ':checked' )))
    {
      loadPaseoPrado();              
      mapa.setView([-34.86214778728005,-56.2117838859558],13);             
    }
    else
    {
      mapa.removeLayer(geoPaseoPrado);
      mapa.closePopup(popupPR);            
    }
  });

  
  // Paseo Peñarol
  var $paseoPen   = $('input[name="ppen"'); 
  $paseoPen.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                });  
    borrarPath();
    fn_actual = onMapClicked;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoPen.is( ':checked' )))
    {
      loadPaseoPeniarol(); 
      mapa.setView([-34.825597,-56.2055289],13);
    }
    else
    {
      mapa.removeLayer(geoPaseoPeniarol);
      mapa.closePopup(popupPN);
    }
  });


// Espacios de interés cultural

 // Cines
 var $paseoCin   = $('input[name="pcin"'); 
  $paseoCin.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                });  
    borrarPath();    
    fn_actual = onMapClicked;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoCin.is( ':checked' )))
    {
      loadCines();            
      mapa.addLayer(geoCines);
    }
    else
    {
      mapa.removeLayer(geoCines);
    }
  });

        
  // Teatros y auditorios
  var $paseoTea   = $('input[name="ptea"'); 
  $paseoTea.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                });  
    borrarPath();
    fn_actual = onMapClicked;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoTea.is( ':checked' )))
    {
      loadTeatros();            
      mapa.addLayer(geoTeatros);
    }
    else
    {
      mapa.removeLayer(geoTeatros);
    }
  });
    
  // Espacios culturales

  var $paseoMus   = $('input[name="pmus"'); 
  $paseoMus.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                });  
    borrarPath();
    fn_actual = onMapClicked;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoMus.is( ':checked' )))
    {
      loadEspCulturales();            
      mapa.addLayer(geoEspCulturales);
    }
    else
    {
      mapa.removeLayer(geoEspCulturales);
    }
  });
    

function espaciosVerdesEvent(e)
{
    latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    
    mapa.removeLayer(geoEspVerdes);
    mapa.removeLayer(lmarkersVerdes); 
    loadEspVerdes();          
    mapa.addLayer(geoEspVerdes);
    mapa.addLayer(lmarkersVerdes); 
}

   // Espacios verdes
   var $paseoVer   = $('input[name="pver"'); 
  $paseoVer.click(function()
  {
    borrarPath();
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none',   
                      'left': 'auto',
                      'top': '10px'
                                });  
    //no estaba
    fn_actual = espaciosVerdesEvent;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoVer.is( ':checked' )))
    {
      loadEspVerdes();          
      mapa.addLayer(geoEspVerdes);
      mapa.addLayer(lmarkersVerdes); 
    }
    else
    {
      mapa.removeLayer(geoEspVerdes);
      mapa.removeLayer(lmarkersVerdes); 
      mapa.off('click',espaciosVerdesEvent);      
      mapa.on('click',onMapClicked);

    }
    //fn_ant = espaciosVerdesEvent;
  });
    

   function espaciosPatrimonialesEvent(e)
{
    latlngmap = null;
    borrarPath();      
    if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);
    markerGeoLoc = L.marker(e.latlng).addTo(mapa);
    latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
    
    mapa.removeLayer(geoPatrimonio);
    mapa.removeLayer(lmarkersPatrimonio); 
    loadPatrimonio();    
    mapa.addLayer(geoPatrimonio);
    mapa.addLayer(lmarkersPatrimonio); 
} 
    // Lugares patrimoniales
  var $paseoPat   = $('input[name="ppat"'); 
  $paseoPat.click(function()
  {
    $(".btnBorrar").css({'right':'-44px',
                      'display': 'none', 
                      'left': 'auto',
                      'top': '10px'
                                });  
    borrarPath();
    fn_actual = espaciosPatrimonialesEvent;          
    mapa.off('click', fn_ant);
    mapa.on('click', fn_actual);

    if (($paseoPat.is( ':checked' )))
    {
        loadPatrimonio();            
        mapa.addLayer(geoPatrimonio);
        mapa.addLayer(lmarkersPatrimonio);
    }
    else
    {
      mapa.removeLayer(geoPatrimonio);
      mapa.removeLayer(lmarkersPatrimonio);
    }
  });
    
  
}













  