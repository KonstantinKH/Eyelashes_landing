$(document).ready(function(){

	
	/*     loader    */

	$(window).load(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");



	}); // load


	/*   .answer height   */

	var questHeight = $(".questions").height();

	$(".answer").outerHeight(questHeight);

	
	/*   .answer tabs   */

		$(".answer").hide();
		$(".answer:first").show();

		/* if in tab mode */

		$(".question").click(function(){

			$(".answer").hide();
			var activeTab = $(this).attr("rel"); 
      		$("#"+activeTab).show();

  		$(".question").removeClass("question_active");
  		$(this).addClass("question_active");
		});

		/* if in drawer mode */

		$(".question_acard").click(function(){

			$(".answer").hide();
			var d_activeTab = $(this).attr("rel"); 
      		$("#"+d_activeTab).slideDown("slow");

      		$(".question_acard").removeClass("question_active_acard");
      		$(this).addClass("question_active_acard")
		});

	// menu button


	$(".toggle-button").click(function(){

		$(".header-inner nav").toggleClass("active-menu");
	});

	$(".toggle-button").click(function() {

	  $(".sandwich").toggleClass("active");

	});




	/*    slick slider    */

	$(".my-works").slick({

	//normal options...
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: true,

	  // the magic
	 responsive: [
	 	{
		breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			arrows: false,
			dots: true,

			}
	  	},
	 	{
		breakpoint: 640,
			settings: {
			slidesToShow: 2,
			}
	  	},  	 	
	 	{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			}
	  	}, 

		]

	});//slick




	$(".reviews").slick({

	//normal options...
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,

	  // the magic
	 responsive: [

	 	{
		breakpoint: 640,
		settings: {
			slidesToShow: 1,
			arrows: false,
			dots: true,
			}
	  	}
		]

	});//slick








}); // ready()






