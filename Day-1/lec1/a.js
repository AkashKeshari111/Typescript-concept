var a = 10;
var b = "Akash";
var c = true;
var d = null;
var e;
var f1 = [1, 2, 3, 4];
var f2 = [1, 2, 3, 4];
var g1 = ["abcd", b, "dsjh", "jkshk"];
var g2 = ["abcd", b, "dsjh", "jkshk"];
var g3 = ["abcd", b, 1, 3, 55];
var g4 = [
    "abjhdsd",
    34,
    c,
    b,
    [12, 23, a],
];
// object {}
var h1 = {
    loading: true,
    error: true,
    data: []
};
// Record  // datatype of values
//datatype is same here
var h2 = {
    loading: true,
    error: true
};
var i1 = [
    { name: "Akash", place: "India" },
    { name: "Akash", place: "USA" },
];
//array object 
var i2 = [
    { name: "Akash", age: 24, place: "India" },
    { name: "Akash", age: 24, place: "USA" },
];
//return function 
var add = function (a, b) {
    return a + b;
};
add(1, 2);
// array of array
var j1 = [
    [1, 2],
    [2, 3],
    [4, 5],
];
var j2 = [
    [1, 2],
    [2, 3],
    [4, 5],
];
//check spelling case sensitive
var country = [
    "India",
    "China",
];
var country2 = [
    "India",
    "China",
];
var users = [
    { name: "Akash", age: 1, email: "sds", gender: "Male" },
];
var users2 = [
    { name: "Akash", age: 1, email: "sds", gender: "Male" },
    { name: "Prakash", age: 2, email: "sds" },
];
// enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Trans"] = 2] = "Trans";
})(Gender || (Gender = {}));
var users3 = [
    { name: "Prakash", email: "sds", gender: Gender.Trans },
    { name: "Prakash", age: 2, email: "sds", gender: Gender.Female }
];
var k1 = [
    ["a", 1],
    ["b", 1, 3],
    ["c", 1],
    ["d", 2]
];
//void
var doReturnAnything = function (a, b) {
    console.log(a + b);
};
