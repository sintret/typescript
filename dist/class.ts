class Point {
    x : number;
    y : number;

    constructor(x?:number,y?:number) {
        if(x)
        this.x=x;

        if(y)
        this.y=y;

    }

    draw() {
        console.log(`x = ${this.x}  y : ${this.y}`)
    }


    drawx = () => {
        console.log(`x = ${this.x}  y : ${this.y}`)
    }

    getX() {
        return this.x;
    }

    setX(value : number){
        this.x = value;
    }


    get X() {
        return this.x;
    }

    set X(value : number){
        this.x = value;
    }

    error(message:string) : never {
        throw new Error(message);
        
    }
}


let point = new Point(1,2);
point.draw();


let xx = point.getX();
point.X = 12;
let xxx = point.X;

const allowed : never  = point.error("ha")