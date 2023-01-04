let multiply=function(x,y){
    console.log(x*y);
}
let multiplybytwo=multiply.bind(this,2);
multiplybytwo(5); 

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(4);

//solution of question 1,2,3

var obj1={"key":1};

var obj2={"key":3};

let add=function(a,b,c){

    return this.key + a + b + c;

}

var arr=[1,2,3];

console.log(add);

console.log(add.call(obj1,1,2,3));

console.log(add.call(obj2,2,3,5));

console.log(add.apply(obj2,arr));

console.log(add.apply(obj1,arr));

console.log(add.bind());

console.log(add.bind(obj1).call(obj1,1,2,3));



//solution of question 4





var student={

    "age":20

}

var print=function(){

    return this.age;

}

console.log(print.call(student))

console.log(print.apply(student));

console.log(print.bind(student).call(student));