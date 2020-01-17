(function($) {
  
  'use strict';
  var $btn = $('#request');
  var $bio = $('#bio');

  $btn.on('click', function() {
    $(this).hide();
    $bio.load('https://raw.githubusercontent.com/nikunj3011/Ajaxfetch/master/h.txt', completeFunction);
  });
  
  

  function completeFunction(responseText, textStatus, request) {

    $bio.css('border', '1px solid #e8e8e8');    
    
    if(textStatus == 'error') {
  
      $bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    } 
  }
  
  // });
  
})(jQuery);