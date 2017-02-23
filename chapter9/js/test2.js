window.onload=function(){
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	var time=document.getElementById("time");
	var todayDate=document.getElementById("date");
	var setPre=document.getElementById("pre");
	var setNext=document.getElementById("next");
	var setDate=document.querySelector('#set span');
	//要做一个日历， 首先的事情就是要知道 
	//1.这个月有多少天
	   //通过把月数加一，然后将日期写成0 就可以知道这个月有多少天
	//2.这个月的第一天是星期几
	
	var today=new Date();
	
	aaa();
	function aaa(){
		//获取到这个月一共多少天
		function dayStr(year,month){
			return new Date(year,month,0).getDate();
		}
		
		//获取到这个月第一天星期几
		function firstWeek(year,month){
			return new Date(year,month,1).getDay();
		}
		
		//上一个月最后一天
		var laststr=dayStr(today.getFullYear(),today.getMonth());
		
		//这个月最后一天
		var daystr=dayStr(today.getFullYear(),today.getMonth()+1);
		
		//这个月的第一天对应的星期
		var firstweek=firstWeek(today.getFullYear(),today.getMonth());
		//console.log(firstweek); 3
		
		//让数字从对应的星==0?7:firstweek;
		var next=1;//期开始排列
		firstweek=firstweek
		var str='';
		for(var n=0;n<42;n++){
		 	if(n<firstweek){
		 		str='<span class="none">'+(laststr--)+'</span>'+str;
		 	}else if(n>=firstweek+daystr){
		 		str+='<span class="none">'+(next++)+'</span>'
		 	}else{
		 		var ac=(n-firstweek+1)==today.getDate()?'active':'';
		 		str+='<span class="'+ac+'">'+(n-firstweek+1)+'</span>';
		 	}
		}
		box2.innerHTML=str;
	}
	
	
	//获取今天的时 分 秒
	setInterval(function(){
		var today=new Date();
		var hour=today.getHours();
		var min=today.getMinutes();
		var second=today.getSeconds();
		hour<10?hour='0'+hour:hour;
		min<10?min='0'+min:min;
		second<10?second='0'+second:second;
		time.innerHTML=hour+':'+min+':'+second;
	},1000)
	
	//获取日期
	function weekStr(v){
		return ['日','一','二','三','四','五','六'][v];
	}
	todayDate.innerHTML=today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日'+'星期'+weekStr(today.getDay());
	
	//点击以及时间的变化 
	setDate.innerHTML=today.getFullYear()+'年'+(today.getMonth()+1)+'月';
	
	//点击上一个月份
	setPre.onclick=function(){
		//1.当点击下去的时候 需要改变月份
		//2.当月份少于1的时候年份也要减
		today.getMonth()-1;
		today.setMonth(today.getMonth()-1);
		setDate.innerHTML=today.getFullYear()+'年'+(today.getMonth()+1)+'月';
		aaa();
	}
	
	//点击下一个月份
	setNext.onclick=function(){
		//1.当点击下去的时候 需要改变月份
		//2.当月份少于1的时候年份也要减
		today.getMonth()+1;
		today.setMonth(today.getMonth()+1);
		setDate.innerHTML=today.getFullYear()+'年'+(today.getMonth()+1)+'月';
		aaa();
	}
}
