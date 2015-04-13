       $("document").ready(function() {
           var template = $("#itemTemplate").html();

           var result = Mustache.render(template, data);

           $("#templateContainer").html(result);



       });

       $(document).ready(function(command) {
           $(".btn1[data-stateName]").click(function() {
               $("." + $(this).attr("data-stateName")).toggle();
               $(this).hide();
               $(this).next().show();


           });
           $(".btn2[data-stateName]").click(function() {
               $("." + $(this).attr("data-stateName")).toggle();
               $(this).hide();
               $(this).prev().show();

           });

           function resizeInput() {
               $(this).attr('size', $(this).val().length);
           }

           $('input')
           // event handler
           .keyup(resizeInput)
           // resize on page load
           .each(resizeInput);
       });