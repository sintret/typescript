type Employee = {
    readonly id:number,
    name:string,
    poition? : string,
    birthDate? : (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "james"
}

employee.name = "apa"
employee.birthDate = (date) => {
    console.log(date)
}