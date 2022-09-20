
//q1
interface obj1{
    title:string;
    status:boolean;
    id:number;
}

let user:obj1={
    title:"Akash",
    status:true,
    id:1,
}

//q2

const getName=(firstName:string,lastName?:string):string=>{
    return firstName+" "+lastName;
}

let user1:{firstName:string;lastName?:string}={
    firstName: "Akash"
}

let user2:{firstName:string;lastName?:string}={
    firstName: "Akash",
    lastName:"Keshari"
}

getName(user1.firstName)
getName(user2.firstName,user2.lastName)


//q3

interface Address{
houseNumber:string;
street:string;
city:string;
state:string;
postalCode:number;
country:string;
}

let user3:Address={
houseNumber:"SA 123, k-4 sarnath varanasi xyz",
street:"Bela Road",
city:"Varanasi",
state:"Uttar Pradesh",
postalCode:221007,
country:"India"
}


//q4
interface personalData{
Prefix?:string;
phones:Array<number>;
addresses:Array<string>;
email?:string;
firstname:string;
lastname:string;
middlename?:string;
}

let user4:personalData={
Prefix:"Mr.",
phones:[6825645923,45656235623],
addresses:["delhi","jhansi"],
email:"ak@gmail.com",
firstname:"Akash",
lastname:"keshari",
}


//q5

const phonebook=(name:string,phone:number):personalDetail[]=>{
return [{name,phone}]
}

type personalDetail={
 name:string;
 phone:number;
 
}
phonebook("Akash",4564564569)


//q6 HW3

// interface User {
//     type: 'user';
//     name: string;
//     age: number;
//     occupation: string;
// }

// interface Admin {
//     type: 'admin';
//     name: string;
//     age: number;
//     role: string;
// }




