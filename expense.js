const posts=[
    {title:'post one',body:'This is post one',createdat:new Date().getTime()},
    {title:'post two',body:'This is post two',createdat:new Date().getTime()},
];
function getPosts(){
    setInterval(() => {
        let output='';

        posts.forEach((post,index)=>{
            output+=`<li>${post.title}-last updated ${(new Date().getTime()-post.createdat)/1000} seconds ago</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}
function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdat: new Date().getTime()});
        callback()
    },2000);
}
function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdat: new Date().getTime()});
        callback()
    },2000);
}
getPosts();
createPost({title:"post three",body:"this is post three"},getPosts);
create4thPost({title:"post four",body:"This is post four"},getPosts)