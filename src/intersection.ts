type Draggable = {
    drag : () => void;
};

type Resizeable = {
    resize : () => void;
}

type UIWidget = Draggable & Resizeable;

let TextBox : UIWidget = {
    drag : ()=>{},
    resize:()=>{}
}