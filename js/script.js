$(document).ready(function(){
	$(document).on("scroll", function(){
		var title=$(document).scrollTop();

		$("div#distance").html(title+"pixels down");
		if(title > 30) {
			$("header").css("top", 0);
		}
		else {
			$("header").css("top", -200);
		}
		
		$("body").toggleClass("oh", title > 40);
		$("body").toggleClass("hi", title > 190);
		$("body").toggleClass("im", title > 450);
		$("body").toggleClass("clre", title > 750);
	})
})