
function submit(){
    
    let name=document.getElementById('name').value;
let email_id=document.getElementById('email_id').value;
    let sub={
        'name':name,
        'email_id':email_id
    }
    axios.post("https://crudcrud.com/api/db106b6a111f474788ed231514e75ba0/appointmentinfo",sub)
    .then((response)=>{
        prin(response.data);
        
    })
    .catch((err)=>{
        console.log(err)
    })
}
function prin(n){
var create=document.createElement('p');
create.id=n;
var butt=document.createElement('button');
butt.innerHTML='delete';
console.log(n)
var idn=n.id;
console.log(idn);
butt.addEventListener("click",function(){
axios.delete(`crudcrud.com/api/db106b6a111f474788ed231514e75ba0/appointmentinfo/${idn}`)
    .then((response)=>{
        removeuserfromscreen(idn)
    })
    .catch((err)=>{
        console.log(err)
    })
})
create.innerHTML=`name : ${n.name}  email id=${n.email_id}`;
document.body.appendChild(create);
document.body.appendChild(butt);
}
axios.get("https://crudcrud.com/api/db106b6a111f474788ed231514e75ba0/appointmentinfo")
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
        prin(response.data[i]);
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })

function removeuserfromscreen(idn){
    const parantNode=document.getElementById('listofUser');
    const childNodeToBeDeleted=document.getElementById(idn);
    if(childNodeToBeDeleted){
        parantNode.removeChild(childNodeToBeDeleted);
    }
}
