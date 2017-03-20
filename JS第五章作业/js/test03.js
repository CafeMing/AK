window.onload=function(){
	var ul=document.getElementById("ul");
	var lis=document.getElementsByTagName("li");
	var nextbtns=document.getElementsByClassName("next");
	var prebtns=document.getElementsByClassName("pre");
	var down;
	var up;
	var downs=0;
	var ups=0;
	var canclick=true;
	for(var i=0;i<lis.length;i++){
		//方法一、无动作效果
		//点击向下	
			/*nextbtns[i].onclick=function(){
				if(this.parentNode.nextElementSibling==undefined){
					return;
				}
				ul.insertBefore(this.parentNode,this.parentNode.nextElementSibling.nextElementSibling);	
			}
		//点击向上
			prebtns[i].onclick=function(){
				if(this.parentNode.previousElementSibling==undefined){
					 return;
				}
				ul.insertBefore(this.parentNode,this.parentNode.previousElementSibling);	
			}*/
			
		//方法二、有动作效果(计时器)
		//点击向下
			/*nextbtns[i].onclick=function(){
				clearInterval(down);
				clearInterval(up);
				var parent=this.parentNode;
				var nextparent=parent.nextElementSibling;
				if(nextparent==undefined){
					return;
				}
				//元素向下移动
				down=setInterval(function(){
					downs+=5;
					if(downs>50){
						downs=50;
						parent.style.top=downs+'px';
						clearInterval(down);
						parent.style.top=0+'px';
						ul.insertBefore(parent,nextparent.nextElementSibling);
						downs=0;
						return;
					}
					parent.style.top=downs+'px';
				},40)
				//元素向上移动
				up=setInterval(function(){
					ups-=5;
					if(ups<-50){
						ups=-50;
						nextparent.style.top=ups+'px';
						clearInterval(up);
						nextparent.style.top=0+'px';
						ul.insertBefore(parent,nextparent.nextElementSibling);
						ups=0;
						return;
					}
					nextparent.style.top=ups+'px';
				},40)
			}
			//点击向下
			prebtns[i].onclick=function(){
				clearInterval(down);
				clearInterval(up);
				var parent=this.parentNode;
				var preparent=parent.previousElementSibling;
				if(preparent==undefined){
					return;
				}
				//元素向上移动
				up=setInterval(function(){
					ups-=5;
					if(ups<-50){
						ups=-50;
						parent.style.top=ups+'px';
						clearInterval(up);
						parent.style.top=0+'px';
						ul.insertBefore(parent,preparent);
						ups=0;
						return;
					}
						parent.style.top=ups+'px';
				},40)
				//元素向下移动
				down=setInterval(function(){
					downs+=5;
					if(downs>50){
						downs=50;
						preparent.style.top=downs+'px';
						clearInterval(down);
						preparent.style.top=0+'px';
						ul.insertBefore(parent,preparent);
						downs=0;
						return;
					}
					preparent.style.top=downs+'px';
				},40)
			}*/
			
			//方法三、有动作效果(move)
			//点击向下
			nextbtns[i].onclick = function () {
				if(!canclick){ 
					return;    //判断运动是否完成了
				}
				canclick=false;
		        var parent=this.parentNode;
		        var nextparent=parent.nextElementSibling;
		        
		        if(parent.nextElementSibling==undefined){	//判断元素是否在最下面
		        	canclick=true;
		        	return;
		        }
		        //元素向下移动
		        move(parent, {top:50}, 1000, "easeOut", function () {
		        	parent.style.top=0;
		           	ul.insertBefore(parent,nextparent.nextElementSibling);
		        });
				//元素向上移动
		        move(nextparent, {top:-50}, 1000, "easeOut", function () {
		            nextparent.style.top=0;
		          	canclick=true;
		        });
		        
       		}
			//点击向上
            prebtns[i].onclick=function(){
            	if(!canclick){ 
					return; //判断运动是否完成了
				}
            	canclick=false;
            	var parent=this.parentNode;
            	var preparent=parent.previousElementSibling;
            	if(preparent==undefined){   //判断元素是否在最上面 
            		canclick=true;
            		return;
            	}
            	//元素向上移动
            	move(parent,{top:-50},1000,'easeOut',function(){
            		parent.style.top=0;
            		ul.insertBefore(parent,preparent);
            	})
            	//元素向下移动
            	move(preparent,{top:50},1000,'easeOut',function(){
            		preparent.style.top=0;
            		canclick=true;
            	})
            }	
	}
}
