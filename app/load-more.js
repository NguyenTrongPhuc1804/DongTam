$(document).ready(function(){
    $(".col-20").slice(0, 5).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".col-20:hidden").slice(0, 4).slideDown();
      if($(".col-20:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })