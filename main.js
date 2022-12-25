let id="no";
//localStorage.clear();

function manageDataname(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	if(name==''){
		document.getElementById('msg').innerHTML='Please enter your name';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[name];
				setCrudData(data);
			}else{
				arr.push(name);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
	
	}
}
function manageDataemail(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('email').value;
	if(name==''){
		document.getElementById('msg').innerHTML='Please enter your name';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[email];
				setCrudData(data);
			}else{
				arr.push(email);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]=email;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('email').value='';
	}
}
function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}