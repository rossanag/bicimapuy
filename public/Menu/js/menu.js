$(function() {
				//$('nav#menu').mmenu();
				menu =  $('nav#menu').mmenu(

				{
					navbars		: [{
						position: "top",
						height 	: 1,
						content : [

							'<a class="fa fa-info-circle fa-2x"></a>'

						]
					},
					{
			            position: "bottom", //bottom
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
        			/* offCanvas: {
                		  zposition : "next"
             		}, */
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
			$('#loading').hide();

        });

		$( window ).load(function() {

  			var $ruteo = $('input[name="ruteo"]');
  			$ruteo.click(function() {
  				borrarPath();
	  			if ($ruteo.is( ':checked' ))
	  			{
	  					routing = true;
	      				displayRoutingControl();
	      				//API.close();
	  			}
	  			else
	  			{
	  				borrarRuta();
	  				removeRouting();

	  			}

  			});

				var $_aPie = $('input[id="peaton"]');
				var $_enBici = $('input[id="enBici"]');
				var $_enAuto = $('input[id="enAuto"]');

				$_aPie.click(function() {
					if (routeControl != null)
					{
						if ($_aPie.is( ':checked' )){
							//routeControl.router.route({costing: "pedestrian"});
							routeControl.getRouter().options.costing = "pedestrian";
  						routeControl.route();
							//borrarRuta();
						}
					}

				});
				$_enBici.click(function() {
					if (routeControl != null)
					{
						if ($_enBici.is( ':checked' ))
							//routeControl.router.route({costing: "bycicle"});
							routeControl.getRouter().options.costing = "bycicle";
  						routeControl.route();
							//borrarRuta();
					}
					else {
						alert("es nulo el control");
					}
				});
				$_enAuto.click(function() {
					if (routeControl != null)
					{
						if ($_enAuto.is( ':checked' ))
							//routeControl.router.route({costing: "auto"});
							routeControl.getRouter().options.costing = "auto";
  						routeControl.route();
							//borrarRuta();
					}

				});

      		API.close();

  			});


//});
