export class DocumentFile {

    public id: any = <any>new Date() / 1;
    public checked: Boolean = false;

    constructor(
        public file: any,
       // public file: File,
        public src?: string
    ) { }
}