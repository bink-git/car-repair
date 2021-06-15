$(document).ready(function(){
    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){
  
         
          window.location.hash = hash;
        });
      } 
    });
  });