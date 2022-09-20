
//q1
let Name:string ="Akash";

//q2

let age:number=22;


//q3

let isFetching:boolean=true;


//q4

let array1:number[]=[1,2,3,4,5,6,7]
//or
let array2:Array<number>=[1,2,3,4,5,6,7]


//q5
let arrayString1:string[]=["abc","a","b",Name]
//or
let arrayString2:Array<string>=["abc","a","b",Name]



//q6

type tuple=[string,boolean];

let value:tuple[]=[
    ["Akash",true],
    ["Nachiket",false]
]


//q7

enum details{
    "User",
    "SuperUser",
    "Admin",
    "SuperAdmin"
}


//q8

const multiple=(x:number,y:number):number=>{
  return x*y;
}

multiple(10,27)

//q9

const divide=(x:number,y:number):number=>{
    return x/y;
}

divide(8,4)


//q10

const myName=(name:string):void=>{
   console.log(name)
}


