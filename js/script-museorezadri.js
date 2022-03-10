$(document).ready(function () {

  /*Abrir y cerrar hamburguesa*/

  /*Al hacer clic en la hamburguesa, se desplegará el menú oculto*/
  var hamburguesaabierta = false;
  $("picture #hamburguesa").click(function () {
    $("#menu-opciones").stop(true);
    $("#menu-opciones").animate({ "left": 0 }, 300);
    hamburguesaabierta = true;

    /*Cuando el menú esté abierto, haremos que la cabecerá se quede en posicion static
    Para que el usuario pueda hacer scroll dentro del menu*/
    $(window).scroll(function () {
      if (hamburguesaabierta) {
        $("nav#menu-principal").css({ "position": "static" });

      } else {
        if ($(window).scrollTop() > 3) {
          $("nav#menu-principal").css({ "position": "fixed", "left": 0, "top": 0, "width": "100%" });
        } else {
          $("nav#menu-principal").css({ "position": "static" });
        }
      }
    });

   /*Al hacer clic en la X Ocultaremos el menu*/
    $("picture #salirmenu").click(function () {
      $("#menu-opciones").animate({ "left": "-800vw" }, 300);
      hamburguesaabierta = false;
    });

  });

  /*Abrir y cerrar login*/

  /*Al hacer clic en el login, se desplegará el menú oculto*/
  var loginabierto = false;
  $("nav#login").click(function () {
    $("nav#autenticacion").stop(true);
    $("nav#autenticacion").animate({ "left": 0 }, 300);
    loginabierto = true;

    /*Cuando el login esté abierto, haremos que la cabecerá se quede en posicion static
    Para que el usuario pueda hacer scroll dentro del login*/
    $(window).scroll(function () {
      if (loginabierto) {
        $("nav#menu-principal").css({ "position": "static" });

      } else {
        if ($(window).scrollTop() > 3) {
          $("nav#menu-principal").css({ "position": "fixed", "left": 0, "top": 0, "width": "100%" });
        } else {
          $("nav#menu-principal").css({ "position": "static" });
        }
      }
    });

    /*AL hacer clic en la X Ocultaremos el login*/
    $("picture #salir").click(function () {
      $("nav#autenticacion").animate({ "left": "-800vw" }, 300);
      loginabierto = false;
    });

  });


  /*Abrir y cerrar carrito*/

  /*Al hacer clic en el carrito, se desplegará el menú oculto*/
  var bolsaabierta = false;
  $("picture img#bolsacompra").click(function () {
    $("div#carrito").stop(true);
    $("div#carrito").animate({ "left": 0 }, 300);
    bolsaabierta = true;

    /*Cuando el menu del carrito esté abierto haremos que la cabecerá se quede en posicion static
    Para que el usuario pueda hacer scroll dentro del carrito para ver sus articulos*/
    $(window).scroll(function () {
      if (bolsaabierta) {
        $("nav#menu-principal").css({ "position": "static" });

      } else {
        if ($(window).scrollTop() > 3) {
          $("nav#menu-principal").css({ "position": "fixed", "left": 0, "top": 0, "width": "100%" });

        } else {
          $("nav#menu-principal").css({ "position": "static", });

        }
      }
    });

       /*AL hacer clic en la X Ocultaremos el carrito*/
    $("picture img#salircarrito").click(function () {
      $("div#carrito").animate({ "left": "-800vw" }, 300);
      bolsaabierta = false;
    });

  });



  /*Ocultar secciones colección*/

  $("li span#colecciones").click(function () {
    $("ul#menu-coleccion").css({ "visibility": "visible" });
  });

  /*Scroll boton volverarriba*/

  /*Mostraremos el boton cuando hagamos scroll y le daremos funcionalidad al boton 
  para que pueda volver hacia arriba de la pagina */
  $(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
      $("div#volverarriba").css({ "display": "block" });
      $("div#volverarriba").click(function (event) {
        event.preventDefault();
        $("html").animate({
          scrollTop: 0
        }, 800);
      });
    } else if ($(window).scrollTop() == 0) {
      $("div#volverarriba").css({ "display": "none" });
      $("html").stop(true);
    }
  });

  /*Scroll cabecera */
  /*Cuando haga scroll, cambiaremos el estilo de la cabecera para hacerla flotante, le daremos un tamaño y una posicon*/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 3) {
      $("nav#menu-principal").css({ "position": "fixed", "left": 0, "top": 0, "width": "100%", "z-index": "10000" });

    } else {
      $("nav#menu-principal").css({ "position": "static" });
    }
  });


/*Activamos el slider */
  $(document).ready(function () {
    $('.slider').bxSlider();
  });

  /**Menu coleccion version escritorio */

  /*Cuando pasamos el raton por el li de coleccion, mostrará los hijos (cuadros,esculturas)
  Cuando quitamos el raton desaparecerán*/
  $("li#colecciondesplegado").on({
    mouseenter: function () {
      $("span.hijoscoleccion").stop(true);
      $("span.hijoscoleccion").fadeIn();

    },
    mouseleave: function () {
      $("span.hijoscoleccion").stop(true);
      $("span.hijoscoleccion").fadeOut();



    }
  });


  /*------CONTACTO-----*/

  /*Informamos de los caracteres que le quedan al usuario*/
  $("textarea#comentario").keyup(function () {
    var contarCaracteres = $(this).val();
    $(this).siblings("span#caracteres").text("Dispone de " +
      (100 - contarCaracteres.length) + " caracteres");
  });

  /*---Mostramos y ocultamos los errores en el formulario*/
  $("form input").blur(function () {
    if ($(this).val().length < 1) {
      $(this).next("p").css({ "visibility": "visible" })
    } else {

      $(this).next("p").css({ "visibility": "hidden" })
    }
  })

/*Cuando redimensionemos la pantalla, si tenemos abierto el login,carrito o el menú,
cerraemos dichos dichos contenedores*/
  $(window).resize(function () {

    $("#menu-opciones").animate({ "left": "-800vw" }, 300);
    $("nav#autenticacion").animate({ "left": "-800vw" }, 300);
    $("div#carrito").animate({ "left": "-800vw" }, 300);

  })

  /*Boton de la pagina visita, al hacer clic mostrará un mensaje
  de que se ha añadido a la cesta la entrada*/
  $(".elegirvisita button").click(function () {
    $("span.cartel").stop(true);
    $("span.cartel").css({ "top": ($("nav#menu-principal").offset().top+100),"right":"0" })
    $("span.cartel").fadeIn();
    $("span.cartel").fadeOut(2500);

  });

/*Boton de la tienda, al hacer clic mostrará un mensaje
  de que se ha añadido a la cesta el articulo*/
  $("div.bodyproducto button").click(function () {
      $("span.cartel").stop(true);
      $("span.cartel").css({ "top": ($("nav#menu-principal").offset().top+100),"right":"0" })
      $("span.cartel").fadeIn();
      $("span.cartel").fadeOut(2500);
    
  });

});

