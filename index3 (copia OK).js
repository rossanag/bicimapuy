var fs = require('fs');  //puesto por ahora

var request = require('request');
var express = require('express'),
      app = express(),
      server = require('http').createServer(app),
   
      elemParadas = [],
      paradas = [];

var paradasant = [];

var io = require('socket.io')(server);  //funciona


app.use( express.static(__dirname + '/public'));

app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-Width");
}
  )


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
        //console.log(data2);     
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
//


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
