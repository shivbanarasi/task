console.log("person1:shows ticket");
console.log("person2:shows ticket");
const premovie=async()=>{
const promisewifebringtic=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
});
const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
const getbutter= new Promise((resolve,reject)=>{
    resolve(`butter`);
})
const getcolddrink= new Promise((resolve,reject)=>{
    resolve(`cold drink`);
})
let ticket=await promisewifebringtic;
console.log("wife:i have the tics");
console.log('husband: we should go in');
console.log('wife:i need popcorn');
let popcorn=await getpopcorn;
console.log(`husband:i got some${popcorn}`);
console.log("husband:now we should go in");
console.log("wife:not now i want butter also");
let butter=await getbutter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log(`husband:anything else`);
console.log(`wife:bring me cold drink`);
let colddrink=await getcolddrink;
console.log(`husband:i got your ${colddrink}`);
console.log(`wife:lets go in we are getting late`)
return ticket;
}



premovie().then((m)=>{
    console.log(`person3:shows ${m}`);
});
console.log("person4:shows ticket");
console.log("person5:shows ticket");