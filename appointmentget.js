
function submit(){
    
    let name=document.getElementById('name').value;
let email_id=document.getElementById('email_id').value;
    let sub={
        'name':name,
        'email_id':email_id
    }
    axios.post("https://crudcrud.com/api/0ad9d99966524861adef49181f9dd14d/appointment",sub)
    .then((response)=>{
        prin(response.data);
        
    })
    .catch((err)=>{
        console.log(err)
    })
}
function prin(n){
    var idn=n._id;
var create=document.createElement('p');
create.id=idn;
var butt=document.createElement('button');
butt.id="del"+idn;
butt.innerHTML='delete';
console.log(n)

console.log(idn)

butt.addEventListener("click",function(){
axios.delete(`https://crudcrud.com/api/0ad9d99966524861adef49181f9dd14d/appointment/${idn}`)
    .then((response)=>{
        removeuserfromscreen(idn)
    })
    .catch((err)=>{
        console.log(err)
    })
})
create.innerHTML=`name : ${n.name}  email id=${n.email_id}`;
const editit=document.createElement('button');
editit.id="edit"+idn;
editit.innerHTML="edit";
editit.addEventListener("click",()=>{
    document.getElementById('name').value=n.name;
    document.getElementById('email_id').value=n.email_id;
    return new Promise((resolve,reject)=>{
        resolve=removeuserfromscreen(idn);
    }).then((response)=>{
        submit();
    }).catch(err=>console.log("err"));
})
document.body.appendChild(create);
document.body.appendChild(editit);
document.body.appendChild(butt);
}
axios.get("https://crudcrud.com/api/0ad9d99966524861adef49181f9dd14d/appointment")
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
        prin(response.data[i]);
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })

function removeuserfromscreen(idn){
    const childNodeToBeDeleted=document.getElementById(idn);
    childNodeToBeDeleted.remove();
    document.getElementById('del'+idn).remove();
    document.getElementById('edit'+idn).remove();
    }
   
    
