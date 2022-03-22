"use strict";
//create birthday message
let firstName = "Ford";
let birthday = "12/26/86";
let message = `Name: ${firstName} | Date Of Birth: ${birthday}`;
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sum numbers
let sum = 0;
for (let num of numList) {
    sum += num;
}
console.log(sum);
//create contact object
let contact = {
    contactName: 'Bob',
    dob: "02/02/94",
    role: "student"
};
let { contactName, dob, role } = contact;
let contactInfo = `${contactName} is a ${role} learning to code and was born on ${dob}`;
console.log(contactInfo);
