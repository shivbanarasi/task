const posts=[
    {title:'post one',body:'This is post one',createdat:new Date().getTime()},
    {title:'post two',body:'This is post two',createdat:new Date().getTime()},
];
async function getPosts(){
    let a=new Promise((resolve,reject)=>{setInterval(() => {
        let output=" ";
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}-last updated ${(new Date().getTime()-post.createdat)/1000} seconds ago</li>`;
        })
        
        resolve(document.body.innerHTML=output);
        
    }, 1000)
    
});
await a;
}
async function createPost(post){
    let a=new Promise ((resolve,reject)=>{setTimeout(()=>{resolve(
        posts.push({...post,createdat: new Date().getTime()})
    )
        
    },2000)})
    await a;
}
async function create4thPost(post){
    let a=new Promise((resolve,reject)=>{setTimeout(()=>{
       resolve( posts.push({...post,createdat: new Date().getTime()}))
    },2000)})
    await a;
}
getPosts();
createPost({title:"post three",body:"this is post three"},getPosts);
create4thPost({title:"post four",body:"This is post four"},getPosts);