var new_num = 5; // global variable
jQuery(document).ready(function(){ 

$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide(1000);
  });
  $("#show").click(function(){
    $("p").show(1000);
  });
});


	$('p').css({border: '3px solid white', color: 'orange', padding: '10px'});
	$(document).ready(function(){
  $("p").click(function(){
    $(this).hide(1000);
  });
});
	
	$('#countme').css({
		margin: '0 auto',
		backgroundColor: '#ccc',
		//textAlign: 'center',
		fontSize: '20px'
	}).bind('click', function(){
		var current = parseInt($(this).text(), 10);
		new_num = new_num + 1
		$(this).text(current+1).css({fontSize: new_num+'2px'})
	});
});
$(document).ready(function(){
  $("#animee").click(function(){
    $("#div1").fadeIn(5000);
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});



$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#anime").click(function(){
    var div = $("#anim");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
});

/*
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
  });

  $("#btn2").click(function(){
    $("#test2").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
  */
$(document).ready(function(){
  $("#btn5").click(function(){
    $("#p1").append(" this is heli");
  });

  
});
