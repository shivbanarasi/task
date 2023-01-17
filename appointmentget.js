
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
var butt=document.createElement('button');
butt.innerHTML='delete';
console.log(n)
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

