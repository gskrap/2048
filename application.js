$(document).ready(function() {
  $(document).on('keyup',function(e){
    if(e.which==38) {
      console.log("up");
    };
    if(e.which==39) {
      console.log("right");
    };
    if(e.which==40) {
      console.log("down");
    };
    if(e.which==37) {
      console.log("left");
    };
  });
});