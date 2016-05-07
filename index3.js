var fs = require('fs');  //puesto por ahora

var request = require('request');
var express = require('express'),
      app = express(),
      server = require('http').createServer(app),
   
      elemParadas = [],
      paradas = [];

var paradasant = [];
var _recorridos = [];

done = false;

var io = require('socket.io')(server);  //funciona


app.use( express.static(__dirname + '/public'));

app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-Width");
}
  )

var arrayRecorridos = [
						   ["Cordón a Sayago","public/Recorridos/CordonSayago.js"],					   
						   ["Sayago a Cordón","public/Recorridos/sayagoCordon.js"],
						   ["Reducto a FIng","public/Recorridos/reductoFing.js"],
						   ["Toledo a FIng","public/Recorridos/toledoFing.js"],					   
						   ["Ciudad Vieja a Prado","public/Recorridos/cViejaPrado.js"],					   
						   ["Prado a Ciudad Vieja","public/Recorridos/pradoCVieja.js"],
						   ["Pque Rodó a Prado","public/Recorridos/pqeRodoPrado.js"],					   					   					
						   ["Ciudad Vieja a Pque Rodó","public/Recorridos/cvpr.js"],					   					  
						   ["Pque Rodó a Ciudad Vieja","public/Recorridos/prcv.js"],
						   ["Pocitos a Ciudad Vieja","public/Recorridos/pocitosCVieja.js"],	
						   ["CVieja a Pocitos","public/Recorridos/cViejaPocitos.js"],					   				   					  
						   ["Ciudad Vieja a Obelisco","public/Recorridos/cvObelisco.js"],					   					   					  
						   ["Comercial a Pcio. Legislativo","public/Recorridos/comercialPcioLeg.js"],
						   ["Comercial a CV","public/Recorridos/ComercialCV.js"]
					   ];
					   
var intReq, intSend;

//provisorio
  var biciamigos = null;
  var infladores = null;
  var bicipuntos = null;
  var bicicleterias = null;
  var repechos = null;
  var seccionales = null;
  var talleres = null;
  var paseoRambla = null;
  var paseoPeniarol = null;
  var paseoPrado = null;  
  

  fs.readFile('public/Mapas/biciamigos.js', 'utf8', function (err,data1) {
      
        if (err) {
          return console.log(err);
        }       
        
        biciamigos = data1;
        //console.log(data1);     
    });
  fs.readFile('public/Mapas/infladores3.js', 'utf8', function (err,data2) {
      
        if (err) {
          return console.log(err);
        }       
        
        infladores = data2;
       
    });
  
  fs.readFile('public/Mapas/bicipuntos.js', 'utf8', function (err,data3) {
      
        if (err) {
          return console.log(err);
        }       
        
        bicipuntos = data3;
           
    });
  fs.readFile('public/Mapas/bicicleterias.js', 'utf8', function (err,data4) {
      
        if (err) {
          return console.log(err);
        }       
        
        bicicleterias = data4;
        //console.log(data2);     
    });
  fs.readFile('public/Mapas/repechos.js', 'utf8', function (err,data5) {
      
        if (err) {
          return console.log(err);
        }               
        repechos = data5;
        
    });
  fs.readFile('public/Mapas/seccionales.js', 'utf8', function (err,data6) {
      
        if (err) {
          return console.log(err);
        }       
        
        seccionales = data6;
        //console.log(data2);     
    });

  fs.readFile('public/Mapas/talleres.js', 'utf8', function (err,data7) {
      
        if (err) {
          return console.log(err);
        }       
        
        talleres = data7;
        //console.log(data2);     
    });

  fs.readFile('public/Mapas/CVyrambla.js', 'utf8', function (err,data8) {
      
        if (err) {
          return console.log(err);
        }               
        paseoRambla = data8;   
    });
    
  fs.readFile('public/Mapas/paseoPeniarol.js', 'utf8', function (err,data9) {
      
        if (err) {
          return console.log(err);
        }       
        
        paseoPeniarol = data9;
         
    });

  fs.readFile('public/Mapas/paseoPrado.js', 'utf8', function (err,data10) {
      
        if (err) {
          return console.log(err);
        }       
        
        paseoPrado = data10;
     
    });
  
  
  io.sockets.on('connection', function (socket) {
    socket.emit('biciamigos', biciamigos);
    socket.emit('bicipuntos', bicipuntos);
    socket.emit('bicicleterias', bicicleterias);
    socket.emit('infladores', infladores);
    socket.emit('talleres', talleres);
    socket.emit('repechos', repechos);
    socket.emit('seccionales',seccionales);
    socket.emit('paseoRambla',paseoRambla);
    socket.emit('paseoPeniarol',paseoPeniarol);
    socket.emit('paseoPrado',paseoPrado);
    
            
    io.sockets.on('error', function() {
      io.connect(host, {
          'force new connection': true
      }); 
    });
  
    
  });

 //Recorridos
 
 // enviar recorrido
 
 fs.readFile(arrayRecorridos[13][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }  
        _recorridos[13] = data;             
     });
 
 fs.readFile(arrayRecorridos[12][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[12] = data;
     });
     
fs.readFile(arrayRecorridos[11][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[11] = data;
		
     }); 
     
fs.readFile(arrayRecorridos[10][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[10] = data;
		
     });          
fs.readFile(arrayRecorridos[9][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[9] = data;
		
     });               
 
 fs.readFile(arrayRecorridos[8][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[8] = data;
		
     });
     
fs.readFile(arrayRecorridos[7][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[7] = data;
		
     }); 
         
fs.readFile(arrayRecorridos[6][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[6] = data;
    		
     }); 
     
fs.readFile(arrayRecorridos[5][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[5] = data;
		
 });      

fs.readFile(arrayRecorridos[4][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[4] = data;
		
 });  
 
 fs.readFile(arrayRecorridos[3][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[3] = data;
		
 });  
 
 fs.readFile(arrayRecorridos[2][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[2] = data;
		
 });  
             
fs.readFile(arrayRecorridos[1][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[1] = data;
		
     });         

fs.readFile(arrayRecorridos[0][1], 'utf8', function (err,data) {        
        if (err) {
          return console.log(err);
        }       
        _recorridos[0] = data;
		
     });     
 

io.sockets.on("connection", function(socket) {
   
   socket.on("recorridos0", function(data0){	  
      
      socket.emit("recorridos0", _recorridos[0]);
    
     }); 
     
     socket.on("recorridos1", function(data1){    
		        
        socket.emit("recorridos1",_recorridos[1]);
          
    });
    
    socket.on("recorridos2", function(data2){
		socket.emit("recorridos2",_recorridos[2]);
    });
    
    socket.on("recorridos3", function(data3){
		socket.emit("recorridos3",_recorridos[3]);
    });
    
    socket.on("recorridos4", function(data4){
		socket.emit("recorridos4",_recorridos[4]);
    });
    
    socket.on("recorridos5", function(data5){
		socket.emit("recorridos5",_recorridos[5]);
    });
    
    socket.on("recorridos6", function(data6){
		socket.emit("recorridos6",_recorridos[6]);
    });

	socket.on("recorridos7", function(data7){
		socket.emit("recorridos7",_recorridos[7]);
    });	
    
    socket.on("recorridos8", function(data8){
		socket.emit("recorridos8",_recorridos[8]);
    });
    
    socket.on("recorridos9", function(data9){
		socket.emit("recorridos9",_recorridos[9]);
    });
    
    socket.on("recorridos10", function(data10){
		socket.emit("recorridos10",_recorridos[10]);
    });
    
    socket.on("recorridos11", function(data11){
		socket.emit("recorridos11",_recorridos[11]);
    });
    
    socket.on("recorridos12", function(data12){
             
     socket.emit("recorridos12",_recorridos[12]);
    });
    
    socket.on("recorridos13", function(data13){
           
        socket.emit("recorridos13",_recorridos[13]);
    
    });
        
        
  });  
//});


var d = new Date();
var h = d.getHours();

// Hora de de funcionamiento de las estaciones Plan Movete 7-21hs
//if ((h < 21) && (h >= 7))
//{
  io.sockets.on("connection", function(socket) {   

    socket.on("paradas", function(data){
		request('http://movete.montevideo.gub.uy/index.php?option=com_content&view=article&id=1&Itemid=2', function (error, response, html) {
			if (!error && response.statusCode == 200) {
			  html = html.replace(/(\n|\r)/g,''); 

				  
			  /* Con esta exp reg obtengo solo el vector, índice 2 del array */

			  var re = /(var\s*paradas\s*=(\s*\[(.*?)\]));/;  //Funciona!! 
		 

			  var res = re.exec(html);  //obtenemos un string
			  // res[0] - todo el string var paradas = [..]
			  // res[2] - solo la parte entre [], los más externos

			  //saco [] más externos
			  var paradas1 = res[2].trim();
			  var paradas1 = paradas1.slice(0,res[2].length-1);  //desde 1 y mo 0
							  				
				if (paradas1.length > 0)   
					{
						socket.emit('paradas', paradas1);		
					}
				
			}
			else
				console.log("sin datos");
		  
		  });  //request
		
	}); //socket paradas
    

  }); //socket connection
  
//} //if hora

 io.sockets.on('error', function() {
	  io.connect(host, {
		'force new connection': true
	  }); 
	 });   
  

io.sockets.on('disconnect', function(){
  
});



 server.listen(process.env.PORT || 5000);
