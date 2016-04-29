$(function() {
	var $mainTitle 						= $('.hero__title'),
			$mainCover 						= $('.hero'),
			$circleImg1 					= $('.circle-img1-js'),
			$circleImg2 					= $('.circle-img2-js'),
			$circleImg3 					= $('.circle-img3-js'),
			$circleImg4 					= $('.circle-img4-js'),
			$circleImg5 					= $('.circle-img5-js'),
			$boxDescription1			= $('.box-description-js1'),
			$boxDescription2			= $('.box-description-js2'),
			$boxDescription3			= $('.box-description-js3'),
			$boxDescription4			= $('.box-description-js4'),
			$boxDescription5			= $('.box-description-js5'),
			$videoHistory					= $('.video-history'),
			$historyContent				= $('.history-content-js'),
			$ipad									= $('.ipad-js'),
			$ipadContent					= $('.ipad-content-js'),
			$founder							= $('.founder-js'),
			$founderInfo					= $('.founder-info-js'),
			$designerInfo					= $('.designer-info-js'),
			$designer							= $('.designer-js');



	// MAIN COVER PARALLAX
	$mainCover.parallax({imageSrc:'images/main-image.jpg'});
	// MAIN TITLE ANIMATION		
	$mainTitle.addClass('main-title-js');

	$(document).scroll(function () { 
    var y = $(this).scrollTop();
    if (y > 150) {
      $circleImg1.addClass('circle-img-js');
      $boxDescription1.addClass('box-container-js');
    }
    if (y > 350) {
      $circleImg2.addClass('circle-img-js');
      $boxDescription2.addClass('box-container-js');
    }
    if (y > 500) {
      $circleImg3.addClass('circle-img-js');
      $boxDescription3.addClass('box-container-js');
    }
    if (y > 700) {
      $circleImg4.addClass('circle-img-js');
      $boxDescription4.addClass('box-container-js');
    }
    if (y > 900) {
      $circleImg5.addClass('circle-img-js');
      $boxDescription5.addClass('box-container-js');
    }
    if (y > 1300) {
      $videoHistory.addClass('video-history-js');
      $historyContent.addClass('history-cont-effect-js');
    }
    if (y > 1760) {
      $ipadContent.addClass('ipad-cont-effect-js');
      $ipad.addClass('ipad-effect-js');
    }
    if (y > 2350) {
      $founder.addClass('founder-effect-js');
      $founderInfo.addClass('founder-info-effect-js');
    }
    if (y > 2850) {
      $designer.addClass('designer-effect-js');
      $designerInfo.addClass('designer-info-effect-js');
    }
  });
});


