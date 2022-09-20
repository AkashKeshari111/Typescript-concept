let a: number = 10;
let b: string = "Akash";
let c: boolean = true;
let d: null = null;
let e: undefined;

let f1: number[] = [1, 2, 3, 4];
let f2: Array<number> = [1, 2, 3, 4];

let g1: string[] = ["abcd", b, "dsjh", "jkshk"];
let g2: Array<string> = ["abcd", b, "dsjh", "jkshk"];

let g3: Array<string | number> = ["abcd", b, 1, 3, 55];

let g4: Array<string | number | boolean | Array<number>> = [
  "abjhdsd",
  34,
  c,
  b,
  [12, 23, a],
];

// object {}

let h1: { loading: boolean; error: boolean; data: [] } = {
  loading: true,
  error: true,
  data: [],
};

// Record  // datatype of values
//datatype is same here
let h2: Record<string, boolean> = {
  loading: true,
  error: true,
};

let i1: Array<Record<string,string>> = [
    { name: "Akash",  place: "India" },
    { name: "Akash",  place: "USA" },
  ];

//array object 
let i2: Array<{
  name: string;
  age: number;
  place: string;
}> = [
  { name: "Akash", age: 24, place: "India" },
  { name: "Akash", age: 24, place: "USA" },
];




//return function 

const add = (a: number, b: number): number =>{
    return a+b
}

 add(1,2);


 // array of array

 let j1:Array<number[]>=[    
    [1,2],
    [2,3],
    [4,5],
 ]


 let j2:number[][]=[    
    [1,2],
    [2,3],
    [4,5],
 ]


 //check spelling case sensitive

 let country:Array<"India" | "China"> = [
    "India",
    "China",
 ]

 // using type

 type Country="India" | "China";

 let country2:Array<Country> = [
    "India",
    "China",
    
 ]


 // all mendatory

 type User = {
    name:string;
    age:number;
    email:string;
    gender:"Male" | "Female";
 }

 let users:Array<User> = [
    {name:"Akash" , age: 1, email :"sds" ,gender:"Male"},
   
 ]

//gender optional

 type User2 = {
    name:string;
    age?:number;
    email:string;
    gender?:"Male" | "Female";
 }

 let users2:Array<User2> = [
    {name:"Akash" , age: 1, email :"sds" ,gender:"Male"},
    {name:"Prakash" , age: 2, email :"sds" },
   
 ]



 // enum

 enum Gender {
    "Male",
    "Female",
    "Trans"
 }


 type User3 = {
    name:string;
    age?:number;
    email:string;
    gender?:Gender;
 }

 let users3:Array<User3> = [

    {name:"Prakash" , email :"sds", gender: Gender.Trans },
    {name:"Prakash" , age: 2, email :"sds", gender:Gender.Female }
 ]


// tuple -- it restrict the element only allow those who have in the tuple syntax

type K =[string,number,number?]  // tuple syntax

 let k1: K[]=[
    ["a",1],
    ["b",1,3],
    ["c",1],
    ["d",2]
 ]



 //void

 const doReturnAnything=(a:number,b:number):void=>{
  console.log(a+b)
 }