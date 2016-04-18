function AjaxFeed(){

					    return $.ajax({
					        url:            'http://movete.montevideo.gub.uy/index.php?option=com_content&view=article&id=1&Itemid=2',
					        data:           {something: true},
					        dataType:       'jsonp',

					        /* Very important */
					        contentType:    'application/json'
					    });
					};

					function GetData()
					    AjaxFeed()

					    /* Everything worked okay. Hooray */
					    .done(function(data){
					        return data;
					    })

					    /* Okay jQuery is stupid manually fix things */
					    .fail(function(jqXHR) {

					        /* Build HTML and update */
					        var data = jQuery.parseJSON(jqXHR.responseText);

					        return data;
					    });
					};

					var processLeaderboard = function (data) {
  alert('Do your stuff here');
}

$.ajax({
  dataType: 'jsonp',
  jsonpCallback: 'processLeaderboard',
  url: 'http://community.tradeking.com/leaderboard.js?callback=?',
  success: function () {
    alert("something");
  },
});
