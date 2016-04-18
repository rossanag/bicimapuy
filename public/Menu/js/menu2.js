menu = null;
$(function() {
				
				//$('nav#menu').mmenu();
				menu =  $('nav#menu').mmenu(

				{	
					navbars		: [{
						position: "top",	
						height 	: 1,
						content : [ 
							
							'<img src="imagenes/wheel32.png" /><p class="navbartxt">bicimap.uy</p>',				
							
						]
					},
					{
			            position: "bottom",
	        		    content: [
	               			'<a class="fa fa-envelope"></a>',
	               			'<a class="fa fa-twitter"></a>',
	               			'<a class="fa fa-facebook"></a>'
	            		]
         			}
					],					
					extensions: ["multiline"],	
        			 onClick: {
             			close: false
        			 },
        			navbar:{
        				title: "Inicio"        				
        			},
        			offCanvas: {
               		  zposition : "next"
            		}
    	
			});
		
        });
		

$( window ).load(function() {
  // Run code
  var API = $("#menu").data( "mmenu" );

			menu.on( 'click', 'a[class^="fa fa-twitter"]', function() {  // esto funciona
			 				$('#twitter').show();
							
      						  var API = $("#menu").data( "mmenu" );
       						  API.close();		
      						
			 				return false;
			 			}
			 );

});
