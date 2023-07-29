 $(document).ready(function() { 

  var showjoblst = $(".jobsearchdata");
var nav = $('#mesage');

if(nav.length) {
    $('html, body').animate({
    scrollTop: $("#mesage").offset().top - 750
  }, 1000)
}


if(showjoblst.length) {
    $('html, body').animate({
    scrollTop: $(".jobsearchdata").offset().top
  }, 1000)
}


  $("#newsletterform").submit(function(e){
    
                e.preventDefault();
      $.ajax({
                url: $(this).attr('action'),
                data: $("#newsletterform").serialize(),
                type: "post",
                dataType:'json',
                success: function(data){
                  
                    

                  $("#newslettermessage").html('Subscribed !');
                  $("#newslettermessage").addClass("success"); 

                  $('#newslettermessage').fadeIn('fast').delay(1000).fadeOut('fast');

                  },
               error: function()
               {
                $("#newslettermessage").html('Something Went Wrong!');
                  $("#newslettermessage").addClass("danger");            
               }
          });
    });




});