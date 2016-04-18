for (var i = 0; i < locations.length; i++)
{

      var parada = locations[i];

      var myLatLng = new google.maps.LatLng(parada[1], parada[2]);
      if(parada[4]!=6)
      {
          if(parada[4]==-1)
          {
            var marker = new google.maps.Marker({
             position: myLatLng,
             map: map,
             shadow: shadow,
             icon: imageoffice,
             title: parada[0],
             zIndex: parada[3]
            });

            var infowindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent('<div class="art-post" align="center"><h2 class="art-postheader">'+locations[i][0]+'</h2><p style="text-align:center;">Pérez Castellano 1492, esquina Cerrito<br />De Lunes a Viernes de 9:00 a 18:00 h.<br />Sábados: De 10:00 a 14:00 h.</p></div>');
                infowindow.open(map, marker);
            }
          })(marker, i));
       } //parada[4] == -1
       else if(parada[4]==4 || parada[4]==5 || parada[8]==0)
       {
          var marker = new google.maps.Marker({
             position: myLatLng,
             map: map,
             shadow: shadow,
             icon: imagebreak,
             title: parada[0],
             zIndex: parada[3]
          });

          var infowindow = new google.maps.InfoWindow();

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent('<div class="art-post" align="center"><h2 class="art-postheader">'+locations[i][0]+'</h2><p style="text-align:center;color:#ff0000;">FUERA DE SERVICIO</p></div>');
                infowindow.open(map, marker);
            }
          })(marker, i));
       }
       else //(parada[4]==4 || parada[4]==5 || parada[8]==0)
       {
          if (parada[6]==0)
          {
             var marker = new google.maps.Marker({
             position: myLatLng,
             map: map,
             shadow: shadow,
             icon: imageempty,
             title: parada[0],
             zIndex: parada[3]
             });
             var infowindow = new google.maps.InfoWindow();
          }

          else if (parada[6]==locations[i][7]) // parada[6] != 0
          {
             var marker = new google.maps.Marker({
             position: myLatLng,
             map: map,
             shadow: shadow,
             icon: imagefull,
             title: parada[0],
             zIndex: parada[3]
             });
             var infowindow = new google.maps.InfoWindow();
          }

          else //(parada[6] != locations[i][7])
          {
             var marker = new google.maps.Marker({
             position: myLatLng,
             map: map,
             shadow: shadow,
             icon: imagesemi,
             title: parada[0],
             zIndex: parada[3]
             });
             var infowindow = new google.maps.InfoWindow();
          }

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent('<div class="art-post" align="center"><h2 class="art-postheader">'+locations[i][0]+'</h2><p style="text-align:center;"><strong>Huecos libres: </strong>'+(locations[i][7]-locations[i][6])+'<br /><strong>Bicis disponibles: </strong>'+locations[i][6]+'</p></div>');
                infowindow.open(map, marker);
            }
          })(marker, i));
      }
  }
}

