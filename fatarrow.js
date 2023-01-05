var count=0

class student{

    constructor(name, age,phoneNo,boardMarks){

        this.name=name;

        this.age=age;

        this.phoneNo=phoneNo;

        this.boardMarks=boardMarks;

        count++;

    }

    printf(){

        console.log("name : "+this.name+" age : "+this.age);

    }

    egligible(){

        if(this.boardMarks>40){

            console.log("egligible");

        }

        else{

            console.log("not egligible");

        }

    }

    countn(){

        console.log(count);

    }
    setplacementAge(placeage){
        return(minmark)=>{
            if(this.boardMarks>minmark && this.age>placeage){
                console.log(this.name+" is ready for placement");
            }
            else{
                console.log(this.name+" is not ready for placement");
            }
        }
    }

}

const stu1=new student('krish',25,238439857,50);

const stu2=new student('jit',23,34544653,30);

const stu3=new student('jon',22,238433457,20);

const stu4=new student('ajit',21,34534653,90);

const stu5=new student('akbar',24,2384437,40);







stu2.printf();

stu1.egligible();

stu2.egligible();

stu3.egligible();

stu1.countn();

stu1.setplacementAge(18)(40);
stu2.setplacementAge(18)(40);
stu3.setplacementAge(18)(40);
stu4.setplacementAge(18)(40);
stu5.setplacementAge(18)(40);