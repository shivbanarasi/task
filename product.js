function submit(){
    let sub={
        'price':document.getElementById('sellprice').value,
        'pname':document.getElementById('proname').value,
        'category':document.getElementById('category').value,
    }
    axios.post("https://crudcrud.com/api/d440ffed9ba842049ed04f56222ef790/product_info",sub)
    .then((response)=>{
        prin(response.data);
        
    })
    .catch((err)=>{
        console.log(err)
    })
}
function prin(n){
    var idn=n._id;
var create=document.createElement('ul');
create.id=idn;
var butt=document.createElement('button');
butt.id="del"+idn;
butt.innerHTML='delete';
console.log(n)

console.log(idn)

butt.addEventListener("click",function(){
axios.delete(`https://crudcrud.com/api/d440ffed9ba842049ed04f56222ef790/product_info/${idn}`)
    .then((response)=>{
        removeuserfromscreen(idn)
    })
    .catch((err)=>{
        console.log(err)
    })
})
create.innerHTML=`product name : ${n.pname}  price = Rs. ${n.price} belongs to = ${n.category} category`;
document.body.appendChild(create);
document.getElementById(idn).appendChild(butt);
}
axios.get("https://crudcrud.com/api/d440ffed9ba842049ed04f56222ef790/product_info")
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