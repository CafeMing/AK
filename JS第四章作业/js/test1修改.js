window.onload=function(){
	var btn=document.querySelectorAll("input");
	var box2=document.getElementById("box2");
	var check=document.getElementById("check");
	var replace=document.getElementById("change");
	var checktext=document.querySelector("#box3 span:nth-of-type(1)");
	var replacetext=document.querySelector("#box3 span:nth-of-type(2)");
	var checkbtn=document.getElementById("btncheck1");
	var changebtn=document.getElementById("btnchange1");
	
	//点击展开按钮
	btn[0].onclick=function(){
		btn[1].className='btn'+' '+'active1';
		btn[2].className='btn'+' '+'active2';
	}
	//点击右边的查找按钮,以及查找的文字，对应的查找样式出来
	btn[1].onclick=checktext.onclick=function(){
		checktext.className='changebg';
		replacetext.className='';
		box3.className='box3active';
		check.className='show';
		replace.className='dissapear';
	}
	//点击右边的替换按钮，以及替换的文字，对应的替换样式出来
	btn[2].onclick=replacetext.onclick=function(){
		checktext.className='';
		replacetext.className='changebg';
		box3.className='box3active';
		check.className='dissapear';
		replace.className='show';
		cleancolor();
	}
	
	
	//点击查找按钮
	checkbtn.onclick=function(){
		var text1=check.querySelector('input');
		var val1=text1.value;
		cleancolor();
		//1.判断是否有内容输入
		if(!val1){
			alert('请出入内容');
			return
		}
		//2.判断输入的内容是否正确
		if(box2.innerHTML.indexOf(val1)==-1){
			alert('你输入的内容找不到');
			text1.value='';
			return;
		}
		//3.找到内容并且将内容背景变红
		box2.innerHTML=box2.innerHTML.split(val1).join('<span style="background:red">'+val1+'</span>');
		text1.value='';
	};
	
	
	//点击替换按钮
	changebtn.onclick=function(){
		var text2=replace.querySelectorAll('input[type="text"]');
		var val2=text2[0].value;
		var val3=text2[1].value;
		//1.判断是否输入了内容
		if(!val2){
			alert('请输入内容');
			return;
		}
		//2.判断输入的内容是否正确
		if(box2.innerHTML.indexOf(val2)==-1){
			alert('你输入的内容找不到');
			text2[0].value='';
			return;
		}
		//3.当第二个输入栏为空
		if(!val3){
			var delet=confirm('是否要删除输入的内容');  
			if(!delet){
				text2[0].value='';
				return;
			}
		}
		//4.找到内容并且改变内容
		box2.innerHTML=box2.innerHTML.split(val2).join(val3);
		text2[0].value='';
		text2[1].value='';
	};
	//将上一次颜色的变化去掉
	function cleancolor(){
		var color='<span style="background:red">';
		if(box2.innerHTML.indexOf(color)!=-1){
			box2.innerHTML=box2.innerHTML.split(color).join('');   //截取掉span标签的头，它的结束标签也会跟着被截取掉
		}	
	};
	
}

	//通过结合HTML添加class的属性，在js改变元素的className
	//confirm 和alert一样弹出框，不过有确定和取消两个选项，  点击确定返回true 点击取消返回false
	//innerHTML里面写有标签的话，标签的效果会出来，但是标签不会内容区域显示，但是确实存在内容区域里面的。
	//当多个事件执行的内容相同的时候，可以将事件合并在一起写