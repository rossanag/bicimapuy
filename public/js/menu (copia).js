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
	        		    	'<a href="mailto:bicimapuy@gmail.com" class="fa fa-envelope"></a>',	        		    	
	               			'<a class="fa fa-twitter"></a>',	               			
	               			'<a href="https://www.facebook.com/" target="_blank"class="fa fa-facebook"></a>'
	            		]
         			}
					],					
					extensions: ["multiline"],	
        			 onClick: {
             			close: false
        			 },
        			navbar:{
        				title: "Inicio"        				
        			 }
        			// offCanvas: {
           //     		  zposition : "next"
           //  		}
    	
			});

			var API = $("#menu").data( "mmenu" );

			menu.on( 'click', 'a[class^="fa fa-twitter"]', function() {  // esto funciona
			 				$('#twitter').show();
							
      						  //var API = $("#menu").data( "mmenu" );
       						  API.close();		
      						
			 				return false;
			 			}
			 );

			// menu.on( 'click', 'a[class^="fa fa-envelope"]', function() {  // esto funciona
			//  				alert("holaaaaaa");
							
   //    						  //var API = $("#menu").data( "mmenu" );
   //     						  API.close();		
      						
			//  				return false;
			//  			}
			//  );

			// menu.on( 'click', 'a[class^="fa fa-envelope"]', function() {  // esto funciona
			//  				$('#twitter').show();
			//  				//var API = $("#menu").data( "mmenu" );
       						  							
			// 				API.close();		
			//  				return false;
			//  			}

			//  );
			
        });
		