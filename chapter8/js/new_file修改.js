window.onload=function(){
	var box=document.querySelectorAll("div[class]");
	  //console.log(box);
	var sumNumb=document.querySelector('span[class="sumNumb"]');
		//console.log(sumNumb);
	var zongJia=document.querySelector('span[class="zongJia"]');
	   //console.log(zongJia);
	var zuiGui=document.querySelector('span[class="zuiGui"]');
	//console.log(zuiGui);
	var reduce=[];  //减少事件数组
	var add=[];  	//增加事件数组
	var numb=[];	//数量
	var danJia=[];	//单价
	var price=[];	//小计
	for(n=0;n<box.length;n++){
		//console.log(box[n]);
		reduce[n]=box[n].querySelector('input[class="reduce"]');
		//console.log(reduce);
		add[n]=box[n].querySelector('input[class="add"]');
		//console.log(add);
		numb[n]=box[n].querySelector('span[class="numb"]');
		//console.log(numb);
		danJia[n]=box[n].querySelector('span[class="danJia"]');
		//console.log(danJia);
		price[n]=box[n].querySelector('span[class="price"]');
		console.log(price);
		(function(n){
			var i=0;
			add[n].onclick=function(){
				i++;
				numb[n].innerHTML=i;
				price[n].innerHTML=(parseFloat(danJia[n].innerHTML)*i).toFixed(2)+'元';
				result();
			}
			reduce[n].onclick=function(){
				i--
				if(i<0){
					i=0;
				}
				numb[n].innerHTML=i;
				price[n].innerHTML=(parseFloat(danJia[n].innerHTML)*i).toFixed(2)+'元';
				result();
			}
		})(n);
	}
	function result(){
		var sum=0;
		var total=0;
		var max=0;
		for(n=0;n<box.length;n++){
			sum=sum+parseFloat(numb[n].innerHTML);
			total=total+parseFloat(price[n].innerHTML);
			if(parseFloat(numb[n].innerHTML)!=0){
				if(max<parseFloat(danJia[n].innerHTML)){
					max=parseFloat(danJia[n].innerHTML);
				}
			}
		}
		sumNumb.innerHTML=sum;	
		zongJia.innerHTML=total.toFixed(2)+'元';
		zuiGui.innerHTML=max;
	}
}
