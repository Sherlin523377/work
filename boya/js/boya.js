$(function(){
	$(".changLang span a").hover(function(){
		$(this).addClass("china").siblings().removeClass("china")
		$(this).css({
			textDecoration:"none"
		})
	},function(){
		$(this).addClass("china").siblings().removeClass("china")
	})
})
$('.carousel-1').carousel({
  interval: 9000
})
