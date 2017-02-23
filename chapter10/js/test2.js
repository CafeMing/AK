window.onload=function(){
	var left=document.getElementById("left");
	var length=document.getElementById("length");
	var show=document.getElementById("show");
	var btn=document.querySelector("button");
	var right=document.getElementById("right");
	var color=document.querySelectorAll("#color span");
	var numb=document.getElementById("numb");
	
	//获取字符串,并且去掉首位空字符
	var leftStr=left.innerHTML.trim();
	//把字符串变成数组
	var leftArry=leftStr.split('');
  	//获取数组的长度
  	var arryLength=leftArry.length;
  	length.innerHTML=arryLength;
	show.innerHTML=0;
  	var n=0;
  	var c='';
  	var t1;
  	var x=0;
  	btn.onclick=function(){
  		numb.className="active";
  		clearInterval(t1);
	t1=setInterval(function(){
  			n++;
  			c+='<span style="color:rgb('+Math.round(Math.random()*(225-1) + 1)+','+Math.round(Math.random()*(225-1) + 1)+','+Math.round(Math.random()*(225-1) + 1)+'">'+leftArry.shift()+'</span>';
  			right.innerHTML=c;
  			left.innerHTML=leftArry.join('');
  			show.innerHTML=n;
  			
 			switch (x){
  				case 0:
  					color[0].style.background="red";
  					color[6].style.background="red";	
  					break;
  				case 1:
  					color[1].style.background="orange";
  					break;
  				case 2:
  					color[2].style.background="yellow";
  					break;
  				case 3:
  					color[3].style.background="green";
  					break;
  				case 4:
  					color[4].style.background="blue";
  					break;
  				case 5:
  					color[5].style.background="aquamarine";
  					break;
  				case 6:
  					color[0].style.background="red";
  					color[1].style.background="red";
  					color[2].style.background="red";
  					color[3].style.background="red";
  					color[4].style.background="red";
  					color[5].style.background="red";
  					color[6].style.background="purple";	
  					break;
  			}
 			x++;
 			if(x>6){
 				x=0;
 			}
 			if(leftArry.length==0){
  				clearInterval(t1);
  			}
  		},50)
  		
  	}
}
