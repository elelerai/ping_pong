var constant = 1;
var newnumbers = function(number,constant) {
   return number-constant;
 };



 $(document).ready(function() {
   $("form#newnumbers").submit(function(event) {
     event.preventDefault();
     var number = parseInt($("#number").val());

    var result = newnumbers(number,constant);
     $("#output").text(result);
   });
 });
