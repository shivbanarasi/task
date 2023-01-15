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
createPost({title:"post three",body:"this is post three"
})
createPost({title:"post four",body:"this is post fout"
}).then(()=>{
    getPosts()
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
