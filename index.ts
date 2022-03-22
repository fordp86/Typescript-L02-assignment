//create birthday message
let firstName: string = "Ford";
let birthday: string = "12/26/86";
let message: string = `Name: ${firstName} | Date Of Birth: ${birthday}`;

let numList:  number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum numbers
let sum: number = 0;
for(let num of numList){
    sum += num;
}
console.log(sum);

//create contact object
let contact = {
    contactName: 'Bob',
    dob: "02/02/94",
    role: "student"
}

let{contactName, dob, role} = contact;
let contactInfo: string =`${contactName} is a ${role} learning to code and was born on ${dob}`;
console.log(contactInfo);