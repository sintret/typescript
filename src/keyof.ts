import { proxy } from "./proxy";

type Person = {
    name : string,
    location : string,
    age:number
}

function logAccesss(Object:Person,key:string) : Person {
    return proxy(Object,key)
}

const john : Person = logAccesss({
    name : "John",
    location: "Jakarta",
    age : 20
}, 'age');

john.age = john.age + 1;