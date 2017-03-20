window.onload=function(){
	var scroll=document.getElementById("scroll"); //滑块
	var visible=document.getElementById("visible"); //文本框
	var text=document.getElementById("text");  //文字
	var topT=document.getElementById("topT");  //顶部三角
	var downT=document.getElementById("downT");  //底部三角
	var sidebar=document.getElementById("sidebar");  //侧栏
	var move=document.getElementById("move");	//滚动条
	var timer;
	//使得滑块能够滑动
	scroll.onmousedown=function(ev){
		var disY=ev.clientY-scroll.offsetTop;   //点击滑块时候鼠标离滑块顶部距离
		var startY=ev.clientY;
		document.onmousemove=function(ev){
			var scroll_moveL=move.offsetHeight-scroll.offsetHeight; //滑块能移动的纵向距离
			var text_moveL=text.offsetHeight-visible.offsetHeight;  //文本能够移动的纵向距离
			newTop=ev.clientY-disY;
			
			if(newTop<0){
				newTop=0;
			}else if(newTop>scroll_moveL){
				newTop=scroll_moveL;
			}
			var scale=newTop/(scroll_moveL);    //倍数，滑块移动距离的倍数与文本移动距离倍数相同
			text.style.top=-scale*(text_moveL)+'px';
			scroll.style.top=newTop+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
		}
		
		return false;
	}
	//点击顶部三角
	topT.onmousedown=function(ev){
		clearInterval(timer);
		//还要再关联回右边滑块
		var scroll_moveL=move.offsetHeight-scroll.offsetHeight; //滑块能移动的纵向距离
		var text_moveL=text.offsetHeight-visible.offsetHeight;  //文本能够移动的纵向距离
		var disY=text.offsetTop;
		if(disY<0){
			timer=setInterval(function(){
				disY+=20;
				if(disY>0){
					disY=0;
					clearInterval(timer);
				}
				var scale=disY/(text_moveL);
				scroll.style.top=-scale*(scroll_moveL)+'px';
				text.style.top=disY+'px';
			},100);
		}
		
		topT.onmouseup=function(){
			clearInterval(timer);
		}
	}
	//点击底部三角
	downT.onmousedown=function(ev){
		clearInterval(timer);
		//还要再关联回右边滑块
		var scroll_moveL=move.offsetHeight-scroll.offsetHeight; //滑块能移动的纵向距离
		var text_moveL=text.offsetHeight-visible.offsetHeight;  //文本能够移动的纵向距离
		var disY=text.offsetTop;
		if(disY<=0){
			timer=setInterval(function(){
				disY-=20;
				if(disY<-text_moveL){
					disY=-text_moveL;
					clearInterval(timer);
				}
				var scale=disY/text_moveL;
				scroll.style.top=-scale*scroll_moveL+'px';
				text.style.top=disY+'px';
			},100);
		}
		downT.onmouseup=function(){
			clearInterval(timer);
		}
	}
	//点击滚动条
	move.onmousedown=function(ev){
		var newTop=ev.clientY-move.getBoundingClientRect().top-scroll.offsetHeight/2;
		if(newTop<scroll.offsetHeight/2){
			newTop=0;
		}else if(newTop>move.offsetHeight-scroll.offsetHeight-scroll.offsetHeight/2){
			newTop=move.offsetHeight-scroll.offsetHeight;
		}
		var scale=newTop/(move.offsetHeight-scroll.offsetHeight*2);
		text.style.top=-scale*(text.offsetHeight-visible.offsetHeight)+'px';
		scroll.style.top=newTop+'px';
	}
	
	//滑动滑轮(在滚动条区域)
	move.onmousewheel=action;
	move.addEventListener('DOMMousescroll',action);
	function action(ev){
		var scroll_moveL=move.offsetHeight-scroll.offsetHeight; //滑块能移动的纵向距离
		var text_moveL=text.offsetHeight-visible.offsetHeight;  //文本能够移动的纵向距离
		//当滑轮往上滑动
		if(ev.wheelDelta>0 || ev.detail<0){
			var newTop=scroll.offsetTop-10;
			if(newTop<0){
				newTop=0;
			}
		}else{
			//当滑轮往下滑动
			var newTop=scroll.offsetTop+10;
			if(newTop>scroll_moveL){
				newTop=scroll_moveL;
			}
		}
		var scale=newTop/scroll_moveL;
		text.style.top=-scale*text_moveL+'px';
		scroll.style.top=newTop+'px';
	}
	
	//滑动滑轮(在文本框区域)
	visible.onmousewheel=action;
	visible.addEventListener('DOMMousescroll',action);
	function action(ev){
		var scroll_moveL=move.offsetHeight-scroll.offsetHeight; //滑块能移动的纵向距离
		var text_moveL=text.offsetHeight-visible.offsetHeight;  //文本能够移动的纵向距离
		//滑轮往上滑动
		if(ev.wheelDelta>0 || ev.detail<0){
			var newTop=text.offsetTop+10;
			if(newTop>0){
				newTop=0;
			}
		}else{
			//滑轮往下滑动
			var newTop=text.offsetTop-10;
			if(newTop<-text_moveL){
				newTop=-text_moveL;
			}
		}
		var scale=newTop/text_moveL;
		scroll.style.top=-scale*scroll_moveL+'px';
		text.style.top=newTop+'px';
	}
}
