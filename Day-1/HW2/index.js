var user = {
    title: "Akash",
    status: true,
    id: 1
};
//q2
var getName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
var user1 = {
    firstName: "Akash"
};
var user2 = {
    firstName: "Akash",
    lastName: "Keshari"
};
getName(user1.firstName);
getName(user2.firstName, user2.lastName);
var user3 = {
    houseNumber: "SA 123, k-4 sarnath varanasi xyz",
    street: "Bela Road",
    city: "Varanasi",
    state: "Uttar Pradesh",
    postalCode: 221007,
    country: "India"
};
var user4 = {
    Prefix: "Mr.",
    phones: [6825645923, 45656235623],
    addresses: ["delhi", "jhansi"],
    email: "ak@gmail.com",
    firstname: "Akash",
    lastname: "keshari"
};
//q5
var phonebook = function (name, phone) {
    return [{ name: name, phone: phone }];
};
phonebook("Akash", 4564564569);
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
