export class DocumentFile {

    public id: any = <any>new Date() / 1;

    // group images as one bill 
    public checked: Boolean = false;

    constructor(
        public file: any,
       // public file: File,
        public src?: string
    ) { }
}


export class Bill{
    // list of images 
    public images : DocumentFile [] = [];
    public added :Date = new Date();

    // name of tupe ?
    public type : string; 
    
}