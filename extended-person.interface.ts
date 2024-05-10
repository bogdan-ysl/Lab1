import { Person } from "./person.interface";

interface ExtendedPerson extends Person {
    occupation: string;
    hobbies: string[];
}

export { ExtendedPerson };
