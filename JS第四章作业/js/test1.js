window.onload=function(){
	var btn=document.querySelectorAll("input");
	var box2=document.getElementById("box2");
	var box4=document.getElementById("box4");
	var textcheck=document.querySelector("#box3 span:nth-of-type(1)");
	var change=document.querySelector("#box3 span:nth-of-type(2)");
	var box2content=box2.innerHTML;
	
	//点击展开按钮
	btn[0].onclick=function(){
		btn[1].className='btn'+' '+'active1';
		btn[2].className='btn'+' '+'active2';
	}
	//点击右边的查找按钮
	btn[1].onclick=function(){
		box3.className='box3active';
		boxcheck();
	}
	//点击右边的替换按钮
	btn[2].onclick=function(){
		box3.className='box3active';
		boxchange();
	}
	//点击查找文字
	textcheck.onclick=function(){
		boxcheck();
	}
	change.onclick=function(){
		boxchange();
	}
	function boxcheck(){
		change.className='';
		textcheck.className='changebg';
		box4.innerHTML=	'<input type="text" id="textcheck"/>'+
						'<button id="btncheck1">查找</button>';
		var buttoncheck=box4.querySelector('button');
		var inputcheck=box4.querySelector('input');
		//查找文字
		buttoncheck.onclick=function(){
			box2.innerHTML=box2content;
			var checkvalue=inputcheck.value;
			box2.innerHTML=box2.innerHTML.replace(new RegExp("("+checkvalue+")",'g'),'<span style="background:red">$1</span>');
		}
	}	
	function boxchange(){
		change.className='changebg';
		textcheck.className='';
		box4.innerHTML='<input type="text" id="textcheck"/>'+
  						'<input type="text" id="textchange"/>'+
  						'<button id="btncheck2">替换</button>';
		var buttonchange=box4.querySelector('button');
		var inputcheck=box4.querySelector("#textcheck");
		var inputchange=box4.querySelector("#textchange");
		//替换文字
		buttonchange.onclick=function(){
			box2.innerHTML=box2content;
			var checkvalue=inputcheck.value;
			var changevalue=inputchange.value;
			box2.innerHTML=box2.innerHTML.replace(new RegExp("("+checkvalue+")",'g'),'<span style="background:red">'+changevalue+'</span>');
		}
	}

}

	//通过结合HTML添加class的属性，在js改变元素的className
	//confirm 和alert一样弹出框，不过有确定和取消两个选项，  点击确定返回true 点击取消返回false
	//innerHTML里面写有标签的话，标签的效果会出来，但是标签不会内容区域显示，但是确实存在内容区域里面的。