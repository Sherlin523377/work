window.onload=function(){
	var oUser=document.getElementById("username");
	var oPwd=document.getElementById("password");
	var oDl=document.getElementsByClassName("dl")[0];
	var oGu=document.getElementById("gou");
	var arr=[false,false];
	//console.log(oDl);
	//验证用户
	oUser.onblur=function(){
			//手机
			var Ur=oUser.value;
			var regP=/^[1-9]\b{10}$/g;
			var regE=/^\w\b[10]/g;
			var regN=/^\w\b[10]/g;
			if(regP.test(Ur)){
				arr[0]=true;
				alert("请输入正确的数字及字母")
			}else if(regE.test(Ur)){
				arr[0]=true;
				alert("请输入正确的数字及字母")
			}else if(regN.test(Ur)){
				arr[0]=true;
				alert("请输入正确的数字及字母")
			}
		}
	//验证密码
	oPwd.onblur=function(){
			//手机
			var Pw=oPwd.value;
			var regP=/^[1-9]\b\w{6,16}$/g;
			if(regP.test(Pw)){
				arr[1]=true;
				alert("请输入正确的数字及字母")
		}
	}
	//点击登录
	oDl.onclick=function(){
		var Ur=oUser.value;
		var Pd=oPwd.value;
		//console.log(Ur+":"+Pd)
		function setCookie(Ur,Pd,exp){
			var time=new Date();
			time.setDate(time.getDate()+exp);
			if(oGu.checked==true){
				document.cookie=Ur+"="+Pd+" ;expires="+time;
			}
		}
		setCookie(Ur,Pd,15);
	}
}
