window.onload=function(){
	var but=document.querySelectorAll("input");
	var ul=document.querySelector("ul");
	var lis=document.querySelectorAll('li');
	//lis[0] 是需要处理的元素
	var target=lis[0];
	//点击上一个
	but[0].onclick=function(){
		if(!target.previousElementSibling){
			ul.appendChild(target);
			return ;
		}
		ul.insertBefore(target,target.previousElementSibling);
	}
	//点击下一个
	but[1].onclick=function(){
		if(!target.nextElementSibling){
			ul.insertBefore(target,ul.firstElementChild);
			return;
		}
		ul.insertBefore(target,target.nextElementSibling.nextElementSibling);
	}
	//回顶部
	but[2].onclick=function(){
		ul.insertBefore(target,ul.firstElementChild);
	}
	//到底部
	but[3].onclick=function(){
		ul.appendChild(target);
	}
	
}
