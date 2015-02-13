$(document).ready(function(){
	$(document).on("scroll", function(){
		var title=$(document).scroll();
		$("div#distance").html(title+"pixels down")
		if(title > 30) {
			$("header").css("top", 0);
		}
		else {
			$("header").css("top", -200);
		}
		
	})
})