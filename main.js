

 AOS.init();
 baguetteBox.run('.tz-gallery');

//Animacion de Boton  con JQuery
$("#total").hover(function () {
    $(this).css("color", "Black",);
    $(this).css("font-size", "50px",);
});
$("#total").mouseleave(function () {
    $(this).css("color", "Black",);
    $(this).css("font-size", "30px",);
});


//Funcion Capcha
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}


