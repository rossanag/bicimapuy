$(function() {
				//$('nav#menu').mmenu();
				menu =  $('nav#menu').mmenu(

				{	
					navbars		: [{
						position: "top",	
						height 	: 0.25,
						content : [ 
							
							'<a class="fa fa-info-circle fa-2x"></a>'
							
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
        			},
        			 offCanvas: {
                		  zposition : "next"
             		},
             		clone: true
    	
			});			

			API = $("#menu").data( "mmenu" ); // antes var API

			menu.on( 'click', 'a[class^="fa fa-twitter"]', function() {  // esto funciona
			 				//$('#twitter').show();
							$( "#twitter" ).toggle();
      						  //var API = $("#menu").data( "mmenu" );
       						  API.close();		
      						
			 				return false;
			 			}
			 );
			 menu.on( 'click', 'a[class^="fa fa-info-circle"]', function() {  // esto funciona			 				 				
							if ($( "#dialogo" ).dialog( "isOpen" ))
								$( "#dialogo" ).dialog( "close" );
							else								
								$( "#dialogo" ).dialog( "open" );      						  
       						
      						
			 				return false;
			 			}
			 );

			$( "#dialogo" ).dialog({
  				autoOpen: false,
  				position: { my: "right top", at: "right top", of: window }
			});

			
        });
		
		$( window ).load(function() {

  			var $ruteo = $('input[name="ruteo"');
  			$ruteo.click(function() {  				
  				borrarPath();
	  			if ($ruteo.is( ':checked' ))
	  			{	  		
	  					routing = true;
	      				displayRoutingControl();        			      		      	
	      				API.close();	 			
	  			}
	  			else
	  			{	  				
	  				borrarRuta();
	  				removeRouting();	  				

	  			}
  				
  			});
  			//Pendientes
  			$(".pendientes").click(function(){
  				borrarPath();
    			routing = false;
      			loadPendientes();  
      			      		      		
      		API.close();	 
         
  			});
  			
  			  			
});
