
$(document).ready(function() { 
  $(".main-content").click(function() {
    $(".container").toggleClass("open-sidebar");
    //displayRoutingControl();
    if (routing) 
    {
       $(".btnBorrar").css({
         'right':'0',
         'top': '15%'
         });  
      removeRouting();      
      $(".btnBorrar").css({
         'right':'-44px',
         'top': '15%'
         });  
     
    }  
  });



  });
