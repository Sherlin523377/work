$(function(){
	$(".search-list").mouseover(function(){
		var index=$(this).index();
		console.log(index)
		$(".hover").stop().animate({
			left:index*20
		},500)
	})
	/*$(".h-t-f-box").hover(function(){
		//console.log(1)
		$(this).stop().animate({
			height:"50px",
			borderBottomWidth:"0px",
			zIndex:"10"
		},50)
	},function(){
		$(this).stop().animate({
			height:"26px",
			borderBottomWidth:"1px",
		},50)
	})*/
})
