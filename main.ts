import { ExtendedPerson } from "./extended-person.interface";

const person: ExtendedPerson = {
    name: "Costas Bogdan",
    age: 21,
    email: "bogdan.costas@iis.utm.md",
    address: "123Drochia",
    phoneNumber: "060696917",
    occupation: "Software Engineer",
    hobbies: ["Reading", "Coding"]
};

console.log(person.name); 
console.log(person.age); 
console.log(person.occupation);
console.log(person.address);