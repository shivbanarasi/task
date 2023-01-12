console.log(document.getElementById('lname').value)

var j=0;
var k=1;

function sub(){
   
    let t=[document.getElementById('money').value,document.getElementById('fname').value,document.getElementById('lname').value];
    localStorage.setItem(j, JSON.stringify(t));

    var s=JSON.parse(localStorage.getItem(j))

    const para=document.createElement("p");
    para.id=j;
    para.innerHTML=j+" . ";
    for(var i=0;i<s.length;i++){
        para.innerHTML+=s[i]+"-";
    
    }
    const edit=document.createElement('button');
    edit.innerHTML="edit";
    edit.id=j;
    edit.onclick=function editit(){
      
    };
    document.body.appendChild(para);
    document.getElementById(j).appendChild(edit);
    const del=document.createElement('button');
    del.innerHTML="delete";
    del.id=j;
    let ele=document.getElementById(j);

    //console.log(localStorage.key(ele.id));
    del.onclick=function deleteit(){
        console.log(ele.id);
        ele.parentElement.removeChild(ele);
        localStorage.removeItem(localStorage.key(ele.id));

        };
    document.getElementById(j).appendChild(del);

    j++;
    
}





