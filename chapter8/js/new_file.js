window.onload=function(){
	var numb=document.querySelectorAll('span[class="numb"]');
	var total=document.querySelectorAll('span[class="price"]');
	var	price=document.querySelectorAll('span[class="danJia"]');
	var max=document.querySelector('span[class="max"]');
	var all=document.querySelector('span[class="zongJia"]');
	var reduce=document.querySelectorAll('input[class="reduce"]');
	var add=document.querySelectorAll('input[class="add"]');
	var box=document.querySelectorAll('div[class]');
	var danJia=[34,24,10,1.5];
	var x=[0,0,0,0];
	var n=0;
	//设置数量
	numb[0].innerHTML=n;
	numb[1].innerHTML=n;
	numb[2].innerHTML=n;
	numb[3].innerHTML=n;
	numb[4].innerHTML=n;
	//设置单价
	price[0].innerHTML=danJia[0];
	price[1].innerHTML=danJia[1];
	price[2].innerHTML=danJia[2];
	price[3].innerHTML=danJia[3];
	//设置价格
	total[0].innerHTML=danJia[0]*n;
	total[1].innerHTML=danJia[1]*n;
	total[2].innerHTML=danJia[2]*n;
	total[3].innerHTML=danJia[3]*n;
	//单价最贵
	max.innerHTML=0;
	//总价
	all.innerHTML=0;
	for(n=0;n<box.length;n++){
		(function (n){
			add[n].onclick=function(){
				x[n]++;
				numb[n].innerHTML=x[n];	
				console.log(x[n]);
				total[n].innerHTML=danJia[n]*x[n];
				//numb[4].innerHTML=parseFloat(numb[4].innerHTML)+1;
				result();  //这里为什么要写成函数的形式进来。就是要造成一种闭包现象、
			}
			reduce[n].onclick=function(){
				x[n]--;
				if(x[n]<0){
					alert('已经是0了');
					x[n]=0;
				}else{
					numb[n].innerHTML=x[n];
					total[n].innerHTML=danJia[n]*x[n];
					//numb[4].innerHTML=parseFloat(numb[4].innerHTML)-1;
					result();
				}
			}
		})(n);
		function result(){
			var allPrice=0;
			var maxPrice=[];
			var allNumb=0;
			var i=0;
				for(n=0;n<box.length;n++){
					allNumb+=x[n];
					allPrice+=danJia[n]*x[n];
					all.innerHTML=allPrice;
					if(x[n]!=0){
						maxPrice[i]=danJia[n];
						i++;
					}
				}
				numb[4].innerHTML=allNumb;
				max.innerHTML=maxPrice[0];
		}
	}
}
