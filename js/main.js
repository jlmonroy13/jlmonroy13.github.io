$(function(){
  //Efectos scroll down en paginas de productos
  $(document).scroll(function () { 
    var x = $(this).scrollTop();
    if (x > 300) {
      $('.advantages__text').addClass('advantages__text--visible');
    }
    if (x > 550) {
      $('.advantages__container-image').addClass('advantages__container-image--visible');
    }
    if (x > 5) {
      $('.bar__legend').addClass('bar__legend--visible');
    }
  });

	$('.our-technology-rds').parallax({imageSrc:'img/bckg/nuestra-tecnologia_RDSbckg.jpg'});
  $(document).scroll(function () { 
    var y = $(this).scrollTop();
      if (y > 102) {
        $('header').addClass('fixed-header');
    }else if (y < 103) {
      $('header').removeClass('fixed-header');
    }
  });
  $('.navbar-toggle').on('click', function(){
    $('.navbar').toggleClass('navbar-collap');
  });
  $('.product-list').on('mouseenter', '.img-container',function(){
    $(this).children('.opacity-color').show();
    $(this).children('.product-more').show();
  });
  $('.product-list').on('mouseleave', '.img-container',function(){
    $(this).children('.opacity-color').hide();
    $(this).children('.product-more').hide();
  });

  //FIRST HOME SLIDER
	$('#nexthome1').click(function(event){
		event.preventDefault()
		var size = $('.home-slider').find('.home-bckg-slider').size();
		$('.home-slider').find('.home-bckg-slider').each(function(index, value) {
      var indImg = $(value).data('index');
			if($(value).hasClass('home-bckg-slider-visible')) {
				$(value).fadeOut(300);
				$(value).removeClass('home-bckg-slider-visible');
				if(index+1<size) {
          indImg += 1;
					$($('.home-slider').find('.home-bckg-slider').get(index+1)).fadeIn(1700);
					$($('.home-slider').find('.home-bckg-slider').get(index+1)).addClass('home-bckg-slider-visible');
          $('.home-slider').fadeOut(200, function () {
             if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final_movil"+indImg+".jpg') no-repeat");
                $('.home-slider').css( "background-size", "cover" );
                $('.home-slider').fadeIn(500);
              }else {
                $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final"+indImg+".jpg') no-repeat");
                $('.home-slider').css( "background-size", "cover" );
                $('.home-slider').fadeIn(500);
              }
          });
					return false;
				}else {
          indImg = indImg -2;
					$($('.home-slider').find('.home-bckg-slider').get(0)).fadeIn(1700);
					$($('.home-slider').find('.home-bckg-slider').get(0)).addClass('home-bckg-slider-visible');
          $('.home-slider').fadeOut(200, function () {
            if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final_movil"+indImg+".jpg') no-repeat");
                $('.home-slider').css( "background-size", "cover" );
                $('.home-slider').fadeIn(500);
              }else {
                $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final"+indImg+".jpg') no-repeat");
                $('.home-slider').css( "background-size", "cover" );
                $('.home-slider').fadeIn(500);
              }
          });
					return false;
				}
			}
		});
	});

	$('#prevhome1').click(function(event){
		event.preventDefault()
		var size = $('.home-slider').find('.home-bckg-slider').size();
		$('.home-slider').find('.home-bckg-slider').each(function(index, value) {
      var indImg2 = $(value).data('index');
			if($(value).hasClass('home-bckg-slider-visible')) {
				$(value).fadeOut();
				$(value).removeClass('home-bckg-slider-visible');
				if(index==0) {
          indImg2 = indImg2 + 2;
					$($('.home-slider').find('.home-bckg-slider').get(size-1)).fadeIn("slow","swing");
					$($('.home-slider').find('.home-bckg-slider').get(size-1)).addClass('home-bckg-slider-visible');
          $('.home-slider').fadeOut(200, function () {
            if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final_movil"+indImg2+".jpg') no-repeat");
              $('.home-slider').css( "background-size", "cover" );
              $('.home-slider').fadeIn(500);
            }else {  
              $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final"+indImg2+".jpg') no-repeat");
              $('.home-slider').css( "background-size", "cover" );
              $('.home-slider').fadeIn(500);
            }
          });    
					return false;
				}else {
          indImg2 = indImg2 - 1;
					$($('.home-slider').find('.home-bckg-slider').get(index-1)).fadeIn("slow","swing");
					$($('.home-slider').find('.home-bckg-slider').get(index-1)).addClass('home-bckg-slider-visible');
          $('.home-slider').fadeOut(200, function () {
            if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final_movil"+indImg2+".jpg') no-repeat");
              $('.home-slider').css( "background-size", "cover" );
              $('.home-slider').fadeIn(500);
            }else {  
              $('.home-slider').css( "background", "url('../img/bckg/home_bckg_final"+indImg2+".jpg') no-repeat");
              $('.home-slider').css( "background-size", "cover" );
              $('.home-slider').fadeIn(500);
            }
          }); 
					return false;
				}
			}
		});
	});

	//TECH HOME SLIDER
	$('#technext').click(function(){
		var size = $('.home-ourTech').find('.ourTech-slider').size();
		$('.home-ourTech').find('.ourTech-slider').each(function(index, value) {
			var indeximg = $(value).data('index');
			if($(value).hasClass('ourTech-slider-visible')) {
				$(value).fadeOut('slow');
				$(value).removeClass('ourTech-slider-visible');
				if(index+1<size) {
					var indeximg1 = indeximg + 1;
					$('.home-ourTech').css( "background", "url('../img/bckg/home_tecno_bg"+indeximg1+".png') no-repeat" );
					$('.home-ourTech').css( "background-size", "cover" );
					$($('.home-ourTech').find('.ourTech-slider').get(index+1)).fadeIn("slow","swing");
					$($('.home-ourTech').find('.ourTech-slider').get(index+1)).addClass('ourTech-slider-visible');
					return false;
				}else {
					var indeximg2 = indeximg - 1;
					$('.home-ourTech').css( "background", "url('../img/bckg/home_tecno_bg"+indeximg2+".png') no-repeat" );
					$('.home-ourTech').css( "background-size", "cover" );
					$($('.home-ourTech').find('.ourTech-slider').get(0)).fadeIn("slow","swing");
					$($('.home-ourTech').find('.ourTech-slider').get(0)).addClass('ourTech-slider-visible');
					return false;
				}
			}
		});
	});

	$('#techprev').click(function(){
		var size = $('.home-ourTech').find('.ourTech-slider').size();
		$('.home-ourTech').find('.ourTech-slider').each(function(index, value) {
			var indeximga = $(value).data('index');
			if($(value).hasClass('ourTech-slider-visible')) {
				$(value).fadeOut();
				$(value).removeClass('ourTech-slider-visible');
				if(index==0) {
					var indeximga3 = indeximga + 1;
					$('.home-ourTech').css( "background", "url('../img/bckg/home_tecno_bg"+indeximga3+".png') no-repeat" );
					$('.home-ourTech').css( "background-size", "cover" );
					$($('.home-ourTech').find('.ourTech-slider').get(size-1)).fadeIn("slow","swing");
					$($('.home-ourTech').find('.ourTech-slider').get(size-1)).addClass('ourTech-slider-visible');
					return false;
				}else {
					var indeximga4 = indeximga - 1;
					$('.home-ourTech').css( "background", "url('../img/bckg/home_tecno_bg"+indeximga4+".png') no-repeat" );
					$('.home-ourTech').css( "background-size", "cover" );
					$($('.home-ourTech').find('.ourTech-slider').get(index-1)).fadeIn("slow","swing");
					$($('.home-ourTech').find('.ourTech-slider').get(index-1)).addClass('ourTech-slider-visible');
					return false;
				}
			}
		});
	});

  $('.js-expand-nav').click(function(event){
    $('.js-nav-expanded').addClass('nav-list--expanded');
    $('.js-retract-nav').addClass('overlay--visible');
    event.preventDefault();
  }) 
  $('.js-retract-nav').click(function(){
    $('.js-nav-expanded').removeClass('nav-list--expanded');
    $('.js-retract-nav').removeClass('overlay--visible');
  })

  var productos = [
    {
      nombre: "NSG - Nivel de Servicio de Góndola",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-nsg.jpg",
      href: "productos-nsg.html",
      select: true
    },
    {
      nombre: "Precios",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-precios.jpg",
      href: "productos-precios.html",
      select: true
    },
    {
      nombre: "Facing",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-facing.jpg",
      href: "productos-facing.html",
      select: true
    },
    {
      nombre: "Planograma",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-plano.jpg",
      href: "productos-planograma.html",
      select: true
    },
    {
      nombre: "Exhibiciones - Acuerdos Comerciales",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-exhibi.jpg",
      href: "productos-exhibiciones.html",
      select: true
    },
    {
      nombre: "Actividad Promocional",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-actividad.jpg",
      href: "productos-actividad.html",
      select: true
    },
    {
      nombre: "Árbol de Perdida",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-arbol.jpg",
      href: "productos-arbol.html",
      select: true
    },
    {
      nombre: "PDV - Normas Visuales",
      tipo: "Producto Cualitativo",
      src: "img/bckg/producto-catalogo-pdv.jpg",
      href: "productos-pdv.html",
      select: true
    },
    {
      nombre: "Mystery Shopper",
      tipo: "Producto Cualitativo",
      src: "img/bckg/producto-catalogo-mystery.jpg",
      href: "productos-mystery.html",
      select: true
    },
    {
      nombre: "Self Audit",
      tipo: "Producto Sistémicos TI",
      src: "img/bckg/producto-catalogo-self.jpg",
      href: "productos-self.html",
      select: true
    },
    {
      nombre: "Bussiness Intelligence",
      tipo: "Producto Sistémicos TI",
      src: "img/bckg/producto-catalogo-bsines.jpg",
      href: "productos-bussiness.html",
      select: true
    },
    {
      nombre: "B2B",
      tipo: "Producto Sistémicos TI",
      src: "img/bckg/producto-catalogo-b2b.jpg",
      href: "productos-b2b.html",
      select: true
    }
  ];

  var productosTemplate = Handlebars.compile($('#productos-template').html());
  $('.js-productos').html(productosTemplate(productos));

  $('.js-productos-todos').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      productos[i].select = true;
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  $('.js-productos-cuantitativos').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i].tipo == "Producto Cuantitativo") {
        productos[i].select = true;
      } else {
        productos[i].select = false;
      } 
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  $('.js-productos-cualitativos').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i].tipo == "Producto Cualitativo") {
        productos[i].select = true;
      } else {
        productos[i].select = false;
      } 
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  $('.js-productos-sisTI').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i].tipo == "Producto Sistémicos TI") {
        productos[i].select = true;
      } else {
        productos[i].select = false;
      } 
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  
});
  