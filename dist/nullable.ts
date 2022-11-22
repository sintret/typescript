function greet(name : string | undefined) : void {
    if(name)
        console.log(name)
    else
        console.log("hola")
}

greet(undefined)