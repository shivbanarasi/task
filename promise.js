const posts=[
    {title:'post one',body:'This is post one'},
    {title:'post two',body:'This is post two'},
   
];
function getPosts(){
    
    
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.body}</li>`;
        })
        document.body.innerHTML=output;
    }

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push(post);
             const error=false;
             if(!error){
                resolve();
             }else{
                reject("error:something went wrong");
             }
        },1000);
    });
}
function deletePost(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(posts.length>0){
                const lastElement=posts.pop()
            resolve(lastElement);
             }else{
                reject("Array is empty now");
             }
        },1000);
    });
}
function isempty(){
    if(posts.length==0){
        console.log("no object left");
    }
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        resolve(console.log("last user activity done on : "+new Date()));
    })
}
createPost({title:"post three",body:"this is post three"
})
createPost({title:"post four",body:"this is post fout"
}).then(()=>{
    getPosts()
    updateLastUserActivityTime()
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                    deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('inside catch block',err)
                })
            })
        })
    })

})
})
const promise1=Promise.resolve("hello world");
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"goodbye")
});
Promise.all([promise1,promise2,promise3]).then(values=>{console.log(values)});