window.onload=function(){
	var circle=document.getElementById("left");
	var order=document.getElementById("right");
	var text1=document.querySelector("p");
	var numb=document.querySelector("#top");
	var text2=document.querySelector("#bottom");
	var prev=document.querySelector("#prev");
	var next=document.querySelector("#next");
	
	var pic=document.getElementById("pic");
	var imgArr=['QQ图片20150602162920','QQ图片20150613081339','QQ图片20150613081404','QQ图片20150613081411'];
	    console.log(imgArr);
	var text2Arr=['第一张图片','第二张图片','第三张图片','第四张图片'];
	var n=0;
	var loop=true;
	
	function act(){
		pic.src='img/'+imgArr[n]+'.jpg';
		text2.innerHTML=text2Arr[n];
		numb.innerHTML=(n+1)+'/'+imgArr.length;
	}
	act();
	
	circle.onclick=function(){
		loop=true;
		text1.innerHTML='图片可从最后一张跳到第一张循环播放';
	}
	order.onclick=function(){
		loop=false;
		text1.innerHTML='图片只能从第一张播放到最后一张';
	}
	next.onclick=function(){
		n++
		if(loop)/*判断是在循环还是顺序的状态*/{
			if(n==imgArr.length){
				n=0;
			}
			act();
		}
		else{
			if(n>imgArr.length-1){
				n=imgArr.length-1;
				alert('这已经是最后一张片了');
			}
			act();
		}
	}
	prev.onclick=function(){
		n--
		if(loop){
			if(n<0){
				n=imgArr.length-1;
			}
			act();
		}
		else{
			if(n<0){
				n=0;
				alert('这已经是第一张了');
			}
			act();
		}
	}
};
