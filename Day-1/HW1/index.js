//q1
var Name = "Akash";
//q2
var age = 22;
//q3
var isFetching = true;
//q4
var array1 = [1, 2, 3, 4, 5, 6, 7];
//or
var array2 = [1, 2, 3, 4, 5, 6, 7];
//q5
var arrayString1 = ["abc", "a", "b", Name];
//or
var arrayString2 = ["abc", "a", "b", Name];
var value = [
    ["Akash", true],
    ["Nachiket", false]
];
//q7
var details;
(function (details) {
    details[details["User"] = 0] = "User";
    details[details["SuperUser"] = 1] = "SuperUser";
    details[details["Admin"] = 2] = "Admin";
    details[details["SuperAdmin"] = 3] = "SuperAdmin";
})(details || (details = {}));
//q8
var multiple = function (x, y) {
    return x * y;
};
multiple(10, 27);
//q9
var divide = function (x, y) {
    return x / y;
};
divide(8, 4);
//q10
var myName = function (name) {
    console.log(name);
};
