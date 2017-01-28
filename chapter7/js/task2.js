window.onload=function(){
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var img1=document.getElementById('img1');
	var img2=document.getElementById('img2');
	var text1=document.querySelector('#box1 p');
	var text2=document.querySelector('#box2 p');
	var numb1=document.querySelector('#box1 span');
	var numb2=document.querySelector('#box2 span');
	
	var n=0;
	var i=0;
	var img1Arr=['QQ图片20150602162920','QQ图片20150613081339','QQ图片20150613081404','QQ图片20150613081411'];
	var img2Arr=['QQ图片20150613081509','QQ图片20150613081517','QQ图片20150613081652'];
	var text1Arr=['第一组第一张','第一组第二张','第一组第三张','第一组第四张'];
	var text2Arr=['第二组第一张','第二组第二张','第二组第三张'];
	
	//初始值
	function right(){
		img1.src='img/'+img1Arr[n]+'.jpg';
		text1.innerHTML=text1Arr[n];
		numb1.innerHTML=(n+1)+'/'+img1Arr.length;
	}
	right();
	function left(){
		img2.src='img/'+img2Arr[i]+'.jpg';
		text2.innerHTML=text2Arr[i];
		numb2.innerHTML=(i+1)+'/'+img2Arr.length;
	}
	left();
	//点击事件-下一组
	next.onclick=function(){
		n++
		if(n==img1Arr.length){
			n=0;
		}
		right();
		i++
		if(i==img2Arr.length){
			i=0;
		}
		left();
	}
	//点击事件-上一组
	prev.onclick=function(){
		n--
		if(n<0){
			n=img1Arr.length-1;
		}
		right();
		i--
		if(i<0){
			i=img2Arr.length-1;
		}
		left();
	}
	//点击事件-点击图片
	img1.onclick=function(){
		n++
		if(n==img1Arr.length){
			n=0;
		}
		right();
		
	}
	img2.onclick=function(){
		i++
		if(i==img2Arr.length){
			i=0;
		}
		left();
	}
		
	
}
