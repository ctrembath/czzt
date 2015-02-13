$(document).ready(function(){
	$(document).on("scroll", function(){
		var title=$(document).scrollTop();

		$("div#distance").html(title+"pixels down");
		if(title > 30) {
			$("header").css("top", 0);
		}
		else {
			$("header").css("top", -300);
		}
		
		$("body").toggleClass("oh", title > 40);
		$("body").toggleClass("hi", title > 190);
		$("body").toggleClass("im", title > 450);
		$("body").toggleClass("clre", title > 750);
		$("body").toggleClass("pictures", title > 1380);
		$("body").toggleClass("git", title > 1700);
		$("body").toggleClass("email", title > 2100);

		// $("header").fadeOut( title > 300);

		// var w = 600 - title/4;

		// w= Math.max(0, w);
		// w=Math.min(150, w);

		// $("header img").css("width", w);
			
			
		})

})