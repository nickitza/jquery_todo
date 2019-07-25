// check off to do's by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
  });

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    //fade out elements still exist
    $(this).remove()
  })
  event.stopPropagation();
})

$("input[type='text']").keypress(function(){
  if( event.which === 13 ) {
    var todoText = $(this).val();
    $(this).val("")
    $("ul").append("<li><span>X </span>" + todoText + "</li>")
  }
})


// All of this code can be replaced with .toggleClass
//   if($(this).css("color")=== "rgb(128, 128, 128)"){
//     $(this).css({
//       color: "white",
//       textDecoration: "none"
//     })
//   }else
//   $(this).css({
//     color: "gray",
//     textDecoration: "line-through"
//     })