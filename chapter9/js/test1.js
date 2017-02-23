window.onload=function(){
	var ul=document.querySelector('#box1 ul');
	var bg=document.getElementById("box2");
	var title=document.getElementById("numb");
	var describe=document.getElementById("text");
	var time;
	var n=0;
	var argu=[                                         //对象在数组不用加双引号
			{numb:"第一张",des:"摩托车零件"},
			{numb:"第二张",des:"复古摩托欣赏"},
			{numb:"第三张",des:"本田六缸摩托"},
			{numb:"第四张",des:"复古摩托欣赏"},
	];
	
	//灰色背景内的文字
	title.innerHTML=argu[n].numb;
	describe.innerHTML=argu[n].des;
	 //将图片复制多一份 
	  //ul.innerHTML=ul.innerHTML+ul.innerHTML;
	  ul.innerHTML+=ul.innerHTML; 
	  
	  var li=ul.querySelectorAll('li'); //这里获取到的是添加后的li
	  //console.log(parseFloat(getComputedStyle(li[0]).width));  // 640
	  //console.log(ul.innerHTML);
	 //让所有的li在同一行显示
	 var w=parseFloat(getComputedStyle(li[0]).width);
	  ul.style.width=w*li.length+'px';  //注意加上单位
		
	  /*
	   * 运动步骤
	   * 1.让下面的灰色背景先下去
	   * 2.然后走一张图片的距离
	   * 3.灰色背景再升上来
	   * 4.接下的的步骤就是重复上面的三个步骤。
	   * 5.判断
	   */
	  
	  time=setInterval(action,3000); //用定时器将步骤重复
	  function action(){
	  	n++;
		move(bg,{bottom:-100},600,'linear',function(){
		 	move(ul,{left:-w*n},1000,'linear',function(){
		 		if(n==li.length/2){
					//clearInterval(time);
					ul.style.left=0;
					n=0;
				}
		 		title.innerHTML=argu[n].numb;
		 		describe.innerHTML=argu[n].des;
		 		move(bg,{bottom:0},600,'linear')
		 	})
		});	
		//写在一个定时器里面的运动只能按照回调函数一步一步写。
		//如果另外从写 一个move()，就不会运动了。
		
	  }
	  
	 
}
