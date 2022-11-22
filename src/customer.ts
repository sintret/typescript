type Customer = {
    birthday : Date
}

function getCustomer(id : number) : Customer | null | undefined{

    return id ? {birthday : new Date()} : null;
}


let customer = getCustomer(1)

//optional property accesss operator
console.log(customer?.birthday);

//optional element access operator
customer?.[0];


//optional call
let log : any = null;
log?.('a');